import React from 'react';
import { Camera } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Projects Yet',
  description = 'Start your first studio shoot by uploading a smartphone picture of any jewellery piece.',
  actionText = 'Create Photoshoot',
  onAction,
  icon
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-beige-border rounded-2xl shadow-luxury max-w-md mx-auto my-6">
      <div className="w-14 h-14 rounded-full bg-ivory-200 text-gold-antique flex items-center justify-center mb-4 border border-beige-border">
        {icon || <Camera className="w-7 h-7" />}
      </div>
      <h3 className="font-serif text-lg font-bold text-charcoal mb-1">{title}</h3>
      <p className="text-xs text-charcoal-muted leading-relaxed mb-5 max-w-xs">{description}</p>
      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-antique to-gold-deep text-white text-xs font-semibold rounded-xl shadow-luxury touch-press transition-transform"
        >
          <span>{actionText}</span>
        </button>
      )}
    </div>
  );
};
