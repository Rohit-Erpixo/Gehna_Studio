from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class ImageJobCreate(BaseModel):
    input_image_url: str = Field(..., description="URL or relative path to uploaded jewellery image")
    garment_type: str = Field("jewellery_set", description="Category: jewellery_set, ring, necklace, earring, etc.")
    style: str = Field("indian_bridal", description="Style: indian_bridal, studio, macro, flatlay, modern_wear, closeup")
    output_format: str = Field("catalogue_portrait", description="Ratio: catalogue_portrait (3:4), instagram_square (1:1), lookbook_landscape (16:9), story_vertical (9:16)")
    custom_prompt: Optional[str] = Field(None, description="Optional custom stylist prompt additions")
    title: Optional[str] = Field(None, description="Product Name or Photoshoot Title")

class ImageJobResponse(BaseModel):
    id: str
    status: str
    garment_type: str
    style: str
    output_format: str
    created_at: str

class ImageJobStatus(BaseModel):
    id: str
    status: str
    output_url: Optional[str] = None
    input_image_url: Optional[str] = None
    title: Optional[str] = None
    warning: Optional[str] = None
    error: Optional[str] = None

class QueueStatusResponse(BaseModel):
    active: int
    estimated_seconds: int
