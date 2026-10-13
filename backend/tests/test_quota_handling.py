"""
Backend tests: quota error handling and product identity validation.
Run with: python -m pytest backend/tests/test_quota_handling.py -v
"""
import asyncio
import pytest
from unittest.mock import AsyncMock, MagicMock, patch


# ─── openai_service tests ──────────────────────────────────────────────────────

def test_quota_error_code_exported():
    """QUOTA_ERROR_CODE must be importable and non-empty."""
    from backend.app.services.openai_service import QUOTA_ERROR_CODE
    assert QUOTA_ERROR_CODE == "OPENAI_QUOTA_EXHAUSTED"


def test_is_quota_error_detection():
    """_is_quota_error correctly identifies credit exhaustion messages."""
    from backend.app.services.openai_service import OpenAIService
    svc = OpenAIService.__new__(OpenAIService)

    quota_cases = [
        Exception("openai 429 credit_balance_exhausted"),
        Exception("Error code: 429 - insufficient_quota"),
        Exception("429 billing hard limit reached"),
    ]
    non_quota_cases = [
        Exception("model not found"),
        Exception("rate_limit_exceeded"),
        Exception("timeout"),
    ]

    for exc in quota_cases:
        assert svc._is_quota_error(exc), f"Should be quota error: {exc}"
    for exc in non_quota_cases:
        assert not svc._is_quota_error(exc), f"Should NOT be quota error: {exc}"


@pytest.mark.asyncio
async def test_quota_error_raises_quota_error_code():
    """
    When OpenAI returns a quota error, generate_jewellery_photoshoot must raise
    RuntimeError(QUOTA_ERROR_CODE) — never return a fake successful result.
    """
    from backend.app.services.openai_service import OpenAIService, QUOTA_ERROR_CODE

    svc = OpenAIService.__new__(OpenAIService)

    # Simulate a configured client
    mock_client = MagicMock()
    svc._client = mock_client

    quota_exc = Exception("openai 429 credit_balance_exhausted")

    # All API methods raise the quota exception
    mock_client.images.edit.side_effect = quota_exc
    mock_client.images.create_variation.side_effect = quota_exc
    mock_client.images.generate.side_effect = quota_exc

    with patch.object(svc, "_load_image_as_png_bytes", new_callable=AsyncMock, return_value=b"fakepng"):
        with patch("backend.app.core.config.settings") as mock_settings:
            mock_settings.OPENAI_API_KEY = "sk-test-key"
            mock_settings.STORAGE_DIR = "/tmp"
            svc._client = mock_client

            with pytest.raises(RuntimeError) as exc_info:
                await svc.generate_jewellery_photoshoot(
                    garment_type="ring",
                    style="ivory_luxury",
                    output_format="1:1",
                    input_image_url="/storage/uploads/test.jpg",
                )
            assert str(exc_info.value) == QUOTA_ERROR_CODE, (
                "Must raise RuntimeError(QUOTA_ERROR_CODE), not a fake success"
            )


# ─── jobs.py worker tests ──────────────────────────────────────────────────────

@pytest.mark.asyncio
async def test_worker_marks_job_failed_on_quota():
    """
    process_image_job_worker must set job status='failed' and include the
    OPENAI_QUOTA_EXHAUSTED message when openai_service raises it.
    Never substitute a static fallback and mark the job done.
    """
    import datetime
    from backend.app.services.openai_service import QUOTA_ERROR_CODE

    # Patch JOBS_DB with a real-looking job
    fake_job = {
        "id": "job_test001",
        "title": "Test Ring",
        "input_image_url": "/storage/uploads/ring.jpg",
        "garment_type": "ring",
        "style": "ivory_luxury",
        "output_format": "1:1",
        "custom_prompt": "",
        "status": "generating",
        "created_at": datetime.datetime.utcnow().isoformat(),
        "output_url": None,
        "warning": None,
        "error": None,
    }

    mock_service = AsyncMock()
    mock_service.is_configured = True
    mock_service.generate_jewellery_photoshoot = AsyncMock(
        side_effect=RuntimeError(QUOTA_ERROR_CODE)
    )

    from backend.app.schemas.job import ImageJobCreate
    payload = ImageJobCreate(
        input_image_url="/storage/uploads/ring.jpg",
        garment_type="ring",
        style="ivory_luxury",
        output_format="1:1",
    )

    with patch("backend.app.api.v1.endpoints.jobs.JOBS_DB", {"job_test001": fake_job}):
        with patch("backend.app.api.v1.endpoints.jobs.openai_service", mock_service):
            from backend.app.api.v1.endpoints.jobs import process_image_job_worker
            await process_image_job_worker("job_test001", payload)

    assert fake_job["status"] == "failed", "Job must be failed, not done"
    assert fake_job["output_url"] is None, "No output URL must be set on quota failure"
    assert "OPENAI_QUOTA_EXHAUSTED" in (fake_job["error"] or ""), (
        f"Error must mention OPENAI_QUOTA_EXHAUSTED, got: {fake_job['error']}"
    )


@pytest.mark.asyncio
async def test_worker_preserves_input_image_url():
    """
    After a job is created, the original input_image_url stored in JOBS_DB must
    remain the one the user uploaded — not overwritten by any fallback.
    """
    import datetime
    original_upload = "/storage/uploads/diamond_ring_original.jpg"

    fake_job = {
        "id": "job_test002",
        "title": "Diamond Ring",
        "input_image_url": original_upload,
        "garment_type": "ring",
        "style": "luxury_black",
        "output_format": "4:5",
        "custom_prompt": "",
        "status": "generating",
        "created_at": datetime.datetime.utcnow().isoformat(),
        "output_url": None,
        "warning": None,
        "error": None,
    }

    from backend.app.services.openai_service import QUOTA_ERROR_CODE
    from backend.app.schemas.job import ImageJobCreate

    mock_service = AsyncMock()
    mock_service.is_configured = True
    mock_service.generate_jewellery_photoshoot = AsyncMock(
        side_effect=RuntimeError(QUOTA_ERROR_CODE)
    )

    payload = ImageJobCreate(
        input_image_url=original_upload,
        garment_type="ring",
        style="luxury_black",
        output_format="4:5",
    )

    with patch("backend.app.api.v1.endpoints.jobs.JOBS_DB", {"job_test002": fake_job}):
        with patch("backend.app.api.v1.endpoints.jobs.openai_service", mock_service):
            from backend.app.api.v1.endpoints.jobs import process_image_job_worker
            await process_image_job_worker("job_test002", payload)

    # The original upload URL must be intact
    assert fake_job["input_image_url"] == original_upload, (
        "input_image_url must not be overwritten by a fallback asset"
    )


@pytest.mark.asyncio
async def test_successful_job_uses_real_output():
    """
    A successful generation must store the actual rendered output URL,
    not a fixed/hardcoded path.
    """
    import datetime
    from backend.app.schemas.job import ImageJobCreate

    fake_job = {
        "id": "job_test003",
        "input_image_url": "/storage/uploads/necklace.jpg",
        "garment_type": "jewellery_set",
        "style": "ivory_luxury",
        "output_format": "4:5",
        "custom_prompt": "",
        "status": "generating",
        "title": "Necklace",
        "created_at": datetime.datetime.utcnow().isoformat(),
        "output_url": None,
        "warning": None,
        "error": None,
    }

    mock_service = AsyncMock()
    mock_service.is_configured = True
    mock_service.generate_jewellery_photoshoot = AsyncMock(
        return_value={"type": "b64", "data": "aGVsbG8=", "mode": "product_locked"}
    )

    mock_storage = MagicMock()
    mock_storage.save_base64_render.return_value = "/storage/renders/render_job_test003.png"

    payload = ImageJobCreate(
        input_image_url="/storage/uploads/necklace.jpg",
        garment_type="jewellery_set",
        style="ivory_luxury",
        output_format="4:5",
    )

    with patch("backend.app.api.v1.endpoints.jobs.JOBS_DB", {"job_test003": fake_job}):
        with patch("backend.app.api.v1.endpoints.jobs.openai_service", mock_service):
            with patch("backend.app.api.v1.endpoints.jobs.storage_service", mock_storage):
                from backend.app.api.v1.endpoints.jobs import process_image_job_worker
                await process_image_job_worker("job_test003", payload)

    assert fake_job["status"] == "done"
    assert fake_job["output_url"] == "/storage/renders/render_job_test003.png"
    # Must NOT be the old hardcoded master render
    assert "64be2a28b9b1" not in (fake_job["output_url"] or ""), (
        "Output URL must not point to the old hardcoded master render asset"
    )
