from pydantic_settings import BaseSettings
from typing import List
import os
import json

class Settings(BaseSettings):
    PROJECT_NAME: str = "GehnaStudio AI"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "capacitor://localhost",
        "http://localhost",
        "https://localhost",
    ]
    
    # Database & Storage
    DATABASE_URL: str = "sqlite:///./gehna.db"
    STORAGE_DIR: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "storage"))
    
    # AI Backend Integration
    OPENAI_API_KEY: str = ""
    DEFAULT_IMAGE_MODEL: str = "gpt-image-1"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True

settings = Settings()

# Ensure storage directory exists
os.makedirs(os.path.join(settings.STORAGE_DIR, "uploads"), exist_ok=True)
os.makedirs(os.path.join(settings.STORAGE_DIR, "renders"), exist_ok=True)
