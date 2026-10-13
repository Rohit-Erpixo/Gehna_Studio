import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, UploadCloud, CheckCircle2, Sparkles, Download, RefreshCw, ArrowRight, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { api, resolveImageUrl } from '../services/api';

// ─── Constants ───
const CATEGORIES = [
  { key: 'jewellery_set', label: 'Necklace',  icon: '📿', sub: 'Bridal & Choker Sets' },
  { key: 'ring',          label: 'Ring',       icon: '💍', sub: 'Solitaire & Bands' },
  { key: 'earring',       label: 'Earrings',   icon: '✨', sub: 'Jhumkas & Drops' },
  { key: 'pendant',       label: 'Pendant',    icon: '🌸', sub: 'Flowers & Drops' },
  { key: 'bracelet',      label: 'Bracelet',   icon: '📎', sub: 'Tennis & Charms' },
  { key: 'anklet',        label: 'Anklet',     icon: '🦶', sub: 'Payal & Silver' },
];

const STYLES = [
  {
    key: 'ivory_luxury', label: 'Ivory Luxury', desc: 'Soft, elegant look with ivory backgrounds',
    img: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg',
  },
  {
    key: 'luxury_black', label: 'Luxury Black', desc: 'Premium contrast with dramatic lighting',
    img: '/assets/style_previews/jewellery_set/studio/preview.jpg',
  },
  {
    key: 'champagne_studio', label: 'Champagne Studio', desc: 'Warm and rich tones for a sophisticated look',
    img: '/assets/style_previews/ring/macro/preview.jpg',
  },
  {
    key: 'clean_catalogue', label: 'Clean Catalogue', desc: 'Minimal and modern for e-commerce',
    img: '/assets/style_previews/earring/closeup/preview.jpg',
  },
  {
    key: 'bridal_collection', label: 'Bridal Collection', desc: 'Traditional and wedding-inspired styling',
    img: '/assets/style_previews/earring/flatlay/preview.jpg',
  },
  {
    key: 'royal_display', label: 'Royal Display', desc: 'Elegant display setup with luxury props',
    img: '/assets/style_previews/jewellery_set/closeup/preview.jpg',
  },
];

const RATIOS = [
  { key: '1:1',  label: '1:1',  sub: 'Square' },
  { key: '4:5',  label: '4:5',  sub: 'Instagram' },
  { key: '9:16', label: '9:16', sub: 'Story' },
  { key: '16:9', label: '16:9', sub: 'Landscape' },
];

// ─── Step header ───
const StepHeader: React.FC<{
  step: number; total: number; title: string;
  onBack: () => void;
}> = ({ step, total, title, onBack }) => (
  <div className="sticky top-0 z-20 bg-[#FAF8F3] border-b border-[#E8E2D7] px-4 pt-3 pb-2">
    <div className="flex items-center gap-3 mb-2">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-white border border-[#E8E2D7] flex items-center justify-center touch-press">
        <ChevronLeft className="w-4 h-4 text-[#636059]" />
      </button>
      <h1 className="font-['Cinzel',serif] text-[16px] font-bold text-[#25241F] flex-1">{title}</h1>
      <span className="text-[11px] text-[#636059] font-medium">{step}/{total}</span>
    </div>
    {/* Progress dots */}
    <div className="flex gap-2 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`h-1.5 rounded-full flex-1 transition-all ${
          i < step ? 'bg-[#92772D]' : 'bg-[#E8E2D7]'
        }`} />
      ))}
    </div>
  </div>
);

// ─── Main Component ───
export const CreatePage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('jewellery_set');
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('ivory_luxury');
  const [selectedRatio, setSelectedRatio] = useState('4:5');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [serverInputUrl, setServerInputUrl] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('/assets/landing_animation/input/input-1.jpg');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [jobWarning, setJobWarning] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [reviewTab, setReviewTab] = useState<'original' | 'edited'>('edited');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const goBack = () => {
    if (step === 1) navigate('/');
    else setStep(s => s - 1);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    // Autofill product name if empty
    if (!productName) {
      const clean = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setProductName(clean.charAt(0).toUpperCase() + clean.slice(1));
    }

    // Persist upload on backend
    try {
      const res = await api.uploadPhoto(file);
      if (res?.input_image_url) {
        setServerInputUrl(res.input_image_url);
      }
    } catch (err) {
      console.warn('Initial photo upload deferred to generation:', err);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationError(null);
    setJobWarning(null);
    setGeneratedUrl(null);
    setImageLoaded(false);
    setImageLoadError(false);

    let inputUrlToUse = serverInputUrl;
    if (!inputUrlToUse && uploadedFile) {
      try {
        const uploadRes = await api.uploadPhoto(uploadedFile);
        if (uploadRes?.input_image_url) {
          inputUrlToUse = uploadRes.input_image_url;
          setServerInputUrl(uploadRes.input_image_url);
        }
      } catch (err) {
        console.warn('Upload during generation failed:', err);
      }
    }
    if (!inputUrlToUse) {
      inputUrlToUse = previewUrl;
    }

    try {
      const res = await api.createImageJob({
        input_image_url: inputUrlToUse,
        garment_type: selectedCategory,
        style: selectedStyle,
        output_format: selectedRatio,
        custom_prompt: notes,
        title: productName || `${selectedCategory} Shoot`,
      });

      const startTime = Date.now();
      const pollInterval = setInterval(async () => {
        try {
          const statuses = await api.getJobsStatus([res.id]);
          const cur = statuses[0];
          if (cur?.status === 'done' && cur.output_url) {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setGeneratedUrl(cur.output_url);
            if (cur.warning) setJobWarning(cur.warning);
            setImageLoaded(false);
            setImageLoadError(false);
            setReviewTab('edited');
            setStep(4);
          } else if (cur?.status === 'failed') {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setGenerationError(cur.error || 'OpenAI image generation failed');
          } else if (Date.now() - startTime > 120_000) {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setGenerationError('Generation timed out after 2 minutes');
          }
        } catch {
          /* keep polling */
        }
      }, 2000);
    } catch (err: any) {
      setIsGenerating(false);
      setGenerationError(err?.message || 'Failed to start generation job');
    }
  };

  const handleApproveAndSave = async () => {
    if (!generatedUrl || !imageLoaded || imageLoadError || isSaving) return;
    setIsSaving(true);
    try {
      await api.saveProject({
        title: productName.trim() || 'Jewellery Photoshoot',
        category: selectedCategory,
        style: STYLES.find(s => s.key === selectedStyle)?.label || selectedStyle,
        ratio: selectedRatio,
        thumbnail_url: generatedUrl,
        original_image_url: serverInputUrl || previewUrl,
        status: 'approved',
        versions: 1,
      });

      // Trigger download
      const finalUrl = resolveImageUrl(generatedUrl);
      const link = document.createElement('a');
      link.href = finalUrl;
      link.download = `${productName.trim().replace(/\s+/g, '_') || 'gehna'}_photoshoot.png`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      navigate('/gallery');
    } catch (err) {
      console.warn('Save project error:', err);
      navigate('/gallery');
    } finally {
      setIsSaving(false);
    }
  };

  // ─── Step 1: Upload + Product Details ───
  if (step === 1) return (
    <div className="min-h-screen bg-[#FAF8F3] pb-[100px]">
      <StepHeader step={1} total={4} title="Create Photoshoot" onBack={goBack} />

      <div className="px-4 pt-4 space-y-4">
        {/* Upload zone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-[#E8E2D7] rounded-2xl bg-white p-6 flex flex-col items-center justify-center text-center gap-2 touch-press cursor-pointer hover:border-[#92772D] transition-colors"
        >
          <div className="w-14 h-14 rounded-full bg-[#F4EFE6] flex items-center justify-center mb-1">
            <UploadCloud className="w-7 h-7 text-[#92772D]" />
          </div>
          <p className="font-bold text-[14px] text-[#25241F]">Upload Product Photo</p>
          <p className="text-[11px] text-[#636059]">Drag & drop or tap to upload<br/>JPG, PNG, HEIC (Max 10MB)</p>
          <button className="mt-2 px-4 py-2 bg-[#F4EFE6] border border-[#E8E2D7] rounded-xl text-[12px] font-semibold text-[#25241F] flex items-center gap-2 touch-press">
            <ImageIcon className="w-4 h-4 text-[#92772D]" />
            Choose Photo
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </div>

        {/* Preview if uploaded */}
        {uploadedFile && (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E2D7] bg-[#F4EFE6]">
            <img src={previewUrl} alt="Uploaded" className="w-full h-full object-cover" />
            <button
              onClick={() => { setUploadedFile(null); setServerInputUrl(''); setPreviewUrl('/assets/landing_animation/input/input-1.jpg'); }}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow touch-press"
            >
              ✕
            </button>
          </div>
        )}

        {/* Product Details */}
        <div className="bg-white rounded-2xl border border-[#E8E2D7] p-4 space-y-3">
          <div>
            <label className="block text-[12px] font-bold text-[#25241F] mb-1">Product Name *</label>
            <input
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              placeholder="e.g. Diamond Necklace Set"
              className="w-full px-3 py-2.5 text-[13px] bg-[#FAF8F3] border border-[#E8E2D7] rounded-xl focus:outline-none focus:border-[#92772D] text-[#25241F] placeholder-[#8F8B82]"
            />
          </div>
          <div>
            <label className="block text-[12px] font-bold text-[#25241F] mb-1">Category *</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 text-[13px] bg-[#FAF8F3] border border-[#E8E2D7] rounded-xl focus:outline-none focus:border-[#92772D] text-[#25241F]"
            >
              {CATEGORIES.map(c => (
                <option key={c.key} value={c.key}>{c.icon} {c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[12px] font-bold text-[#25241F] mb-1">SKU (Optional)</label>
            <input
              type="text"
              value={sku}
              onChange={e => setSku(e.target.value)}
              placeholder="e.g. DN-00123"
              className="w-full px-3 py-2.5 text-[13px] bg-[#FAF8F3] border border-[#E8E2D7] rounded-xl focus:outline-none focus:border-[#92772D] text-[#25241F] placeholder-[#8F8B82]"
            />
          </div>
          <div>
            <label className="block text-[12px] font-bold text-[#25241F] mb-1">Notes (Optional)</label>
            <input
              type="text"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Any additional details..."
              className="w-full px-3 py-2.5 text-[13px] bg-[#FAF8F3] border border-[#E8E2D7] rounded-xl focus:outline-none focus:border-[#92772D] text-[#25241F] placeholder-[#8F8B82]"
            />
          </div>

          {/* Tips */}
          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-3 flex gap-2">
            <span className="text-[16px] mt-0.5 shrink-0">💡</span>
            <div>
              <p className="text-[11px] font-bold text-[#92400E] mb-1">Photography Tips</p>
              {['Keep the whole product in frame','Use good lighting','Avoid fingers or price tags','Ensure small details are visible'].map(t => (
                <p key={t} className="text-[10px] text-[#78350F] flex items-center gap-1">✓ {t}</p>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep(2)}
          disabled={!productName.trim()}
          className="w-full py-3.5 rounded-2xl bg-[#92772D] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(146,119,45,0.35)] touch-press disabled:opacity-50"
        >
          Continue to Style Selection
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // ─── Step 2: Choose Style ───
  if (step === 2) return (
    <div className="min-h-screen bg-[#FAF8F3] pb-[100px]">
      <StepHeader step={2} total={4} title="Choose a Style" onBack={goBack} />

      <div className="px-4 pt-4 space-y-4">
        <p className="text-[12px] text-[#636059]">Select a photography style for your product</p>

        {/* 2-column style grid */}
        <div className="grid grid-cols-2 gap-3">
          {STYLES.map(s => {
            const isSelected = selectedStyle === s.key;
            return (
              <div
                key={s.key}
                onClick={() => setSelectedStyle(s.key)}
                className={`bg-white rounded-2xl border-2 overflow-hidden touch-press cursor-pointer transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
                  isSelected ? 'border-[#92772D] shadow-[0_4px_16px_rgba(146,119,45,0.2)]' : 'border-[#E8E2D7]'
                }`}
              >
                <div className="relative aspect-[4/3] bg-[#F4EFE6]">
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover" />
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#92772D] text-white flex items-center justify-center shadow">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="p-2.5">
                  <p className="font-bold text-[13px] text-[#25241F] leading-tight">{s.label}</p>
                  <p className="text-[10px] text-[#636059] mt-0.5 leading-tight line-clamp-2">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Aspect Ratio */}
        <div className="bg-white rounded-2xl border border-[#E8E2D7] p-4">
          <p className="text-[12px] font-bold text-[#25241F] mb-2">Aspect Ratio</p>
          <div className="grid grid-cols-4 gap-2">
            {RATIOS.map(r => (
              <button
                key={r.key}
                onClick={() => setSelectedRatio(r.key)}
                className={`py-2 rounded-xl text-center border touch-press transition-all ${
                  selectedRatio === r.key
                    ? 'bg-[#92772D] border-[#92772D] text-white'
                    : 'bg-[#FAF8F3] border-[#E8E2D7] text-[#25241F]'
                }`}
              >
                <p className="text-[12px] font-bold leading-none">{r.label}</p>
                <p className={`text-[9px] mt-0.5 ${selectedRatio === r.key ? 'text-white/80' : 'text-[#636059]'}`}>{r.sub}</p>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setStep(3)}
          className="w-full py-3.5 rounded-2xl bg-[#92772D] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(146,119,45,0.35)] touch-press"
        >
          Continue to Adjustments
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // ─── Step 3: Preview & Adjustments ───
  if (step === 3) return (
    <div className="min-h-screen bg-[#FAF8F3] pb-[100px]">
      <StepHeader step={3} total={4} title="Preview & Adjust" onBack={goBack} />

      <div className="px-4 pt-4 space-y-4">
        {/* Main image preview */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E2D7] bg-[#F4EFE6]">
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
          <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-[#25241F]/70 backdrop-blur-sm text-white text-[11px] font-bold">
            Original Photo
          </span>
          <span className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#92772D] text-white text-[11px] font-bold">
            {STYLES.find(s => s.key === selectedStyle)?.label || 'Ivory Luxury'}
          </span>
        </div>

        {/* Adjustment sliders */}
        <div className="bg-white rounded-2xl border border-[#E8E2D7] p-4 space-y-3">
          <p className="text-[12px] font-bold text-[#25241F]">Composition & Lighting Controls</p>

          <div className="space-y-2.5">
            {[
              { label: 'Lighting Warmth', min: 'Cool', max: 'Warm', value: 20 },
              { label: 'Shadow Softness', min: 'Hard', max: 'Soft', value: 35 },
              { label: 'Background Blur (Bokeh)', min: 'Sharp', max: 'Blurred', value: 40 },
              { label: 'Gemstone Specular Gleam', min: 'Subtle', max: 'Brilliant', value: 50 },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-[11px] text-[#636059] mb-1">
                  <span>{item.label}</span>
                  <span>{item.min} / {item.max}</span>
                </div>
                <input type="range" min={-50} max={50} defaultValue={item.value} className="w-full accent-[#92772D]" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Layer Notice */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-3 flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-[#92400E] mt-0.5 shrink-0" />
          <div>
            <p className="text-[12px] font-bold text-[#92400E]">Product Layer Fidelity</p>
            <p className="text-[11px] text-[#78350F] mt-0.5">Your jewellery item is composited directly into the studio aesthetic. You will review gemstone and prong fidelity in the next step before approving.</p>
          </div>
        </div>

        {/* Inline Generation Error / Quota Notice */}
        {generationError && (
          <div className="bg-[#FFF5F5] border border-[#FCA5A5] rounded-2xl p-3.5 space-y-2">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-[#B91C1C] shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] font-bold text-[#991B1B]">
                  {generationError.includes('OPENAI_QUOTA_EXHAUSTED') || generationError.includes('credit_balance_exhausted') || generationError.includes('429')
                    ? 'OpenAI Account Credits Exhausted'
                    : 'AI Generation Failed'}
                </p>
                <p className="text-[11px] text-[#7F1D1D] mt-0.5 leading-relaxed">
                  {generationError.includes('OPENAI_QUOTA_EXHAUSTED') || generationError.includes('credit_balance_exhausted') || generationError.includes('429')
                    ? 'Your OpenAI account has 0 credits remaining (Error 429). Top up billing at platform.openai.com/account/billing, then tap Retry below.'
                    : generationError}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setGenerationError(null);
                handleGenerate();
              }}
              className="w-full py-2.5 bg-[#92772D] text-white rounded-xl text-[12px] font-bold shadow touch-press flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Generation
            </button>
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-3.5 rounded-2xl bg-[#92772D] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(146,119,45,0.35)] touch-press disabled:opacity-60"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Generating Photoshoot with AI…
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate AI Photoshoot
            </>
          )}
        </button>
      </div>
    </div>
  );

  // ─── Step 4: Review Result ───
  const currentDisplayUrl = reviewTab === 'edited'
    ? resolveImageUrl(generatedUrl)
    : resolveImageUrl(serverInputUrl || previewUrl);

  const canApprove = Boolean(generatedUrl && imageLoaded && !imageLoadError && !isSaving);

  return (
    <div className="min-h-screen bg-[#FAF8F3] pb-[100px]">
      <StepHeader step={4} total={4} title="Review Result" onBack={goBack} />

      <div className="px-4 pt-4 space-y-4">
        {/* Creative-mode disclaimer (only shown when text-only generation was used) */}
        {jobWarning && (
          <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl px-3 py-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0" />
            <p className="text-[11px] font-medium text-[#92400E]">
              {jobWarning}
            </p>
          </div>
        )}

        <p className="text-[12px] text-[#636059]">Compare the original capture with the AI-enhanced commercial presentation. Inspect the jewellery details before approving.</p>

        {/* Comparison tabs */}
        <div className="flex gap-1 bg-[#F4EFE6] rounded-xl p-1">
          {(['edited', 'original'] as const).map(t => (
            <button
              key={t}
              onClick={() => setReviewTab(t)}
              className={`flex-1 py-2 rounded-lg text-[12px] font-bold capitalize touch-press transition-all ${
                reviewTab === t ? 'bg-white text-[#25241F] shadow-sm' : 'text-[#636059]'
              }`}
            >
              {t === 'edited' ? '✨ AI Enhanced' : '📷 Original'}
            </button>
          ))}
        </div>

        {/* Main comparison image container */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E2D7] bg-[#F4EFE6]">
          {/* Skeleton placeholder while image is decoding */}
          {reviewTab === 'edited' && !imageLoaded && !imageLoadError && (
            <div className="absolute inset-0 bg-[#F4EFE6] animate-pulse flex flex-col items-center justify-center text-[#8F8B82] p-4 text-center z-0">
              <Sparkles className="w-8 h-8 text-[#92772D] animate-spin mb-2" />
              <p className="text-[12px] font-bold text-[#25241F]">Rendering Master Asset…</p>
              <p className="text-[10px] text-[#636059] mt-0.5">Decoding high-resolution photoshoot</p>
            </div>
          )}

          {/* Error fallback state */}
          {reviewTab === 'edited' && imageLoadError && (
            <div className="absolute inset-0 bg-[#FFF5F5] flex flex-col items-center justify-center p-4 text-center z-10">
              <AlertCircle className="w-8 h-8 text-[#B91C1C] mb-2" />
              <p className="text-[13px] font-bold text-[#B91C1C]">Could not render AI Enhanced Image</p>
              <p className="text-[11px] text-[#7F1D1D] mt-1 break-all max-w-[280px]">Asset path: {generatedUrl}</p>
              <button
                onClick={() => { setImageLoadError(false); setImageLoaded(false); }}
                className="mt-3 px-3 py-1.5 bg-[#B91C1C] text-white rounded-xl text-[11px] font-bold touch-press"
              >
                Retry Loading
              </button>
            </div>
          )}

          {/* Actual Image */}
          <img
            key={`${reviewTab}-${currentDisplayUrl}`}
            src={currentDisplayUrl}
            alt={reviewTab === 'edited' ? 'AI Enhanced Jewellery' : 'Original Photo'}
            className={`w-full h-full object-cover transition-opacity duration-200 ${
              reviewTab === 'edited' && !imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => {
              if (reviewTab === 'edited') {
                setImageLoaded(true);
                setImageLoadError(false);
              }
            }}
            onError={() => {
              if (reviewTab === 'edited') {
                setImageLoadError(true);
                setImageLoaded(false);
              }
            }}
          />

          {/* Badge */}
          <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-full text-white text-[11px] font-bold z-10 ${
            reviewTab === 'edited' ? 'bg-[#92772D]/90' : 'bg-[#25241F]/70'
          } backdrop-blur-sm`}>
            {reviewTab === 'edited' ? 'AI Enhanced' : 'Original'}
          </span>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 items-center">
          {['Original', 'Edited'].map((label, i) => {
            const isOriginal = i === 0;
            const thumbUrl = isOriginal
              ? resolveImageUrl(serverInputUrl || previewUrl)
              : resolveImageUrl(generatedUrl || previewUrl);
            const isSelected = (isOriginal && reviewTab === 'original') || (!isOriginal && reviewTab === 'edited');

            return (
              <div
                key={label}
                onClick={() => setReviewTab(isOriginal ? 'original' : 'edited')}
                className={`shrink-0 w-[64px] h-[64px] rounded-xl overflow-hidden border-2 touch-press cursor-pointer relative bg-[#F4EFE6] ${
                  isSelected ? 'border-[#92772D] ring-2 ring-[#92772D]/30' : 'border-[#E8E2D7]'
                }`}
              >
                <img
                  src={thumbUrl}
                  alt={label}
                  className={`w-full h-full object-cover ${isOriginal ? 'grayscale-[20%]' : ''}`}
                  onError={(e) => {
                    // Fallback to original preview so thumbnail never renders broken placeholder
                    (e.target as HTMLImageElement).src = previewUrl;
                  }}
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] font-bold text-center py-0.5">
                  {label}
                </span>
              </div>
            );
          })}
          <div className="text-[11px] text-[#636059] self-center ml-2 leading-tight">
            Tap thumbnails or tabs to toggle.<br/>Inspect fine details before approval.
          </div>
        </div>

        {/* Product Layer Fidelity Notice */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-3 flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-[#92400E] shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-bold text-[#92400E]">Product Layer Verification</p>
            <p className="text-[11px] text-[#78350F] mt-0.5">
              Please inspect prongs, gemstones, and fine metal craftsmanship to confirm jewellery details before approving and saving.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setStep(3)}
            className="flex-1 py-3.5 rounded-2xl bg-white border border-[#E8E2D7] text-[#25241F] font-bold text-[13px] flex items-center justify-center gap-2 touch-press"
          >
            <RefreshCw className="w-4 h-4" />
            Edit Again
          </button>
          <button
            onClick={handleApproveAndSave}
            disabled={!canApprove}
            className={`flex-1 py-3.5 rounded-2xl font-bold text-[13px] flex items-center justify-center gap-2 touch-press transition-all ${
              canApprove
                ? 'bg-[#92772D] text-white shadow-[0_4px_16px_rgba(146,119,45,0.35)]'
                : 'bg-[#E8E2D7] text-[#8F8B82] cursor-not-allowed opacity-60'
            }`}
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Saving…
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Approve & Save
              </>
            )}
          </button>
        </div>

        <button onClick={() => navigate('/gallery')} className="w-full text-center text-[12px] text-[#92772D] font-semibold touch-press py-2">
          View in Gallery →
        </button>
      </div>
    </div>
  );
};
