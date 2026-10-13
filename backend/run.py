import uvicorn
import os
import sys

# Ensure root directory is on PYTHONPATH
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.app.core.config import settings

if __name__ == "__main__":
    port = 8000
    print(f"Starting {settings.PROJECT_NAME} on {settings.HOST}:{port}...")
    uvicorn.run(
        "backend.app.main:app",
        host=settings.HOST,
        port=port,
        reload=False
    )
