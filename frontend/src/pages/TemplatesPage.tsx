import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CheckCircle2 } from 'lucide-react';
import { StudioTemplate } from '../types/api';
import { resolveImageUrl } from '../services/api';

const MOCK_TEMPLATES: (StudioTemplate & { style_type: string })[] = [
  { id: 't1', name: 'Ivory Luxury',       category: 'Luxury',  badge: 'Popular',    description: 'Soft, elegant and premium look',         image_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg', style_type: 'Luxury' },
  { id: 't2', name: 'Luxury Black',       category: 'Luxury',  badge: 'Trending',   description: 'Dramatic contrast with rich lighting',    image_url: '/assets/style_previews/jewellery_set/studio/preview.jpg',        style_type: 'Luxury' },
  { id: 't3', name: 'Champagne Studio',   category: 'Luxury',  badge: 'New',        description: 'Warm and rich tones for sophistication',  image_url: '/assets/style_previews/ring/macro/preview.jpg',                  style_type: 'Luxury' },
  { id: 't4', name: 'Clean Catalogue',    category: 'Minimal', badge: 'E-Commerce', description: 'Minimal and modern for e-commerce',       image_url: '/assets/style_previews/earring/closeup/preview.jpg',             style_type: 'Minimal' },
  { id: 't5', name: 'Bridal Collection',  category: 'Bridal',  badge: 'Bestseller', description: 'Traditional and wedding-inspired styling', image_url: '/assets/style_previews/earring/flatlay/preview.jpg',             style_type: 'Bridal' },
  { id: 't6', name: 'Royal Display',      category: 'Bridal',  badge: 'Popular',    description: 'Elegant display setup with luxury props', image_url: '/assets/style_previews/jewellery_set/closeup/preview.jpg',        style_type: 'Bridal' },
  { id: 't7', name: 'Classic Portrait',   category: 'Minimal', badge: 'Classic',    description: 'Clean portrait setup with soft shadows',  image_url: '/assets/style_previews/bracelet/modern_wear/preview.jpg',        style_type: 'Minimal' },
  { id: 't8', name: 'Traditional Glow',   category: 'Bridal',  badge: 'Traditional', description: 'Warm festive lighting and rich textures', image_url: '/assets/style_previews/payal/closeup/preview.jpg',              style_type: 'Traditional' },
];

const TABS = ['All', 'Luxury', 'Minimal', 'Bridal', 'Traditional'];

const badgeColors: Record<string, string> = {
  Popular:    'bg-blue-50 text-blue-700 border border-blue-200',
  Trending:   'bg-purple-50 text-purple-700 border border-purple-200',
  New:        'bg-green-50 text-green-700 border border-green-200',
  Bestseller: 'bg-amber-50 text-amber-700 border border-amber-200',
  'E-Commerce':'bg-sky-50 text-sky-700 border border-sky-200',
  Classic:    'bg-gray-50 text-gray-700 border border-gray-200',
  Traditional:'bg-orange-50 text-orange-700 border border-orange-200',
};

interface TemplatesPageProps {
  templates?: StudioTemplate[];
}

export const TemplatesPage: React.FC<TemplatesPageProps> = ({ templates = [] }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('All');
  const [search, setSearch] = useState('');

  const source = templates.length > 0 ? templates as typeof MOCK_TEMPLATES : MOCK_TEMPLATES;

  const filtered = source.filter(t => {
    const matchTab = tab === 'All' || t.style_type === tab;
    const matchSearch = search === '' || t.name.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F3] pb-[80px]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h1 className="font-['Cinzel',serif] text-[20px] font-bold text-[#25241F]">Style Templates</h1>
        <p className="text-[12px] text-[#636059] mt-0.5">Choose a photography style for your products</p>

        {/* Search */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F8B82]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search templates..."
            className="w-full pl-9 pr-4 py-2.5 text-[13px] bg-white border border-[#E8E2D7] rounded-xl focus:outline-none focus:border-[#92772D] text-[#25241F] placeholder-[#8F8B82]"
          />
        </div>
      </div>

      {/* Tab pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pb-3">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold touch-press transition-all ${
              tab === t ? 'bg-[#92772D] text-white' : 'bg-white text-[#636059] border border-[#E8E2D7]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Template grid */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {filtered.map(tmpl => (
          <div
            key={tmpl.id}
            onClick={() => navigate(`/create?template=${tmpl.id}`)}
            className="bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden touch-press shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] bg-[#F4EFE6]">
              <img
                src={resolveImageUrl(tmpl.image_url)}
                alt={tmpl.name}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ring-DUl_mvHS.webp'; }}
              />
              {/* Badge */}
              <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold ${badgeColors[tmpl.badge] || 'bg-gray-100 text-gray-700'}`}>
                {tmpl.badge}
              </span>
            </div>

            <div className="p-3">
              <p className="text-[13px] font-bold text-[#25241F] leading-tight">{tmpl.name}</p>
              <p className="text-[10px] text-[#636059] mt-0.5 leading-tight line-clamp-2">{tmpl.description}</p>
              <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#92772D]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Use Template
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
