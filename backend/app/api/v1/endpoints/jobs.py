from fastapi import APIRouter, UploadFile, File, HTTPException, BackgroundTasks
from typing import List, Dict, Any
import uuid
import datetime
from backend.app.schemas.job import ImageJobCreate, ImageJobResponse, ImageJobStatus, QueueStatusResponse
from backend.app.services.storage_service import storage_service
from backend.app.services.openai_service import openai_service

router = APIRouter()

# In-memory job repository (easily backed by DB/Redis)
JOBS_DB: Dict[str, Dict[str, Any]] = {}

# No seed data — all jobs must originate from real user uploads.

@router.post("/jobs/upload")
async def upload_jewellery_photo(file: UploadFile = File(...)):
    """
    Accepts raw jewellery smartphone capture from either PWA file input or Capacitor native camera.
    """
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file must be a valid image (JPEG, PNG, WEBP).")

    url = await storage_service.save_upload(file)
    return {
        "input_image_url": url,
        "filename": file.filename,
        "status": "ready"
    }

async def process_image_job_worker(job_id: str, payload: ImageJobCreate):
    from backend.app.services.openai_service import QUOTA_ERROR_CODE
    job = JOBS_DB.get(job_id)
    if not job:
        return

    if not openai_service.is_configured:
        job["status"] = "failed"
        job["error"] = "Backend AI service is not configured with an API key."
        return

    try:
        result = await openai_service.generate_jewellery_photoshoot(
            garment_type=payload.garment_type,
            style=payload.style,
            output_format=payload.output_format,
            input_image_url=payload.input_image_url or "",
            custom_prompt=payload.custom_prompt or "",
        )

        if result["type"] == "b64":
            output_url = storage_service.save_base64_render(result["data"], job_id)
        else:
            output_url = result["data"]

        job["status"] = "done"
        job["output_url"] = output_url
        job["warning"] = None
        # Flag creative mode so the frontend can show a disclaimer
        if result.get("mode") == "creative_mode":
            job["warning"] = (
                "Creative mode: no product image was available so this output was generated "
                "from a text description only. Product identity is NOT guaranteed."
            )

        # Record in studio projects
        try:
            from backend.app.api.v1.endpoints.studio import add_studio_project
            add_studio_project({
                "id": job_id,
                "title": job.get("title") or f"{job.get('garment_type', 'Jewellery').replace('_', ' ').title()} Shoot",
                "category": job.get("garment_type", "jewellery_set"),
                "style": (job.get("style") or "Ivory Luxury").replace("_", " ").title(),
                "ratio": job.get("output_format", "4:5"),
                "date": "Just now",
                "thumbnail_url": job["output_url"],
                "original_image_url": job.get("input_image_url") or job["output_url"],
                "status": "ready",
                "versions": 1,
            })
        except Exception:
            pass

    except RuntimeError as rt_err:
        err_str = str(rt_err)
        job["status"] = "failed"
        if err_str == QUOTA_ERROR_CODE:
            job["error"] = (
                "OPENAI_QUOTA_EXHAUSTED: Your OpenAI account has no remaining credits. "
                "Please top up at platform.openai.com/account/billing and retry."
            )
        else:
            job["error"] = err_str
    except Exception as e:
        job["status"] = "failed"
        job["error"] = str(e)

@router.post("/jobs", response_model=ImageJobResponse)
async def create_image_job(payload: ImageJobCreate, background_tasks: BackgroundTasks):
    job_id = f"job_{uuid.uuid4().hex[:12]}"
    now = datetime.datetime.utcnow().isoformat()

    JOBS_DB[job_id] = {
        "id": job_id,
        "title": payload.title or f"{payload.garment_type.replace('_', ' ').title()} Shoot",
        "input_image_url": payload.input_image_url,
        "garment_type": payload.garment_type,
        "style": payload.style,
        "output_format": payload.output_format,
        "custom_prompt": payload.custom_prompt,
        "status": "generating",
        "created_at": now,
        "output_url": None,
        "warning": None,
        "error": None
    }

    background_tasks.add_task(process_image_job_worker, job_id, payload)

    return ImageJobResponse(
        id=job_id,
        status="generating",
        garment_type=payload.garment_type,
        style=payload.style,
        output_format=payload.output_format,
        created_at=now
    )

@router.get("/jobs/status", response_model=List[ImageJobStatus])
async def get_jobs_status(ids: str):
    job_ids = [j.strip() for j in ids.split(",") if j.strip()]
    results = []
    for jid in job_ids:
        job = JOBS_DB.get(jid)
        if job:
            results.append(ImageJobStatus(
                id=job["id"],
                status=job["status"],
                output_url=job.get("output_url"),
                input_image_url=job.get("input_image_url"),
                title=job.get("title"),
                warning=job.get("warning"),
                error=job.get("error")
            ))
        else:
            results.append(ImageJobStatus(
                id=jid,
                status="not_found",
                error="Job ID not found"
            ))
    return results

@router.get("/jobs/queue", response_model=QueueStatusResponse)
async def get_queue_status():
    active_count = sum(1 for j in JOBS_DB.values() if j["status"] == "generating")
    return QueueStatusResponse(
        active=active_count,
        estimated_seconds=active_count * 15
    )
