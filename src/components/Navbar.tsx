import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText, CheckCircle, Search, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenResume,
  onOpenAudit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills & Vision', path: '/systems' },
    { name: 'My Journey', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Floating Pill Nav Bar (Velos Template Style) */}
      <div className="fixed top-5 right-0 left-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto flex items-center justify-between w-full max-w-4xl bg-neutral-900/80 border border-white/10 rounded-full py-2 px-3 sm:px-5 shadow-2xl backdrop-blur-xl transition-all duration-300"
        >
          {/* Logo Area */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Savar Shetty — Homepage"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full py-1 pr-2"
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-950 font-bold text-xs font-mono group-hover:scale-105 transition-transform shadow-xs">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-bricolage text-sm tracking-tight font-semibold text-white">
                SAVAR SHETTY
              </span>
              <span className="text-[10px] font-mono-code text-white leading-none">
                AI/ML ENGINEER
              </span>
            </div>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-white">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full transition-all duration-200 relative focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold shadow-inner border border-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={onOpenAudit}
              aria-label="View Audit Report"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Audit Sprint Checklist"
            >
              <CheckCircle className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-mono-code border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Manifest / CV</span>
            </button>

            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Accessible Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-neutral-950 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="font-bricolage font-bold text-base text-white">
                  SAVAR SHETTY
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                  className="p-1.5 rounded-lg text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white font-semibold border border-white/20'
                          : 'text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors text-left flex items-center gap-2 mt-2 pt-2 border-t border-white/10"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Audit Sprint Report</span>
                </button>
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-full text-xs font-mono-code border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <FileText className="w-4 h-4" />
                <span>View Manifest / CV</span>
              </button>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full text-xs font-medium bg-white text-black flex items-center justify-center shadow-lg font-semibold"
              >
                Engage Systems
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

