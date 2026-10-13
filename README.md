# 💎 Gehna Studio AI

> **Production-ready AI jewellery photography app for Indian jewellers.**
> One codebase → Android APK + Progressive Web App (PWA), backed by a shared FastAPI server.

---

## ✨ Features

| Feature | Details |
|---|---|
| 📸 AI Photoshoot | Uploads your jewellery photo; edits only the background while preserving the product |
| 🎨 6 Studio Styles | Ivory Luxury, Luxury Black, Champagne Studio, Clean Catalogue, Bridal Collection, Royal Display |
| 📐 4 Aspect Ratios | 1:1, 4:5 (Instagram), 9:16 (Story), 16:9 (Landscape) |
| 🖼️ Gallery | Browse, compare original vs. AI-enhanced, download approved shots |
| 📱 Android APK | Installable via Capacitor with native camera support |
| 🌐 PWA | Installable on any browser with offline manifest |
| 🔒 Product-Locked Mode | dall-e-2 image-edit endpoint preserves every gemstone and prong |

---

## 🗂️ Project Structure

```
GehnaPhoto/
├── backend/                # FastAPI backend
│   ├── app/
│   │   ├── api/v1/endpoints/   # jobs, studio, templates
│   │   ├── services/           # openai_service, storage_service
│   │   ├── schemas/            # Pydantic models
│   │   └── core/config.py      # Settings / env vars
│   └── tests/              # pytest validation tests
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── pages/          # Create, Gallery, Templates, Profile, Dashboard
│   │   ├── services/api.ts # API client with resolveImageUrl
│   │   └── App.tsx         # Router + React Query
│   ├── android/            # Capacitor Android project
│   └── public/             # PWA manifest, icons, assets
└── docs/
    └── IMPLEMENTATION_PLAN.md
```

---

## 🚀 Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
# Create backend/.env with:
# OPENAI_API_KEY=sk-...
# STORAGE_DIR=./storage
uvicorn backend.app.main:app --reload --port 8000
```

### Frontend (PWA Dev)
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

### Android APK
```bash
cd frontend
npm run build
npx cap sync android
# Open frontend/android/ in Android Studio → Build → Generate APK
```

---

## 🧠 AI Pipeline (Product-Identity-First)

1. **Image Edit** (`dall-e-2 /images/edits`) — uploads your jewellery photo; only background changes
2. **Image Variation** (`dall-e-2 /images/variations`) — fallback, still uses real product
3. **Text-to-image** (`dall-e-3`) — last resort, labelled *Creative Mode* with a disclaimer

> On OpenAI quota exhaustion the job is marked **failed** with `OPENAI_QUOTA_EXHAUSTED` — no fake image substitution.

---

## 🧪 Tests
```bash
python -m pytest backend/tests/test_quota_handling.py -v
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `OPENAI_API_KEY` | Your OpenAI API key |
| `STORAGE_DIR` | Local directory for uploads & renders (default: `./storage`) |

---

## 📄 License
Private — Gehna Studio AI © 2024
