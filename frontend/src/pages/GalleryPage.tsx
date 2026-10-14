import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, Download, MoreVertical, X, ChevronLeft, CheckCircle2, Trash2, ArrowUpDown } from 'lucide-react';
import { StudioProject } from '../types/api';
import { resolveImageUrl } from '../services/api';

// ─── Mock gallery data matching design references ───
const MOCK_GALLERY: (StudioProject & { versions?: number })[] = [
  {
    id: 'g1', title: 'Diamond Necklace',   category: 'jewellery_set', style: 'Ivory Luxury',
    ratio: '4:5', date: '10 Oct 2026', status: 'approved', versions: 3,
    thumbnail_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg',
  },
  {
    id: 'g2', title: 'Floral Ring',         category: 'ring', style: 'Luxury Black',
    ratio: '1:1', date: '09 Oct 2026', status: 'ready', versions: 2,
    thumbnail_url: '/assets/style_previews/ring/macro/preview.jpg',
  },
  {
    id: 'g3', title: 'Traditional Earrings', category: 'earring', style: 'Champagne Studio',
    ratio: '4:5', date: '07 Oct 2026', status: 'processing', versions: 4,
    thumbnail_url: '/assets/style_previews/earring/closeup/preview.jpg',
  },
  {
    id: 'g4', title: 'Ruby Pendant',         category: 'pendant', style: 'Bridal Collection',
    ratio: '9:16', date: '08 Oct 2026', status: 'approved', versions: 1,
    thumbnail_url: '/assets/style_previews/jewellery_set/closeup/preview.jpg',
  },
  {
    id: 'g5', title: 'Silver Anklet Pair',   category: 'anklet', style: 'Clean Catalogue',
    ratio: '1:1', date: '05 Oct 2026', status: 'ready', versions: 2,
    thumbnail_url: '/assets/style_previews/payal/closeup/preview.jpg',
  },
  {
    id: 'g6', title: 'Kundan Earring Set',   category: 'earring', style: 'Ivory Luxury',
    ratio: '4:5', date: '04 Oct 2026', status: 'approved', versions: 3,
    thumbnail_url: '/assets/style_previews/earring/flatlay/preview.jpg',
  },
];

// Keys + labels must match CATEGORIES in CreatePage (jewellery_set is labelled "Necklace" there)
const FILTERS = [
  { key: 'all',           label: 'All Pieces' },
  { key: 'jewellery_set', label: 'Necklaces' },
  { key: 'ring',          label: 'Rings' },
  { key: 'earring',       label: 'Earrings' },
  { key: 'pendant',       label: 'Pendants' },
  { key: 'bracelet',      label: 'Bracelets' },
  { key: 'anklet',        label: 'Anklets' },
];

const STATUS_FILTERS = ['All', 'Approved', 'Ready', 'Processing'];

const statusConfig: Record<string, { label: string; cls: string }> = {
  approved:   { label: 'Approved',   cls: 'badge-approved' },
  ready:      { label: 'Ready',      cls: 'badge-ready' },
  processing: { label: 'Processing', cls: 'badge-processing' },
  failed:     { label: 'Failed',     cls: 'badge-failed' },
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const cfg = statusConfig[status] || { label: status, cls: 'badge-ready' };
  return (
    <span className={`inline-flex items-center px-2 py-[3px] rounded-full text-[10px] font-bold leading-none ${cfg.cls}`}>
      {cfg.label}
    </span>
  );
};

// ─── Detail Modal ───
interface DetailModalProps {
  project: StudioProject;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ project, onClose }) => {
  const [tab, setTab] = useState<'original' | 'edited'>('edited');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resolveImageUrl(project.thumbnail_url);
    link.download = `${project.title.replace(/\s+/g, '_')}.png`;
    link.target = '_blank';
    link.click();
  };

  const currentModalImg = tab === 'original'
    ? resolveImageUrl(project.original_image_url || project.thumbnail_url)
    : resolveImageUrl(project.thumbnail_url);

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex flex-col sm:items-center sm:justify-center sm:p-6" onClick={onClose}>
      <div
        className="mt-auto sm:mt-0 w-full sm:max-w-lg bg-[#FAF8F3] rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto safe-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle + Header */}
        <div className="sticky top-0 bg-[#FAF8F3] z-10 px-4 pt-3 pb-2 border-b border-[#E8E2D7]">
          <div className="w-10 h-1 bg-[#E8E2D7] rounded-full mx-auto mb-3 sm:hidden" />
          <div className="flex items-center justify-between">
            <h2 className="font-['Cinzel',serif] text-[16px] font-bold text-[#25241F] truncate pr-2">{project.title}</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#F4EFE6] flex items-center justify-center touch-press">
              <X className="w-4 h-4 text-[#636059]" />
            </button>
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex gap-1 mx-4 mt-3 bg-[#F4EFE6] rounded-xl p-1">
          {(['edited', 'original'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-[12px] font-bold capitalize touch-press transition-all ${
                tab === t ? 'bg-white text-[#25241F] shadow-sm' : 'text-[#636059]'
              }`}
            >
              {t === 'edited' ? 'AI Enhanced' : 'Original'}
            </button>
          ))}
        </div>

        {/* Image */}
        <div className="mx-4 mt-3 aspect-square rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#E8E2D7]">
          <img
            src={currentModalImg}
            alt={project.title}
            className={`w-full h-full object-cover transition-all ${tab === 'original' && !project.original_image_url ? 'filter grayscale-[30%]' : ''}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/necklace_earringset-Wkr9Vv7w.webp';
            }}
          />
        </div>

        {/* Meta */}
        <div className="mx-4 mt-4 grid grid-cols-2 gap-2">
          {[
            { label: 'Category', value: project.category.replace('_', ' ').replace(/^\w/, c => c.toUpperCase()) },
            { label: 'Style', value: project.style },
            { label: 'Ratio', value: project.ratio },
            { label: 'Date', value: project.date },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-xl p-3 border border-[#E8E2D7]">
              <p className="text-[10px] text-[#636059] mb-0.5">{label}</p>
              <p className="text-[12px] font-bold text-[#25241F] capitalize">{value}</p>
            </div>
          ))}
        </div>

        {/* Quality badges */}
        <div className="mx-4 mt-3 flex gap-2">
          <div className="flex-1 bg-white rounded-xl p-3 border border-[#E8E2D7] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <p className="text-[10px] text-[#636059]">Resolution</p>
              <p className="text-[11px] font-bold text-[#25241F]">High Quality</p>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-xl p-3 border border-[#E8E2D7] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <p className="text-[10px] text-[#636059]">Format</p>
              <p className="text-[11px] font-bold text-[#25241F]">JPG · Optimized</p>
            </div>
          </div>
        </div>

        {/* Versions thumbnails */}
        {(project.versions ?? 0) > 1 && (
          <div className="mx-4 mt-3">
            <p className="text-[11px] font-bold text-[#636059] mb-2">{project.versions} Versions Saved</p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {Array.from({ length: project.versions ?? 0 }).map((_, i) => (
                <div key={i} className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-[#92772D]' : 'border-[#E8E2D7]'}`}>
                  <img src={resolveImageUrl(project.thumbnail_url)} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-4 pt-4 pb-6 flex gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 py-3.5 rounded-2xl bg-[#92772D] text-white font-bold text-[13px] flex items-center justify-center gap-2 touch-press shadow-[0_4px_12px_rgba(146,119,45,0.3)]"
          >
            <Download className="w-4 h-4" />
            Download Image
          </button>
          <button
            className="w-12 h-[52px] rounded-2xl bg-[#FEE2E2] border border-[#FCA5A5] flex items-center justify-center touch-press"
            title="Delete"
            onClick={() => {
              if (window.confirm(`Delete "${project.title}"? This cannot be undone.`)) onClose();
            }}
          >
            <Trash2 className="w-4 h-4 text-[#991B1B]" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Gallery Page ───
interface GalleryPageProps {
  projects?: StudioProject[];
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ projects = [] }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selected, setSelected] = useState<(typeof MOCK_GALLERY)[0] | null>(null);

  // Use real API data if available, else dev mock
  const source = projects.length > 0
    ? (projects as typeof MOCK_GALLERY)
    : MOCK_GALLERY;

  const filtered = useMemo(() => {
    let list = [...source];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q));
    }
    if (category !== 'all') {
      list = list.filter(p => p.category === category);
    }
    if (statusFilter !== 'All') {
      list = list.filter(p => p.status === statusFilter.toLowerCase());
    }
    if (sort === 'oldest') list.reverse();
    return list;
  }, [source, search, category, statusFilter, sort]);

  return (
    <>
      {/* Detail slide-up modal */}
      {selected && <DetailModal project={selected} onClose={() => setSelected(null)} />}

      <div>

        {/* ─── Header ─── */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-['Cinzel',serif] text-[20px] font-bold text-[#25241F] leading-tight">Product Gallery</h1>
              <p className="text-[12px] text-[#636059] mt-0.5">Your jewellery photography collection</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button className="w-9 h-9 rounded-xl bg-white border border-[#E8E2D7] flex items-center justify-center touch-press">
                <Search className="w-4 h-4 text-[#636059]" />
              </button>
              <button
                onClick={() => setShowFilters(v => !v)}
                className={`w-9 h-9 rounded-xl border flex items-center justify-center touch-press ${showFilters ? 'bg-[#92772D] border-[#92772D]' : 'bg-white border-[#E8E2D7]'}`}
              >
                <SlidersHorizontal className={`w-4 h-4 ${showFilters ? 'text-white' : 'text-[#636059]'}`} />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F8B82]" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by product name..."
              className="w-full pl-9 pr-4 py-2.5 text-[13px] bg-white border border-[#E8E2D7] rounded-xl focus:outline-none focus:border-[#92772D] text-[#25241F] placeholder-[#8F8B82]"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-[#8F8B82]" />
              </button>
            )}
          </div>
        </div>

        {/* ─── Filter Panel ─── */}
        {showFilters && (
          <div className="mx-4 mb-2 bg-white rounded-2xl border border-[#E8E2D7] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <div className="mb-2.5">
              <p className="text-[10px] font-bold text-[#636059] uppercase tracking-wider mb-1.5">Status</p>
              <div className="flex gap-2 flex-wrap">
                {STATUS_FILTERS.map(s => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold touch-press transition-colors ${
                      statusFilter === s ? 'bg-[#92772D] text-white' : 'bg-[#F4EFE6] text-[#636059]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#636059] uppercase tracking-wider mb-1.5">Sort</p>
              <div className="flex gap-2">
                {(['newest', 'oldest'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setSort(s)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-semibold touch-press transition-colors ${
                      sort === s ? 'bg-[#92772D] text-white' : 'bg-[#F4EFE6] text-[#636059]'
                    }`}
                  >
                    <ArrowUpDown className="w-3 h-3" />
                    {s === 'newest' ? 'Newest First' : 'Oldest First'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Category Filter Pills ─── */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pb-2">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setCategory(f.key)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold touch-press transition-all ${
                category === f.key
                  ? 'bg-[#92772D] text-white shadow-sm'
                  : 'bg-white text-[#636059] border border-[#E8E2D7]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ─── Gallery Grid ─── */}
        <div className="px-4">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F4EFE6] flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-[#92772D]" />
              </div>
              <p className="font-['Cinzel',serif] text-[15px] font-bold text-[#25241F] mb-1">No results found</p>
              <p className="text-[12px] text-[#636059]">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  onClick={() => setSelected(item)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-square bg-[#F4EFE6]">
                    <img
                      src={resolveImageUrl(item.thumbnail_url)}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/necklace_earringset-Wkr9Vv7w.webp';
                      }}
                    />
                    {/* Heart / favourite */}
                    <button
                      onClick={(e) => { e.stopPropagation(); }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center touch-press"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#636059" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Info */}
                  <div className="px-2.5 pt-2 pb-2.5">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <div className="min-w-0">
                        <p className="text-[12px] font-bold text-[#25241F] truncate leading-tight">{item.title}</p>
                        <p className="text-[10px] text-[#636059] mt-0.5">{item.date}</p>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); }} className="shrink-0 touch-press">
                        <MoreVertical className="w-4 h-4 text-[#8F8B82]" />
                      </button>
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── New Photoshoot FAB ─── */}
        <div className="px-4 mt-6 mb-4 flex justify-center">
          <button
            onClick={() => navigate('/create')}
            className="w-full sm:w-auto sm:px-10 py-3.5 rounded-2xl bg-[#92772D] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(146,119,45,0.35)] touch-press"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            Start New Photoshoot
          </button>
        </div>
      </div>
    </>
  );
};
