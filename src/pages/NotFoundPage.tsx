import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 text-white">
      <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono-code uppercase tracking-wider text-rose-400">
            Error 404 · Route Not Found
          </span>
          <h1 className="text-3xl font-bricolage font-bold text-white mt-2">
            Resource Out of Bounds
          </h1>
          <p className="text-xs sm:text-sm text-white mt-3 leading-relaxed font-light">
            The destination or case study fragment you requested does not exist or has been relocated within Savar Shetty&apos;s architectural index.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono-code uppercase font-semibold transition-colors flex items-center justify-center gap-2 hover:bg-neutral-200 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
