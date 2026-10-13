import logging
import io
import httpx
from openai import OpenAI
from backend.app.core.config import settings

logger = logging.getLogger(__name__)

QUOTA_ERROR_CODE = "OPENAI_QUOTA_EXHAUSTED"


class OpenAIService:
    def __init__(self):
        self._client = None
        self._init_client()

    def _init_client(self):
        if settings.OPENAI_API_KEY:
            self._client = OpenAI(api_key=settings.OPENAI_API_KEY.strip())
        else:
            self._client = None

    @property
    def is_configured(self) -> bool:
        return bool(self._client and settings.OPENAI_API_KEY)

    def _is_quota_error(self, exc: Exception) -> bool:
        msg = str(exc).lower()
        return (
            "credit_balance_exhausted" in msg
            or "insufficient_quota" in msg
            or ("429" in msg and ("quota" in msg or "billing" in msg or "credit" in msg))
        )

    async def _load_image_as_png_bytes(self, image_url: str) -> bytes:
        import os
        if image_url.startswith("/storage/uploads/"):
            local_path = os.path.join(settings.STORAGE_DIR, "uploads", os.path.basename(image_url))
        elif image_url.startswith("/storage/renders/"):
            local_path = os.path.join(settings.STORAGE_DIR, "renders", os.path.basename(image_url))
        elif image_url.startswith("/storage/"):
            local_path = os.path.join(settings.STORAGE_DIR, image_url[len("/storage/"):])
        else:
            local_path = None

        if local_path and os.path.exists(local_path):
            with open(local_path, "rb") as f:
                raw = f.read()
        elif image_url.startswith("http"):
            async with httpx.AsyncClient(timeout=30) as client:
                resp = await client.get(image_url)
                resp.raise_for_status()
                raw = resp.content
        else:
            raise FileNotFoundError(f"Cannot locate image: {image_url}")

        try:
            from PIL import Image as PILImage
            src = PILImage.open(io.BytesIO(raw)).convert("RGBA")
            src = src.resize((1024, 1024), PILImage.LANCZOS)
            buf = io.BytesIO()
            src.save(buf, format="PNG")
            return buf.getvalue()
        except Exception:
            return raw

    async def generate_jewellery_photoshoot(
        self,
        garment_type: str,
        style: str,
        output_format: str,
        input_image_url: str = "",
        custom_prompt: str = "",
    ) -> dict:
        if not self.is_configured:
            raise RuntimeError("OpenAI API key is not configured on the backend server.")

        garment_clean = garment_type.replace("_", " ")
        style_clean = style.replace("_", " ")

        edit_prompt = (
            f"Professional commercial jewellery catalogue photograph. "
            f"Keep the exact jewellery piece unchanged. "
            f"Replace only the background with a {style_clean} aesthetic: "
            f"soft studio lighting, luxury editorial finish, 8K resolution. "
        )
        if custom_prompt:
            edit_prompt += f"Additional stylist notes: {custom_prompt}. "

        last_error = None

        if input_image_url:
            try:
                logger.info("Trying product-locked image edit (dall-e-2)...")
                png_bytes = await self._load_image_as_png_bytes(input_image_url)
                try:
                    from PIL import Image as PILImage
                    mask_img = PILImage.new("RGBA", (1024, 1024), (0, 0, 0, 0))
                    mask_buf = io.BytesIO()
                    mask_img.save(mask_buf, format="PNG")
                    mask_bytes = mask_buf.getvalue()
                except Exception:
                    mask_bytes = png_bytes

                response = self._client.images.edit(
                    model="dall-e-2",
                    image=("product.png", io.BytesIO(png_bytes), "image/png"),
                    mask=("mask.png", io.BytesIO(mask_bytes), "image/png"),
                    prompt=edit_prompt,
                    n=1,
                    size="1024x1024",
                    response_format="b64_json",
                )
                if response.data and response.data[0].b64_json:
                    return {"type": "b64", "data": response.data[0].b64_json, "mode": "product_locked"}
            except Exception as edit_err:
                if self._is_quota_error(edit_err):
                    raise RuntimeError(QUOTA_ERROR_CODE) from edit_err
                logger.warning(f"Image edit failed: {edit_err}")
                last_error = edit_err

            try:
                logger.info("Trying image variation (dall-e-2)...")
                png_bytes = await self._load_image_as_png_bytes(input_image_url)
                response = self._client.images.create_variation(
                    model="dall-e-2",
                    image=("product.png", io.BytesIO(png_bytes), "image/png"),
                    n=1,
                    size="1024x1024",
                    response_format="b64_json",
                )
                if response.data and response.data[0].b64_json:
                    return {"type": "b64", "data": response.data[0].b64_json, "mode": "product_variation"}
            except Exception as var_err:
                if self._is_quota_error(var_err):
                    raise RuntimeError(QUOTA_ERROR_CODE) from var_err
                logger.warning(f"Image variation failed: {var_err}")
                last_error = var_err

        text_prompt = (
            f"Commercial luxury jewellery catalogue photoshoot of a {garment_clean}. "
            f"Shot style: {style_clean} aesthetic. "
            f"Exquisite Indian craftsmanship, soft diffused luxury studio lighting, 8K resolution. "
        )
        if custom_prompt:
            text_prompt += f"Stylist notes: {custom_prompt}"

        for model_name in ["dall-e-3", "dall-e-2"]:
            try:
                logger.info(f"Text-to-image generation with {model_name} (creative mode)...")
                response = self._client.images.generate(
                    model=model_name,
                    prompt=text_prompt,
                    n=1,
                    size="1024x1024",
                    response_format="b64_json",
                )
                if response.data and response.data[0].b64_json:
                    return {"type": "b64", "data": response.data[0].b64_json, "mode": "creative_mode"}
            except Exception as gen_err:
                if self._is_quota_error(gen_err):
                    raise RuntimeError(QUOTA_ERROR_CODE) from gen_err
                logger.warning(f"{model_name} text generation failed: {gen_err}")
                last_error = gen_err

        raise RuntimeError(f"OpenAI generation failed across all strategies. Last error: {last_error}")


openai_service = OpenAIService()
