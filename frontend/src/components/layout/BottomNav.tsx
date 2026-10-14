import React from 'react';
import { Home, Image as GalleryIcon, Plus, LayoutTemplate, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Brand } from './TopHeader';

// Bottom tab bar on mobile; left side rail on md+ (icons + labels below at md, beside at lg)
export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home',      icon: Home,          path: '/' },
    { label: 'Gallery',   icon: GalleryIcon,   path: '/gallery' },
    { label: 'Create',    icon: Plus,          path: '/create', primary: true },
    { label: 'Templates', icon: LayoutTemplate, path: '/templates' },
    { label: 'Profile',   icon: User,          path: '/profile' },
  ];

  return (
    <nav className="fixed z-50 bg-white border-[#E8E2D7] bottom-0 left-0 right-0 border-t safe-bottom md:top-0 md:right-auto md:w-20 lg:w-60 md:border-t-0 md:border-r md:pb-0">
      {/* Rail header: brand + primary CTA */}
      <div className="hidden md:block px-3 lg:px-4 pt-4">
        <div className="flex justify-center lg:justify-start mb-5">
          <Brand textClassName="hidden lg:block" tagline={false} />
        </div>
        <button
          onClick={() => navigate('/create')}
          aria-label="Create photoshoot"
          className="w-full h-12 rounded-xl bg-[#92772D] text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(146,119,45,0.35)] touch-press"
        >
          <Plus className="w-5 h-5 shrink-0" strokeWidth={2.5} />
          <span className="hidden lg:inline">Create Photoshoot</span>
        </button>
      </div>

      <div className="max-w-md mx-auto px-1 flex items-center justify-around h-[62px] md:max-w-none md:h-auto md:flex-col md:items-stretch md:justify-start md:gap-1 md:px-3 md:pt-4">
        {navItems.map((item) => {
          const isActive = item.path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.path);
          const Icon = item.icon;

          if (item.primary) {
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                aria-label="Create photoshoot"
                className="md:hidden flex flex-col items-center -mt-6 touch-press"
              >
                <div className="w-14 h-14 rounded-full bg-[#92772D] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(146,119,45,0.45)] border-4 border-white">
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-semibold text-[#92772D] mt-0.5">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 min-w-[52px] touch-press md:gap-1 md:py-2.5 md:px-0 md:rounded-xl lg:flex-row lg:gap-3 lg:px-3 transition-colors ${
                isActive ? 'md:bg-[#F4EFE6]' : 'md:hover:bg-[#FAF8F3]'
              }`}
            >
              <Icon
                className={`w-[22px] h-[22px] shrink-0 ${isActive ? 'text-[#92772D]' : 'text-[#8F8B82]'}`}
                strokeWidth={isActive ? 2.2 : 1.8}
              />
              <span className={`text-[10px] leading-none lg:text-[13px] ${isActive ? 'text-[#92772D] font-bold' : 'text-[#8F8B82] font-medium lg:text-[#636059]'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
