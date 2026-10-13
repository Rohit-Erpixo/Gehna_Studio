import React from 'react';
import { Bell, User } from 'lucide-react';
import { UserCreditInfo } from '../../types/api';

interface TopHeaderProps {
  userCredits?: UserCreditInfo;
  onOpenCreditsModal?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ userCredits, onOpenCreditsModal }) => {
  const shopName = userCredits?.shop_name || 'Sharma Jewellers';

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E8E2D7] safe-top">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo + Name */}
        <div className="flex items-center gap-2.5">
          {/* Gold star/sparkle logo mark */}
          <div className="w-9 h-9 flex items-center justify-center">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2 L18.5 13 L29 17 L18.5 21 L17 32 L15.5 21 L5 17 L15.5 13 Z" fill="#92772D"/>
              <path d="M17 6 L17.8 12.5 L24 17 L17.8 21.5 L17 28 L16.2 21.5 L10 17 L16.2 12.5 Z" fill="#C4A95B" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <div className="font-['Cinzel',serif] text-[15px] font-bold tracking-wide text-[#25241F] leading-none">
              GehnaStudio <span className="text-[#92772D]">AI</span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#92772D] font-semibold leading-none mt-0.5">
              Jewellery Photos, Reimagined
            </div>
          </div>
        </div>

        {/* Right: Bell + Avatar */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white border border-[#E8E2D7] flex items-center justify-center touch-press">
            <Bell className="w-4.5 h-4.5 text-[#636059]" strokeWidth={1.8} />
          </button>
          <button
            onClick={onOpenCreditsModal}
            className="w-9 h-9 rounded-full bg-[#92772D] flex items-center justify-center touch-press shadow-sm"
          >
            <User className="w-4.5 h-4.5 text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
};
