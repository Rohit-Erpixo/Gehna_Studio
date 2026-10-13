from fastapi import APIRouter
from backend.app.api.v1.endpoints import health, jobs, credits, studio

api_router = APIRouter()

api_router.include_router(health.router, tags=["Health"])
api_router.include_router(jobs.router, tags=["Image Jobs"])
api_router.include_router(credits.router, tags=["Credits & Accounts"])
api_router.include_router(studio.router, tags=["Studio & Projects"])
