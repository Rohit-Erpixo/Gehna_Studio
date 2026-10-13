import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { StudioProject, StudioTemplate, UserCreditInfo } from '../types/api';
import { resolveImageUrl } from '../services/api';

interface DashboardPageProps {
  userCredits?: UserCreditInfo;
  recentProjects?: StudioProject[];
  favouriteTemplates?: StudioTemplate[];
}

// Mock data matching the design reference
const MOCK_PROJECTS: StudioProject[] = [
  {
    id: 'proj_1', title: 'Diamond Necklace Set', category: 'jewellery_set',
    style: 'Ivory Luxury', ratio: '4:5', date: '10 Oct 2026',
    thumbnail_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg',
    status: 'approved'
  },
  {
    id: 'proj_2', title: 'Floral Diamond Ring', category: 'ring',
    style: 'Luxury Black', ratio: '1:1', date: '09 Oct 2026',
    thumbnail_url: '/assets/style_previews/ring/macro/preview.jpg',
    status: 'processing'
  },
  {
    id: 'proj_3', title: 'Traditional Earrings', category: 'earring',
    style: 'Champagne', ratio: '4:5', date: '07 Oct 2026',
    thumbnail_url: '/assets/style_previews/earring/closeup/preview.jpg',
    status: 'approved'
  },
  {
    id: 'proj_4', title: 'Ruby Flower Pendant', category: 'pendant',
    style: 'Bridal', ratio: '4:5', date: '06 Oct 2026',
    thumbnail_url: '/assets/style_previews/jewellery_set/closeup/preview.jpg',
    status: 'ready'
  },
];

const MOCK_TEMPLATES: StudioTemplate[] = [
  { id: 'tmpl_1', name: 'Ivory Luxury',  category: 'Luxury', badge: 'Popular', description: 'Soft & elegant look', image_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg' },
  { id: 'tmpl_2', name: 'Luxury Black',  category: 'Catalog', badge: 'Trending', description: 'Dramatic contrast', image_url: '/assets/style_previews/jewellery_set/studio/preview.jpg' },
  { id: 'tmpl_3', name: 'Champagne',     category: 'Studio', badge: 'New', description: 'Warm & rich tones', image_url: '/assets/style_previews/ring/macro/preview.jpg' },
  { id: 'tmpl_4', name: 'Bridal',        category: 'Bridal', badge: 'Bestseller', description: 'Wedding-inspired', image_url: '/assets/style_previews/earring/flatlay/preview.jpg' },
];

const statusConfig: Record<string, { label: string; cls: string }> = {
  approved:   { label: 'Approved',   cls: 'badge-approved' },
  ready:      { label: 'Ready',      cls: 'badge-ready' },
  processing: { label: 'Processing', cls: 'badge-processing' },
  failed:     { label: 'Failed',     cls: 'badge-failed' },
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const cfg = statusConfig[status] || { label: status, cls: 'badge-ready' };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${cfg.cls}`}>
      {cfg.label}
    </span>
  );
};

export const DashboardPage: React.FC<DashboardPageProps> = ({
  userCredits,
  recentProjects = [],
  favouriteTemplates = [],
}) => {
  const navigate = useNavigate();
  const credits = userCredits?.credits ?? 245;
  const shopName = userCredits?.shop_name || 'Sharma Jewellers';

  // Use API data if non-empty, otherwise fallback to mock
  const projects = recentProjects.length > 0 ? recentProjects : MOCK_PROJECTS;
  const templates = favouriteTemplates.length > 0 ? favouriteTemplates : MOCK_TEMPLATES;

  return (
    <div className="pb-[80px] bg-[#FAF8F3]">

      {/* ─── Credits Bar ─── */}
      <div className="px-4 pt-3 pb-1">
        <div className="bg-white rounded-2xl border border-[#E8E2D7] px-4 py-3 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2">
            {/* Coin icon */}
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#D97706" strokeWidth="1.5"/>
                <text x="12" y="16" textAnchor="middle" fill="#D97706" fontSize="9" fontWeight="bold">₹</text>
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#25241F]">{credits}</div>
              <div className="text-[10px] text-[#636059]">Credits left</div>
            </div>
          </div>
          <button
            onClick={() => navigate('/profile')}
            className="px-3 py-1.5 rounded-xl border border-[#92772D] text-[11px] font-bold text-[#92772D] touch-press hover:bg-[#92772D]/5"
          >
            Upgrade →
          </button>
        </div>
      </div>

      {/* ─── Welcome + Hero CTA ─── */}
      <div className="px-4 pt-3 pb-1">
        <h1 className="font-['Cinzel',serif] text-[22px] font-bold text-[#25241F] leading-tight">
          Good morning,<br />
          <span>{shopName}</span>{' '}
          <span className="text-[#92772D]">✦</span>
        </h1>
        <p className="text-[13px] text-[#636059] mt-1 mb-4">
          Create stunning catalogue photos<br />from your everyday product images.
        </p>

        {/* Create Photoshoot CTA */}
        <button
          onClick={() => navigate('/create')}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#92772D] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(146,119,45,0.35)] touch-press"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
          Create Photoshoot
        </button>
      </div>

      {/* ─── 3 Workflow Cards ─── */}
      <div className="px-4 pt-4">
        <div className="grid grid-cols-3 gap-2.5">
          {/* Product Photography */}
          <button
            onClick={() => navigate('/create?mode=product')}
            className="bg-white rounded-2xl border border-[#E8E2D7] p-3 flex flex-col items-center gap-1.5 touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE6] flex items-center justify-center">
              <img src="/assets/necklace_earringset-Wkr9Vv7w.webp" alt="" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-[11px] font-semibold text-[#25241F] text-center leading-tight">Product Photography</span>
          </button>

          {/* Batch Photography */}
          <button
            onClick={() => navigate('/create?mode=batch')}
            className="bg-white rounded-2xl border border-[#E8E2D7] p-3 flex flex-col items-center gap-1.5 touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE6] flex items-center justify-center">
              <img src="/assets/bangles-Dazgn-L6.webp" alt="" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-[11px] font-semibold text-[#25241F] text-center leading-tight">Batch Photography</span>
          </button>

          {/* AI Model Photoshoot */}
          <button
            onClick={() => navigate('/create?mode=model')}
            className="bg-white rounded-2xl border border-[#E8E2D7] p-3 flex flex-col items-center gap-1.5 touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE6] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#92772D" strokeWidth="1.5">
                <circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                <path d="M19 3l1.5 1.5M5 3L3.5 4.5"/>
              </svg>
            </div>
            <span className="text-[11px] font-semibold text-[#25241F] text-center leading-tight">AI Model Photoshoot</span>
          </button>
        </div>
      </div>

      {/* ─── Recent Projects ─── */}
      <div className="px-4 pt-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-['Cinzel',serif] text-[15px] font-bold text-[#25241F]">Recent Projects</h2>
          <button onClick={() => navigate('/gallery')} className="text-[12px] font-semibold text-[#92772D] flex items-center gap-0.5 touch-press">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => navigate('/gallery')}
              className="bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-square bg-[#F4EFE6]">
                <img
                  src={resolveImageUrl(project.thumbnail_url)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/necklace_earringset-Wkr9Vv7w.webp'; }}
                />
                <StatusBadge status={project.status} />
              </div>
              {/* Info row */}
              <div className="px-2.5 py-2 flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#25241F] truncate">{project.title}</p>
                  <p className="text-[10px] text-[#636059]">{project.date}</p>
                </div>
                <button className="ml-1 shrink-0 touch-press p-0.5">
                  <MoreHorizontal className="w-4 h-4 text-[#8F8B82]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Favourite Templates ─── */}
      <div className="px-4 pt-5 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-['Cinzel',serif] text-[15px] font-bold text-[#25241F]">Favourite Templates</h2>
          <button onClick={() => navigate('/templates')} className="text-[12px] font-semibold text-[#92772D] flex items-center gap-0.5 touch-press">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Horizontal scroll row */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1">
          {templates.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => navigate(`/create?template=${tmpl.id}`)}
              className="shrink-0 w-[88px] bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="aspect-square bg-[#F4EFE6]">
                <img
                  src={resolveImageUrl(tmpl.image_url)}
                  alt={tmpl.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ring-DUl_mvHS.webp'; }}
                />
              </div>
              <div className="px-1.5 py-1.5">
                <p className="text-[10px] font-bold text-[#25241F] leading-tight text-center">{tmpl.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
