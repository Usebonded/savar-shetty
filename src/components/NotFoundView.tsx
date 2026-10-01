import React from 'react';
import { Home, ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';

interface NotFoundViewProps {
  onGoHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div>
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-rose-500">
            Error 404 · Route Not Found
          </span>
          <h2 className="text-2xl font-display font-bold text-zinc-900 dark:text-white mt-1">
            Resource Out of Bounds
          </h2>
          <p className="text-xs text-zinc-600 dark:text-white mt-2 leading-relaxed">
            The destination or case study fragment you requested does not exist or has been relocated within Savar Shetty&apos;s architectural index.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
