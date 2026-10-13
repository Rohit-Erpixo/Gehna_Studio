import React from 'react';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading studio data...',
  size = 'md'
}) => {
  const spinnerSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-10 h-10' : 'w-7 h-7';

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[180px]">
      <div className={`relative ${spinnerSize} mb-3`}>
        <div className="absolute inset-0 rounded-full border-2 border-beige-border"></div>
        <div className="absolute inset-0 rounded-full border-2 border-gold-antique border-t-transparent animate-spin"></div>
      </div>
      <p className="text-sm font-medium text-charcoal-muted tracking-wide">{message}</p>
    </div>
  );
};
