from pydantic import BaseModel
from typing import Dict, Any

class HealthCheckResponse(BaseModel):
    status: str
    project: str
    version: str
    environment: str
    ai_service_configured: bool
    storage_ready: bool
    details: Dict[str, Any]
