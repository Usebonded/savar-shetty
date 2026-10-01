import React from 'react';

interface SectionDividerProps {
  label?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  return (
    <div className="w-full bg-transparent py-10 flex items-center justify-center relative z-20 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto" />
      
      {label ? (
        <div className="relative bg-neutral-900/80 backdrop-blur-md px-5 py-1.5 border border-white/10 rounded-full flex items-center gap-3 shadow-2xl">
          <div className="flex gap-1">
            <div className="w-0.5 h-2.5 bg-white/20" />
            <div className="w-0.5 h-2.5 bg-white/20" />
          </div>
          <span className="text-[10px] font-mono-code uppercase tracking-[0.2em] text-white/40">
            {label}
          </span>
          <div className="flex gap-1">
            <div className="w-0.5 h-2.5 bg-white/20" />
            <div className="w-0.5 h-2.5 bg-emerald-500" />
          </div>
        </div>
      ) : (
        <div className="relative bg-neutral-900/80 backdrop-blur-md p-2.5 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.7)] animate-pulse" />
        </div>
      )}
    </div>
  );
};
