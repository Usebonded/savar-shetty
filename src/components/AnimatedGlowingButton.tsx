import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnimatedGlowingButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const AnimatedGlowingButton: React.FC<AnimatedGlowingButtonProps> = ({
  label,
  onClick,
  href,
  className = '',
  variant = 'primary'
}) => {
  const content = (
    <div className="relative flex items-center gap-2 z-10 font-semibold text-xs sm:text-sm tracking-wide">
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  );

  const primaryStyles = `
    group relative inline-flex items-center justify-center px-6 py-3 rounded-full overflow-hidden text-white font-medium
    bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-white/20
    shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.6)]
    hover:shadow-[0_12px_40px_rgba(99,102,241,0.4),inset_0_1px_0_rgba(255,255,255,0.3),0_0_0_2px_rgba(129,140,248,0.4)]
    hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer
  `;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${primaryStyles} ${className}`}>
        {/* Animated Background Laser Glow (Reference 2) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none"
        >
          <div className="absolute -inset-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#a855f7_50%,#4f46e5_100%)] opacity-30 blur-md" />
        </div>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${primaryStyles} ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none"
      >
        <div className="absolute -inset-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#a855f7_50%,#4f46e5_100%)] opacity-30 blur-md" />
      </div>
      {content}
    </button>
  );
};
