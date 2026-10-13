from fastapi import APIRouter
from backend.app.schemas.health import HealthCheckResponse
from backend.app.core.config import settings
from backend.app.services.openai_service import openai_service
import os

router = APIRouter()

@router.get("/health", response_model=HealthCheckResponse)
async def health_check():
    """
    Standard health check endpoint for GehnaStudio AI.
    Verifies service status, backend environment, storage readiness and AI pipeline.
    """
    storage_ready = os.path.exists(settings.STORAGE_DIR) and os.path.isdir(settings.STORAGE_DIR)
    
    return HealthCheckResponse(
        status="healthy",
        project=settings.PROJECT_NAME,
        version=settings.VERSION,
        environment=settings.ENVIRONMENT,
        ai_service_configured=openai_service.is_configured,
        storage_ready=storage_ready,
        details={
            "debug": settings.DEBUG,
            "storage_dir": settings.STORAGE_DIR,
            "models_supported": ["gpt-image-1", "dall-e-3"],
            "client_type": "Unified (PWA + Capacitor Android)"
        }
    )
