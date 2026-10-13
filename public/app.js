// ==========================================================================
// GEHNA PHOTO — CLIENT APPLICATION JAVASCRIPT
// ==========================================================================

// State Constants & Data
const JEWELLERY_TYPES = [
  { key: 'jewellery_set', label: 'Jewellery Set', sub: 'Necklace & Tops together', icon: '/assets/necklace_earringset-Wkr9Vv7w.webp' },
  { key: 'necklace', label: 'Necklace', sub: 'Choker & Royal Haar', icon: '/assets/necklace_earringset-Wkr9Vv7w.webp' },
  { key: 'ring', label: 'Ring', sub: 'Solitaire & Cocktail rings', icon: '/assets/ring-DUl_mvHS.webp' },
  { key: 'earring', label: 'Earrings', sub: 'Jhumkas, Drops & Tops', icon: '/assets/tops-BpnZaVVo.webp' },
  { key: 'bracelet_bangle', label: 'Bangles', sub: 'Stack or single kadas', icon: '/assets/bangles-Dazgn-L6.webp' },
  { key: 'bracelet', label: 'Bracelet', sub: 'Tennis & charm wrists', icon: '/assets/bracelet-cHy5FZKi.webp' },
  { key: 'payal', label: 'Payal (Anklet)', sub: 'Traditional foot jewellery', icon: '/assets/anklet-CtQHfBSu.webp' },
  { key: 'maan_tika', label: 'Maang Teeka', sub: 'Royal forehead jewellery', icon: '/assets/maangteeka-40kRiqAa.webp' }
];

const SHOT_STYLES = [
  { key: 'indian_bridal', label: 'Indian Bridal', desc: 'Opulent silk velvet & warm royal bridal glow', thumb: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg' },
  { key: 'studio', label: 'Luxury Studio', desc: 'Clean reflections on sleek dark obsidian acrylic', thumb: '/assets/style_previews/jewellery_set/studio/preview.jpg' },
  { key: 'macro', label: 'Macro Gem Detail', desc: 'Hyper-sharp 8k focus on gem facets and prongs', thumb: '/assets/style_previews/ring/macro/preview.jpg' },
  { key: 'flatlay', label: 'Editorial FlatLay', desc: 'Arranged top-down on marble surface with props', thumb: '/assets/style_previews/earring/flatlay/preview.jpg' },
  { key: 'modern_wear', label: 'Modern Lifestyle', desc: 'Contemporary high-fashion model styling', thumb: '/assets/style_previews/bracelet/modern_wear/preview.jpg' },
  { key: 'closeup', label: 'Tight Close-up', desc: 'Commercial tight crop with soft depth of field', thumb: '/assets/style_previews/jewellery_set/closeup/preview.jpg' }
];

const ASPECT_RATIOS = [
  { key: 'catalogue_portrait', label: 'Catalogue (3:4)', ratio: '3:4', w: 24, h: 32, note: 'Websites & Lookbooks' },
  { key: 'instagram_square', label: 'Square (1:1)', ratio: '1:1', w: 28, h: 28, note: 'Instagram Posts' },
  { key: 'lookbook_landscape', label: 'Landscape (16:9)', ratio: '16:9', w: 34, h: 20, note: 'Hero Banners' },
  { key: 'story_vertical', label: 'Vertical (9:16)', ratio: '9:16', w: 18, h: 32, note: 'Reels & Stories' }
];

// App Global State
const state = {
  currentStep: 1,
  selectedType: 'jewellery_set',
  selectedStyle: 'indian_bridal',
  selectedRatio: 'catalogue_portrait',
  uploadedFile: null,
  uploadedUrl: '/assets/landing_animation/input/input-1.jpg',
  userCredits: 25,
  activeJobId: null,
  jobTimerInterval: null,
  apiKey: localStorage.getItem('gehna_openai_key') || '',
  galleryFilter: 'all'
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCategoriesGrid();
  renderStylesShowcase();
  renderWizardTypeGrid();
  renderWizardStyles();
  renderWizardRatios();
  initComparisonSlider();
  initDragAndDrop();
  checkApiStatus();
  fetchUserCredits();
  fetchGallery();
});

// Tab Navigation
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const targetTab = document.getElementById(`tab-${tabId}`);
  if (targetTab) {
    targetTab.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navBtn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (navBtn) navBtn.classList.add('active');

  if (tabId === 'gallery') fetchGallery();
  if (tabId === 'pricing') fetchPricing();
}

// ==========================================================================
// BEFORE / AFTER SLIDER LOGIC
// ==========================================================================
function initComparisonSlider() {
  const container = document.getElementById('compareSliderContainer');
  const beforeWrapper = document.getElementById('beforeWrapper');
  const divider = document.getElementById('sliderDivider');
  if (!container || !beforeWrapper || !divider) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let percent = ((xPos - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));

    beforeWrapper.style.width = `${percent}%`;
    divider.style.left = `${percent}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) updateSlider(e.clientX);
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (isDragging) updateSlider(e.touches[0].clientX);
  });
}

function toggleHeroSample(num) {
  const beforeImg = document.getElementById('beforeImage');
  const afterImg = document.getElementById('afterImage');
  if (num === 1) {
    beforeImg.src = '/assets/landing_animation/input/input-1.jpg';
    afterImg.src = '/assets/landing_animation/output/output-1.jpg';
  } else {
    beforeImg.src = '/assets/landing_animation/input/input-2.jpg';
    afterImg.src = '/assets/landing_animation/output/output-2.jpg';
  }
}

function loadSampleIntoStudio(num) {
  switchTab('generator');
  selectSamplePreset(num === 1 ? 'necklace' : 'ring');
}

// ==========================================================================
// RENDERERS: HOMEPAGE SHOWCASES
// ==========================================================================
function renderCategoriesGrid() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = JEWELLERY_TYPES.map(item => `
    <div class="category-card" onclick="selectCategoryAndLaunch('${item.key}')">
      <div class="category-icon-box">
        <img src="${item.icon}" alt="${item.label}">
      </div>
      <div class="category-info">
        <h4>${item.label}</h4>
        <p>${item.sub}</p>
      </div>
    </div>
  `).join('');
}

function selectCategoryAndLaunch(key) {
  state.selectedType = key;
  switchTab('generator');
  jumpToStep(1);
  updateWizardTypeSelection();
}

function renderStylesShowcase() {
  const grid = document.getElementById('stylesShowcaseGrid');
  if (!grid) return;
  grid.innerHTML = SHOT_STYLES.map(style => `
    <div class="style-showcase-card" onclick="selectStyleAndLaunch('${style.key}')">
      <img src="${style.thumb}" alt="${style.label}" class="style-thumb" onerror="this.src='/assets/landing_animation/output/output-1.jpg'">
      <div class="style-meta">
        <h4>${style.label}</h4>
        <p>${style.desc}</p>
      </div>
    </div>
  `).join('');
}

function selectStyleAndLaunch(key) {
  state.selectedStyle = key;
  switchTab('generator');
  jumpToStep(2);
  updateWizardStyleSelection();
}

// ==========================================================================
// WIZARD INTERFACE
// ==========================================================================
function renderWizardTypeGrid() {
  const grid = document.getElementById('jewelryTypeGrid');
  if (!grid) return;
  grid.innerHTML = JEWELLERY_TYPES.map(item => `
    <div class="j-type-card ${item.key === state.selectedType ? 'selected' : ''}" 
         id="card-type-${item.key}"
         onclick="chooseJewelleryType('${item.key}')">
      <div class="j-check">✓</div>
      <img src="${item.icon}" alt="${item.label}" class="j-icon-img">
      <h5>${item.label}</h5>
      <span>${item.sub}</span>
    </div>
  `).join('');
  updateStep1Feedback();
}

function chooseJewelleryType(key) {
  state.selectedType = key;
  updateWizardTypeSelection();
}

function updateWizardTypeSelection() {
  document.querySelectorAll('.j-type-card').forEach(el => el.classList.remove('selected'));
  const activeCard = document.getElementById(`card-type-${state.selectedType}`);
  if (activeCard) activeCard.classList.add('selected');
  updateStep1Feedback();
}

function updateStep1Feedback() {
  const btnNext = document.getElementById('btnNextStep1');
  const feedback = document.getElementById('categorySelectionFeedback');
  const found = JEWELLERY_TYPES.find(t => t.key === state.selectedType);
  if (found) {
    if (btnNext) btnNext.disabled = false;
    if (feedback) feedback.innerText = `Selected: ${found.label} (${found.sub})`;
  }
}

function renderWizardStyles() {
  const grid = document.getElementById('stylesSelectorGrid');
  if (!grid) return;
  grid.innerHTML = SHOT_STYLES.map(s => `
    <div class="style-option-card ${s.key === state.selectedStyle ? 'selected' : ''}"
         id="card-style-${s.key}"
         onclick="chooseShotStyle('${s.key}')">
      <h5>${s.label}</h5>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function chooseShotStyle(key) {
  state.selectedStyle = key;
  updateWizardStyleSelection();
}

function updateWizardStyleSelection() {
  document.querySelectorAll('.style-option-card').forEach(el => el.classList.remove('selected'));
  const active = document.getElementById(`card-style-${state.selectedStyle}`);
  if (active) active.classList.add('selected');
}

function renderWizardRatios() {
  const grid = document.getElementById('aspectRatioGrid');
  if (!grid) return;
  grid.innerHTML = ASPECT_RATIOS.map(r => `
    <div class="ratio-card ${r.key === state.selectedRatio ? 'selected' : ''}"
         id="card-ratio-${r.key}"
         onclick="chooseRatio('${r.key}')">
      <div class="ratio-box-visual" style="width: ${r.w}px; height: ${r.h}px;"></div>
      <div class="ratio-info">
        <h5>${r.label}</h5>
        <span>${r.note}</span>
      </div>
    </div>
  `).join('');
}

function chooseRatio(key) {
  state.selectedRatio = key;
  document.querySelectorAll('.ratio-card').forEach(el => el.classList.remove('selected'));
  const active = document.getElementById(`card-ratio-${key}`);
  if (active) active.classList.add('selected');
}

// Stepper Navigation
function goToStep(num) {
  state.currentStep = num;
  updateWizardPanes();
}

function jumpToStep(num) {
  if (num > state.currentStep && num === 4 && !state.uploadedUrl) {
    alert('Please upload or select an image in Step 3 first.');
    return;
  }
  state.currentStep = num;
  updateWizardPanes();
}

function updateWizardPanes() {
  for (let i = 1; i <= 4; i++) {
    const pane = document.getElementById(`wizardPane${i}`);
    const indicator = document.getElementById(`stepIndicator${i}`);
    if (pane) pane.classList.toggle('active', i === state.currentStep);
    if (indicator) indicator.classList.toggle('active', i <= state.currentStep);
  }

  if (state.currentStep === 4) {
    renderReviewSummary();
  }
}

// ==========================================================================
// UPLOAD & PRESET SAMPLES
// ==========================================================================
function initDragAndDrop() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  if (!dropZone || !fileInput) return;

  ['dragenter', 'dragover'].forEach(name => {
    dropZone.addEventListener(name, (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    dropZone.addEventListener(name, (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    });
  });

  dropZone.addEventListener('drop', (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelected(e.target.files[0]);
    }
  });
}

function handleFileSelected(file) {
  state.uploadedFile = file;
  const objectUrl = URL.createObjectURL(file);
  state.uploadedUrl = objectUrl;

  showUploadPreview(file.name, `${(file.size / (1024 * 1024)).toFixed(2)} MB`, objectUrl);
  uploadFileToServer(file);
}

async function uploadFileToServer(file) {
  const badge = document.getElementById('previewBadge');
  if (badge) badge.innerText = 'Uploading...';

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('/api/image-jobs/upload', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (data.input_image_url) {
      state.uploadedUrl = data.input_image_url;
      if (badge) badge.innerText = '✓ Ready for Studio';
    }
  } catch (err) {
    console.warn('Local preview active. Server upload fallback:', err.message);
    if (badge) badge.innerText = '✓ Ready (Local)';
  }
}

function selectSamplePreset(type) {
  let samplePath = '/assets/landing_animation/input/input-1.jpg';
  let sampleName = 'sample_bridal_necklace.jpg';

  if (type === 'ring') {
    samplePath = '/assets/landing_animation/input/input-2.jpg';
    sampleName = 'sample_solitaire_ring.jpg';
    state.selectedType = 'ring';
    updateWizardTypeSelection();
  } else {
    state.selectedType = 'jewellery_set';
    updateWizardTypeSelection();
  }

  state.uploadedFile = null;
  state.uploadedUrl = samplePath;
  showUploadPreview(sampleName, 'High-Res RAW • Verified', samplePath);
}

function showUploadPreview(name, sizeText, imgSrc) {
  const previewCard = document.getElementById('uploadPreviewCard');
  const previewImg = document.getElementById('previewImage');
  const nameEl = document.getElementById('previewFileName');
  const sizeEl = document.getElementById('previewFileSize');
  const btnNext = document.getElementById('btnNextStep3');

  if (previewImg) previewImg.src = imgSrc;
  if (nameEl) nameEl.innerText = name;
  if (sizeEl) sizeEl.innerText = sizeText;
  if (previewCard) previewCard.style.display = 'flex';
  if (btnNext) btnNext.disabled = false;
}

function clearUpload() {
  state.uploadedFile = null;
  state.uploadedUrl = '';
  const previewCard = document.getElementById('uploadPreviewCard');
  const btnNext = document.getElementById('btnNextStep3');
  const fileInput = document.getElementById('fileInput');

  if (previewCard) previewCard.style.display = 'none';
  if (btnNext) btnNext.disabled = true;
  if (fileInput) fileInput.value = '';
}

// ==========================================================================
// STEP 4: REVIEW & LIVE GENERATION
// ==========================================================================
function renderReviewSummary() {
  const typeObj = JEWELLERY_TYPES.find(t => t.key === state.selectedType) || { label: state.selectedType };
  const styleObj = SHOT_STYLES.find(s => s.key === state.selectedStyle) || { label: state.selectedStyle };
  const ratioObj = ASPECT_RATIOS.find(r => r.key === state.selectedRatio) || { label: state.selectedRatio };

  const sType = document.getElementById('summaryJewelleryType');
  const sStyle = document.getElementById('summaryStyle');
  const sRatio = document.getElementById('summaryRatio');
  const sEngine = document.getElementById('summaryEngine');
  const noteEl = document.getElementById('engineStatusNote');
  const reviewImg = document.getElementById('reviewInputImg');

  if (sType) sType.innerText = typeObj.label;
  if (sStyle) sStyle.innerText = styleObj.label;
  if (sRatio) sRatio.innerText = ratioObj.label;
  if (reviewImg && state.uploadedUrl) reviewImg.src = state.uploadedUrl;

  const hasKey = !!state.apiKey;
  if (sEngine) sEngine.innerText = hasKey ? 'OpenAI DALL-E 3 (HD Engine)' : 'Curated Studio Master Pipeline';
  if (noteEl) {
    noteEl.innerText = hasKey
      ? 'OpenAI API key connected. Photoshoot will be generated live using DALL-E 3.'
      : 'Running in Studio Demo Mode with 4K catalogue presets. Connect OpenAI API in top bar for unlimited custom generations.';
  }
}

async function startGenerationJob() {
  const btn = document.getElementById('btnGenerateShoot');
  const canvasIdle = document.getElementById('canvasIdleState');
  const canvasLoading = document.getElementById('canvasLoadingState');
  const canvasResult = document.getElementById('canvasResultState');
  const customPrompt = document.getElementById('customPromptInput')?.value || '';

  if (state.userCredits < 1) {
    alert('You have no credits remaining. Click the + icon in top bar to add credits.');
    return;
  }

  // Switch to Loading View
  if (btn) btn.disabled = true;
  if (canvasIdle) canvasIdle.style.display = 'none';
  if (canvasResult) canvasResult.style.display = 'none';
  if (canvasLoading) canvasLoading.style.display = 'block';

  // Start Elapsed Timer & Progress Animation
  let elapsed = 0;
  const timerEl = document.getElementById('elapsedTimer');
  const fillEl = document.getElementById('progressBarFill');
  const statusEl = document.getElementById('loadingStatusText');

  const statusMessages = [
    'Analyzing jewellery geometry and diamond cut facets...',
    'Rendering luxury studio lighting & specular reflections...',
    'Composing depth-of-field and velvet background textures...',
    'Finalizing 4K catalogue-ready master output with OpenAI...'
  ];

  if (state.jobTimerInterval) clearInterval(state.jobTimerInterval);
  state.jobTimerInterval = setInterval(() => {
    elapsed++;
    if (timerEl) timerEl.innerText = `${elapsed}s elapsed`;

    const progress = Math.min(95, elapsed * 3.5);
    if (fillEl) fillEl.style.width = `${progress}%`;

    const msgIdx = Math.min(statusMessages.length - 1, Math.floor(elapsed / 7));
    if (statusEl) statusEl.innerText = statusMessages[msgIdx];
  }, 1000);

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (state.apiKey) headers['x-openai-api-key'] = state.apiKey;

    const res = await fetch('/api/image-jobs', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        input_image_url: state.uploadedUrl,
        garment_type: state.selectedType,
        style: state.selectedStyle,
        output_format: state.selectedRatio,
        custom_prompt: customPrompt,
        api_key: state.apiKey
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.detail || `Server returned error ${res.status}`);
    }

    const jobData = await res.json();
    state.activeJobId = jobData.id;

    // Poll until complete
    pollJobStatus(jobData.id);
  } catch (err) {
    clearInterval(state.jobTimerInterval);
    alert('Generation error: ' + err.message);
    if (canvasLoading) canvasLoading.style.display = 'none';
    if (canvasIdle) canvasIdle.style.display = 'block';
    if (btn) btn.disabled = false;
  }
}

async function pollJobStatus(jobId) {
  let attempts = 0;
  const maxAttempts = 60;

  const interval = setInterval(async () => {
    attempts++;
    try {
      const res = await fetch(`/api/image-jobs/status?ids=${jobId}`);
      const list = await res.json();
      const current = list[0];

      if (current && current.status === 'done' && current.output_url) {
        clearInterval(interval);
        clearInterval(state.jobTimerInterval);
        displayGenerationResult(current.output_url);
        fetchUserCredits();
      } else if (current && current.status === 'failed') {
        clearInterval(interval);
        clearInterval(state.jobTimerInterval);
        alert('Photoshoot failed: ' + (current.error || 'Unknown AI error'));
        resetStudioWizard();
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        clearInterval(state.jobTimerInterval);
        alert('Generation timed out. Please try again.');
        resetStudioWizard();
      }
    } catch (e) {
      console.warn('Status poll attempt failed:', e.message);
    }
  }, 2000);
}

function displayGenerationResult(outputUrl) {
  const canvasLoading = document.getElementById('canvasLoadingState');
  const canvasResult = document.getElementById('canvasResultState');
  const resultImg = document.getElementById('resultImageOutput');
  const dlBtn = document.getElementById('btnDownloadOutput');
  const btnShoot = document.getElementById('btnGenerateShoot');

  if (resultImg) resultImg.src = outputUrl;
  if (dlBtn) dlBtn.href = outputUrl;
  if (canvasLoading) canvasLoading.style.display = 'none';
  if (canvasResult) canvasResult.style.display = 'block';
  if (btnShoot) btnShoot.disabled = false;

  fetchGallery();
}

function resetStudioWizard() {
  const canvasIdle = document.getElementById('canvasIdleState');
  const canvasLoading = document.getElementById('canvasLoadingState');
  const canvasResult = document.getElementById('canvasResultState');
  const btnShoot = document.getElementById('btnGenerateShoot');

  if (canvasIdle) canvasIdle.style.display = 'block';
  if (canvasLoading) canvasLoading.style.display = 'none';
  if (canvasResult) canvasResult.style.display = 'none';
  if (btnShoot) btnShoot.disabled = false;

  goToStep(1);
}

// ==========================================================================
// GALLERY & ASSETS
// ==========================================================================
async function fetchGallery() {
  try {
    const res = await fetch('/api/studio/mine');
    const items = await res.json();
    renderGallery(items);
  } catch (e) {
    console.warn('Gallery fetch error:', e.message);
  }
}

function renderGallery(items) {
  const grid = document.getElementById('studioGalleryGrid');
  if (!grid) return;

  let filtered = items;
  if (state.galleryFilter !== 'all') {
    filtered = items.filter(it => it.garment_type === state.galleryFilter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: #777;">
        <p>No photoshoot pieces found for this filter.</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 14px;" onclick="switchTab('generator')">Create New Photoshoot</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(it => `
    <div class="gallery-card">
      <div class="gallery-card-img-wrap" onclick="openZoomModal('${it.output_image_url || it.input_image_url}', '${it.garment_type} (${it.style})')">
        <img src="${it.output_image_url || it.input_image_url}" alt="${it.garment_type}" loading="lazy">
      </div>
      <div class="gallery-meta">
        <div>
          <span class="g-tag">${(it.garment_type || 'Jewellery').replace('_', ' ')}</span>
          <div style="font-size: 12px; color: #aaa;">${(it.style || 'Studio').replace('_', ' ')}</div>
        </div>
        <a href="${it.output_image_url || it.input_image_url}" download="gehna_shoot.jpg" class="btn btn-secondary btn-sm">Download</a>
      </div>
    </div>
  `).join('');
}

function filterGallery(filterKey) {
  state.galleryFilter = filterKey;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');
  fetchGallery();
}

// ==========================================================================
// USER CREDITS & BILLING
// ==========================================================================
async function fetchUserCredits() {
  try {
    const res = await fetch('/api/users/me');
    const data = await res.json();
    state.userCredits = data.credits;
    const countEl = document.getElementById('navCreditsCount');
    if (countEl) countEl.innerText = data.credits;
  } catch (e) {
    console.warn('Failed to load user credits');
  }
}

async function fetchPricing() {
  const grid = document.getElementById('pricingCardsGrid');
  if (!grid) return;
  try {
    const res = await fetch('/api/credits/packages');
    const packages = await res.json();

    grid.innerHTML = packages.map(pkg => `
      <div class="price-card ${pkg.popular ? 'popular' : ''}">
        ${pkg.popular ? `<span class="popular-badge">${pkg.badge}</span>` : ''}
        <h3 class="p-name">${pkg.name}</h3>
        <div class="p-credits">${pkg.credits} <span>Credits</span></div>
        <div class="p-price">₹${pkg.price_inr}</div>
        <ul class="p-features">
          <li>${pkg.credits} Full 4K AI Photoshoots</li>
          <li>All 7 Studio Lighting Styles</li>
          <li>Instagram, Lookbook & Story Ratios</li>
          <li>Commercial Licence Included</li>
          <li>Credits Never Expire</li>
        </ul>
        <button class="btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}" onclick="purchaseCredits(${pkg.credits})">
          Select Package
        </button>
      </div>
    `).join('');
  } catch (e) {
    console.warn('Pricing fetch error');
  }
}

async function purchaseCredits(credits) {
  try {
    const res = await fetch('/api/credits/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credits })
    });
    const data = await res.json();
    state.userCredits = data.new_balance;
    const countEl = document.getElementById('navCreditsCount');
    if (countEl) countEl.innerText = data.new_balance;
    alert(`🎉 Successfully added ${credits} credits to your account!`);
  } catch (e) {
    alert('Order simulated.');
  }
}

function openCreditTopup() {
  switchTab('pricing');
}

// ==========================================================================
// OPENAI API KEY SETTINGS MODAL
// ==========================================================================
function openApiModal() {
  const backdrop = document.getElementById('apiModalBackdrop');
  const input = document.getElementById('apiKeyInput');
  if (input) input.value = state.apiKey;
  if (backdrop) backdrop.classList.add('open');
}

function closeApiModal() {
  const backdrop = document.getElementById('apiModalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function toggleKeyVisibility() {
  const input = document.getElementById('apiKeyInput');
  const btn = document.getElementById('btnToggleKeyVisibility');
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerText = 'Hide';
  } else {
    input.type = 'password';
    btn.innerText = 'Show';
  }
}

async function saveApiKey() {
  const input = document.getElementById('apiKeyInput');
  const msgEl = document.getElementById('apiKeyStatusMsg');
  const btn = document.getElementById('btnSaveApiKey');
  const key = input.value.trim();

  if (!key) {
    localStorage.removeItem('gehna_openai_key');
    state.apiKey = '';
    checkApiStatus();
    closeApiModal();
    return;
  }

  if (btn) btn.disabled = true;
  if (msgEl) {
    msgEl.className = 'api-key-status-msg';
    msgEl.innerText = 'Testing connection with OpenAI API...';
  }

  try {
    const res = await fetch('/api/validate-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: key })
    });
    const data = await res.json();

    if (data.valid) {
      state.apiKey = key;
      localStorage.setItem('gehna_openai_key', key);
      checkApiStatus();
      if (msgEl) {
        msgEl.className = 'api-key-status-msg success';
        msgEl.innerText = '✓ ' + data.message;
      }
      setTimeout(() => closeApiModal(), 1200);
    } else {
      if (msgEl) {
        msgEl.className = 'api-key-status-msg error';
        msgEl.innerText = '✗ ' + (data.error || 'Invalid API Key');
      }
    }
  } catch (err) {
    // If offline, save locally
    state.apiKey = key;
    localStorage.setItem('gehna_openai_key', key);
    checkApiStatus();
    closeApiModal();
  } finally {
    if (btn) btn.disabled = false;
  }
}

function checkApiStatus() {
  const dot = document.getElementById('apiStatusDot');
  const text = document.getElementById('apiStatusText');
  const hasKey = !!state.apiKey;

  if (dot) dot.classList.toggle('active', hasKey);
  if (text) text.innerText = hasKey ? 'OpenAI DALL-E 3 Connected' : 'Configure OpenAI API';
}

// ==========================================================================
// LIGHTBOX ZOOM
// ==========================================================================
function openResultInModal() {
  const resultImg = document.getElementById('resultImageOutput');
  if (resultImg && resultImg.src) {
    openZoomModal(resultImg.src, 'AI Master Photoshoot (4K)');
  }
}

function openZoomModal(imgSrc, caption) {
  const backdrop = document.getElementById('zoomModalBackdrop');
  const img = document.getElementById('zoomModalImg');
  const cap = document.getElementById('zoomCaption');

  if (img) img.src = imgSrc;
  if (cap) cap.innerText = caption || '4K Jewellery Photoshoot Asset';
  if (backdrop) backdrop.classList.add('open');
}

function closeZoomModal(e) {
  if (e && e.target && e.target.id === 'zoomModalImg') return;
  const backdrop = document.getElementById('zoomModalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
}
