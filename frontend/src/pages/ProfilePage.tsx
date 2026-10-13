import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star, ShieldCheck, HelpCircle, LogOut, Bell, CreditCard, Smartphone } from 'lucide-react';
import { UserCreditInfo, CreditPackage } from '../types/api';

interface ProfilePageProps {
  userCredits?: UserCreditInfo;
  packages?: CreditPackage[];
}

const MOCK_PACKAGES: CreditPackage[] = [
  { id: 'p1', name: 'Starter',      credits: 10,  price_inr: 99,   popular: false, badge: 'Basic' },
  { id: 'p2', name: 'Professional', credits: 50,  price_inr: 399,  popular: true,  badge: 'Best Value' },
  { id: 'p3', name: 'Studio Pro',   credits: 150, price_inr: 999,  popular: false, badge: 'Power User' },
  { id: 'p4', name: 'Enterprise',   credits: 500, price_inr: 2999, popular: false, badge: 'Unlimited' },
];

export const ProfilePage: React.FC<ProfilePageProps> = ({ userCredits, packages = [] }) => {
  const navigate = useNavigate();
  const [showPackages, setShowPackages] = useState(false);

  const pkgs = packages.length > 0 ? packages : MOCK_PACKAGES;
  const credits = userCredits?.credits ?? 245;
  const shopName = userCredits?.shop_name || 'Sharma Jewellers';
  const ownerName = userCredits?.owner_name || 'Priya Sharma';

  return (
    <div className="min-h-screen bg-[#FAF8F3] pb-[80px]">
      {/* Profile Hero Card */}
      <div className="mx-4 mt-4 bg-white rounded-3xl border border-[#E8E2D7] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        {/* Top gradient strip */}
        <div className="h-20 bg-gradient-to-r from-[#745D20] via-[#92772D] to-[#C4A95B]" />
        <div className="px-4 pb-4 -mt-10">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-2xl border-4 border-white bg-[#92772D] flex items-center justify-center shadow-lg mb-2">
            <span className="text-white font-bold text-[22px] font-['Cinzel',serif]">
              {shopName.charAt(0)}
            </span>
          </div>
          <p className="text-[10px] text-[#636059] uppercase tracking-wider font-semibold">Owner</p>
          <h2 className="font-['Cinzel',serif] text-[17px] font-bold text-[#25241F] leading-tight">{shopName}</h2>
          <p className="text-[12px] text-[#636059]">{ownerName}</p>

          {/* Credits summary */}
          <div className="mt-3 flex items-center justify-between bg-[#FAF8F3] rounded-xl p-3 border border-[#E8E2D7]">
            <div>
              <p className="text-[10px] text-[#636059]">Credits Remaining</p>
              <p className="text-[22px] font-bold text-[#92772D] leading-none">{credits}</p>
            </div>
            <button
              onClick={() => setShowPackages(v => !v)}
              className="px-4 py-2 bg-[#92772D] text-white text-[12px] font-bold rounded-xl touch-press shadow-sm"
            >
              Buy Credits
            </button>
          </div>
        </div>
      </div>

      {/* Credit Packages */}
      {showPackages && (
        <div className="mx-4 mt-3 space-y-2">
          <p className="text-[13px] font-bold text-[#25241F] px-1">Choose a Credit Package</p>
          {pkgs.map(pkg => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl border p-4 flex items-center justify-between touch-press ${
                pkg.popular ? 'border-[#92772D] shadow-[0_0_0_1px_#92772D]' : 'border-[#E8E2D7]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[14px] font-bold text-[#25241F]">{pkg.credits} Credits</p>
                  {pkg.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-[#92772D] text-white text-[9px] font-bold">Best Value</span>
                  )}
                </div>
                <p className="text-[11px] text-[#636059]">{pkg.name}</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-[#92772D] text-white text-[13px] font-bold touch-press shadow-sm">
                ₹{pkg.price_inr}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Settings List */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {[
          { icon: Bell,        label: 'Notifications',   sub: 'Manage alerts' },
          { icon: CreditCard,  label: 'Billing History',  sub: 'Past transactions' },
          { icon: Smartphone,  label: 'Install App',      sub: 'Add to home screen' },
          { icon: Star,        label: 'Rate Us',          sub: '5 stars means the world!' },
          { icon: ShieldCheck, label: 'Privacy Policy',   sub: 'Your data is safe' },
          { icon: HelpCircle,  label: 'Help & Support',   sub: 'Chat with our team' },
        ].map(({ icon: Icon, label, sub }, i, arr) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-4 py-3.5 touch-press hover:bg-[#FAF8F3] transition-colors text-left ${
              i < arr.length - 1 ? 'border-b border-[#E8E2D7]' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] flex items-center justify-center shrink-0">
              <Icon className="w-4.5 h-4.5 text-[#92772D]" strokeWidth={1.8} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#25241F]">{label}</p>
              <p className="text-[11px] text-[#636059]">{sub}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8F8B82] shrink-0" />
          </button>
        ))}
      </div>

      {/* Sign Out */}
      <div className="mx-4 mt-3 mb-4">
        <button className="w-full py-3.5 rounded-2xl border border-[#FCA5A5] bg-[#FEF2F2] text-[#991B1B] font-bold text-[13px] flex items-center justify-center gap-2 touch-press">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-[10px] text-[#8F8B82] pb-2">GehnaStudio AI v1.0.0 · Made with ♥ for Indian Jewellers</p>
    </div>
  );
};
