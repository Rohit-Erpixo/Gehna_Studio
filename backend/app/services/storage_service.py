import os
import shutil
from fastapi import UploadFile
import uuid
from backend.app.core.config import settings

class StorageService:
    def __init__(self):
        self.upload_dir = os.path.join(settings.STORAGE_DIR, "uploads")
        self.render_dir = os.path.join(settings.STORAGE_DIR, "renders")
        os.makedirs(self.upload_dir, exist_ok=True)
        os.makedirs(self.render_dir, exist_ok=True)

    async def save_upload(self, file: UploadFile) -> str:
        ext = os.path.splitext(file.filename)[1] or ".jpg"
        file_id = f"jewel_{uuid.uuid4().hex[:12]}{ext}"
        destination = os.path.join(self.upload_dir, file_id)
        
        content = await file.read()
        with open(destination, 'wb') as out_file:
            out_file.write(content)
            
        return f"/storage/uploads/{file_id}"

    def save_base64_render(self, b64_data: str, job_id: str) -> str:
        import base64
        filename = f"render_{job_id}.png"
        filepath = os.path.join(self.render_dir, filename)
        with open(filepath, "wb") as f:
            f.write(base64.b64decode(b64_data))
        return f"/storage/renders/{filename}"

storage_service = StorageService()
