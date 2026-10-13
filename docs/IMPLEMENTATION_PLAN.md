# GehnaStudio AI — Architecture & Implementation Plan

## Executive Overview
**GehnaStudio AI** is a production-grade jewellery photography mobile application built specifically for local Indian jewellers (retailers, wholesalers, and manufacturers). It transforms raw smartphone photos into luxury, catalog-ready product visuals using generative AI.

The application is architected as a **single shared frontend codebase** that deploys simultaneously as:
1. An **installable Android APK** (packaged via Capacitor).
2. An **installable Progressive Web App (PWA)** (accessible in browser with offline caching).

Both clients consume the exact same **Python FastAPI backend**, database, credit ledger, and backend-only AI pipeline.

---

## 1. Audit of Existing Workspace

### 1.1 Existing Files & Directories
| Path | Nature | Purpose / Relevance to GehnaStudio AI |
| :--- | :--- | :--- |
| `package.json` & `server.js` | Express Prototype | Rapid test server implementing reverse-engineered endpoint signatures and OpenAI test script. |
| `public/` | Prototype Frontend & Assets | Contains `style_previews/` (Indian bridal, studio, macro, closeup previews), `uploads/`, and exploratory HTML/CSS/JS. |
| `scripts/public/assets/` | Downloaded Media Assets | Authentic category icons (`necklace_earringset`, `bracelet`, `tops`, `ring`, `bangles`, `anklet`, `maangteeka`), guide assets, before/after pairs. |
| `decompiled_pages/` | Decompiled Source (12 routes) | Clean JSX references of original GehnaPhoto UI, modal flows, validation rules, and business logic. |
| `decompiled_src/` | Unbundled Bundle | Full single-file unminified JavaScript reference (`deobfuscated.js`). |
| `extracted_target/` | Original Production Assets | Original raw JS chunks and CSS from Vercel deployment. |
| `scripts/` | Extraction Utilities | 13 Node.js analysis and download scripts used during investigation. |
| `.env` | Local Secrets | Contains `OPENAI_API_KEY` (MUST be kept strictly on backend, ignored by Git). |

### 1.2 Reusable Visual & Structural Assets
- **Category Icons**: Vector/WebP icons for 8 jewellery classes (`jewellery_set`, `necklace`, `ring`, `earring`, `bangle`, `bracelet`, `payal`, `maangteeka`).
- **Style Matrices**: Previews for 7 shot styles (`indian_bridal`, `studio`, `macro`, `flatlay`, `modern_wear`, `closeup`, `shop_display`).
- **Interactive Logic Reference**: Before/After split comparison maths, job status polling intervals, retry handlers.

---

## 2. Target Architecture: Unified PWA + Android APK

```
                      +---------------------------------------+
                      |         GehnaStudio AI Client         |
                      |   React 18 + TypeScript + Vite + PWA  |
                      |     Tailwind CSS (Warm Ivory & Gold)   |
                      |          TanStack Query + Router      |
                      +-------------------+-------------------+
                                          |
                        +-----------------+-----------------+
                        |                                   |
              [Android App (Capacitor)]               [PWA (Browser)]
              - Native Camera & Files                 - Service Worker
              - Hardware Back Button                  - Install Prompt
              - Status Bar & Notch Safe               - Responsive Touch
                        |                                   |
                        +-----------------+-----------------+
                                          |
                           HTTPS REST (JSON / Multipart)
                                          |
                                          v
                      +---------------------------------------+
                      |          FastAPI Backend Engine       |
                      |           Python 3.11+ / 3.13         |
                      |  - JWT Auth / Shop Identity           |
                      |  - Credit Ledger & Billing API        |
                      |  - Job Queue & Generation Engine      |
                      |  - Health & Telemetry (/api/v1/health)|
                      +-------------------+-------------------+
                                          |
                       +------------------+------------------+
                       |                                     |
                       v                                     v
         +---------------------------+         +---------------------------+
         |     PostgreSQL / SQLite   |         |      AI Pipeline Worker   |
         |    - Shops & Users        |         |    - OpenAI (Backend only)|
         |    - Credit Balances      |         |    - Background processing|
         |    - Image Jobs & Assets  |         |    - Safe Prompts         |
         +---------------------------+         +---------------------------+
```

### 2.1 Technology Stack Selection
1. **Frontend (`frontend/`)**:
   - **Framework**: React 18 with TypeScript and Vite.
   - **Styling**: Tailwind CSS implementing the approved GehnaStudio AI design system:
     - Background: Warm ivory (`#FAF8F3`)
     - Accents: Antique Gold (`#92772D`) & Deep Gold (`#745D20`)
     - Body Text: Charcoal (`#25241F`)
     - Borders: Soft Beige (`#E8E2D7`)
     - Surfaces: Pure White (`#FFFFFF`) with subtle luxury elevations
   - **Navigation**: React Router v6 configured with mobile bottom-navigation shell.
   - **Data Fetching**: TanStack Query v5 for caching and background status polling.
   - **Mobile Packaging**: Capacitor v6 (`@capacitor/core`, `@capacitor/android`, `@capacitor/camera`, `@capacitor/status-bar`).
   - **PWA**: Web App Manifest (`manifest.webmanifest`), Apple touch icons, Service Worker.
2. **Backend (`backend/`)**:
   - **Framework**: FastAPI (Python) with Pydantic v2 schemas.
   - **Database**: SQLAlchemy ORM with SQLite (zero-config local run) and PostgreSQL compatibility.
   - **Background Jobs**: Async background tasks for generation jobs.
   - **AI Integration**: Backend-only OpenAI client.

---

## 3. Security & Isolation Invariants
1. **Zero Secret Leakage**: The client communicates solely via `/api/v1/*`. No API key is ever present in client-side code, `.env.production`, or Capacitor Android bundle.
2. **Independence from Third Parties**: Zero dependencies on the original site's Supabase instance, Render backend, or PostHog instance. All schemas, tables, and endpoints are self-contained.
3. **Preservation**: The reference directories (`decompiled_pages/`, `decompiled_src/`, `extracted_target/`, `scripts/`) remain read-only reference archives.

---

## 4. Phased Implementation Sequence

### Phase 1: Foundation (Current Step)
- [x] Audit workspace & document implementation plan (`docs/IMPLEMENTATION_PLAN.md`).
- [ ] Scaffold `backend/` with FastAPI, Pydantic, health check (`GET /api/v1/health`), and CORS.
- [ ] Scaffold `frontend/` with React, TypeScript, Vite, Tailwind CSS, and Capacitor.
- [ ] Implement central typed API client (`frontend/src/services/api.ts`).
- [ ] Configure PWA manifest and icons.
- [ ] Build reusable foundation components (LoadingState, ErrorState, EmptyState).
- [ ] Build the first runnable mobile-first Dashboard screen for Indian Jewellers.
- [ ] Verify local execution and ensure reference files are untouched.

### Phase 2: Photoshoot Studio Wizard (Next Step)
- [ ] Step-by-step mobile photoshoot flow: Jewellery Type -> Style & Ratio -> Upload -> Review.
- [ ] Camera and gallery integration via Capacitor + Web file picker.
- [ ] Job submission, progress polling, and preview.

### Phase 3: Gallery & Credit System
- [ ] Persistent gallery of shoots with filter by piece.
- [ ] Credit ledger, packages, and shop account profile.

### Phase 4: Production Android Packaging & PWA Audit
- [ ] Capacitor Android platform synchronization (`npx cap add android`).
- [ ] Android status bar styling, splash screen, and offline PWA service worker.
