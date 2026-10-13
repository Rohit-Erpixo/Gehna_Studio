import React from 'react';
import { Home, Image as GalleryIcon, Plus, LayoutTemplate, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8E2D7] safe-bottom">
      <div className="max-w-md mx-auto px-1 flex items-center justify-around h-[62px]">
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
                className="flex flex-col items-center -mt-6 touch-press"
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
              className="flex flex-col items-center gap-0.5 py-1 px-3 min-w-[52px] touch-press"
            >
              <Icon
                className={`w-[22px] h-[22px] ${isActive ? 'text-[#92772D]' : 'text-[#8F8B82]'}`}
                strokeWidth={isActive ? 2.2 : 1.8}
              />
              <span className={`text-[10px] leading-none ${isActive ? 'text-[#92772D] font-bold' : 'text-[#8F8B82] font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
