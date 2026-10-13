from fastapi import APIRouter
from typing import List, Dict, Any, Optional
from pydantic import BaseModel
import uuid

router = APIRouter()

class StudioProjectCreate(BaseModel):
    id: Optional[str] = None
    title: str
    category: str
    style: str
    ratio: str
    thumbnail_url: str
    original_image_url: Optional[str] = None
    status: str = "ready"
    versions: Optional[int] = 1

RECENT_PROJECTS: List[Dict[str, Any]] = [
    {
        "id": "proj_101",
        "title": "Kundan Polki Bridal Choker",
        "category": "jewellery_set",
        "style": "Ivory Luxury",
        "ratio": "4:5",
        "date": "2 hours ago",
        "thumbnail_url": "/assets/style_previews/jewellery_set/indian_bridal/preview.jpg",
        "original_image_url": "/assets/style_previews/jewellery_set/indian_bridal/preview.jpg",
        "status": "approved",
        "versions": 3,
    },
    {
        "id": "proj_102",
        "title": "Solitaire Diamond Ring",
        "category": "ring",
        "style": "Luxury Black",
        "ratio": "1:1",
        "date": "Yesterday",
        "thumbnail_url": "/assets/style_previews/ring/macro/preview.jpg",
        "original_image_url": "/assets/style_previews/ring/macro/preview.jpg",
        "status": "ready",
        "versions": 2,
    },
    {
        "id": "proj_103",
        "title": "Temple Gold Jhumkas",
        "category": "earring",
        "style": "Champagne Studio",
        "ratio": "4:5",
        "date": "3 days ago",
        "thumbnail_url": "/assets/style_previews/earring/closeup/preview.jpg",
        "original_image_url": "/assets/style_previews/earring/closeup/preview.jpg",
        "status": "ready",
        "versions": 1,
    }
]

def add_studio_project(project: Dict[str, Any]):
    existing_idx = next((i for i, p in enumerate(RECENT_PROJECTS) if p.get("id") == project.get("id")), None)
    if existing_idx is not None:
        RECENT_PROJECTS[existing_idx] = project
    else:
        RECENT_PROJECTS.insert(0, project)

TEMPLATES = [
    {
        "id": "tmpl_bridal",
        "name": "Royal Indian Bridal",
        "category": "Bridal Wear",
        "badge": "Top Seller",
        "description": "Silk velvet background, warm royal glow, soft festive lighting.",
        "image_url": "/assets/style_previews/jewellery_set/indian_bridal/preview.jpg"
    },
    {
        "id": "tmpl_studio",
        "name": "Obsidian Luxury Studio",
        "category": "Catalog",
        "badge": "E-Commerce",
        "description": "Dark reflective glass, specular gleam, 100% color-true gems.",
        "image_url": "/assets/style_previews/jewellery_set/studio/preview.jpg"
    },
    {
        "id": "tmpl_macro",
        "name": "Macro Gem Inspection",
        "category": "High Jewellery",
        "badge": "Ultra HD",
        "description": "Maximum facet sharpness, prong detail, pristine brilliance.",
        "image_url": "/assets/style_previews/ring/macro/preview.jpg"
    },
    {
        "id": "tmpl_flatlay",
        "name": "Italian Marble Flatlay",
        "category": "Social Media",
        "badge": "Instagram",
        "description": "Top-down on Carrara marble with subtle floral & silk styling.",
        "image_url": "/assets/style_previews/earring/flatlay/preview.jpg"
    }
]

@router.get("/studio/projects")
async def get_recent_projects():
    from backend.app.api.v1.endpoints.jobs import JOBS_DB
    for job_id, job in JOBS_DB.items():
        if job.get("status") == "done" and job.get("output_url"):
            if not any(p.get("id") == job_id for p in RECENT_PROJECTS):
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
    return RECENT_PROJECTS

@router.post("/studio/projects")
async def create_studio_project(payload: StudioProjectCreate):
    project_id = payload.id or f"proj_{uuid.uuid4().hex[:8]}"
    proj = {
        "id": project_id,
        "title": payload.title,
        "category": payload.category,
        "style": payload.style,
        "ratio": payload.ratio,
        "date": "Just now",
        "thumbnail_url": payload.thumbnail_url,
        "original_image_url": payload.original_image_url or payload.thumbnail_url,
        "status": payload.status,
        "versions": payload.versions or 1,
    }
    add_studio_project(proj)
    return proj

@router.get("/studio/templates")
async def get_favourite_templates():
    return TEMPLATES
