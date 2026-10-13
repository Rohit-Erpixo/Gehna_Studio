from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from backend.app.core.config import settings
from backend.app.api.v1.router import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API for GehnaStudio AI - Unified PWA & Capacitor Android Clients",
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None,
)

# CORS Configuration for local web, PWA and Android Capacitor
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import mimetypes

# Register standard image MIME types (especially for Windows where .webp is often unregistered)
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("image/png", ".png")
mimetypes.add_type("image/jpeg", ".jpg")
mimetypes.add_type("image/jpeg", ".jpeg")
mimetypes.add_type("image/svg+xml", ".svg")

# Mount Local Storage
storage_dir = os.path.abspath(settings.STORAGE_DIR)
os.makedirs(os.path.join(storage_dir, "uploads"), exist_ok=True)
os.makedirs(os.path.join(storage_dir, "renders"), exist_ok=True)
app.mount("/storage", StaticFiles(directory=storage_dir), name="storage")

# Mount Existing Preview Assets for unified local serving
public_assets_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "public", "assets"))
if not os.path.exists(public_assets_dir):
    public_assets_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "public", "assets"))

if os.path.exists(public_assets_dir):
    app.mount("/assets", StaticFiles(directory=public_assets_dir), name="assets")

# Include Versioned API Router
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "docs": "/docs",
        "health": f"{settings.API_V1_STR}/health"
    }
