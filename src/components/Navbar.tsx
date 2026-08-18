import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { Tv, Download, Shield, FileText, Menu, X, Sparkles, HelpCircle, Layers, Smartphone } from 'lucide-react';

interface NavbarProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: RoutePath, event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'h-20 bg-white/70 backdrop-blur-md border-b border-slate-100/80'
      } flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Clean Minimalism */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group transition-transform focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#9D4EDD] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl tracking-tighter">M</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
                  Magic TV
                </span>
                <span className="inline-block px-2 py-0.5 rounded-full bg-blue-50 text-[#00D2FF] text-[10px] font-bold tracking-wider uppercase border border-blue-100/80">
                  Android Port
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-semibold text-slate-500">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'home'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              Inicio
            </button>

            <button
              id="nav-link-features"
              onClick={() => handleNavClick('features')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'features'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              Funciones
            </button>

            <button
              id="nav-link-guide"
              onClick={() => handleNavClick('guide')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'guide'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              Instalación
            </button>

            <button
              id="nav-link-compatibility"
              onClick={() => handleNavClick('compatibility')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'compatibility'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              Dispositivos
            </button>

            <button
              id="nav-link-faq"
              onClick={() => handleNavClick('faq')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'faq'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              Preguntas
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <button
              id="nav-link-privacy"
              onClick={() => handleNavClick('privacy')}
              className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentRoute === 'privacy'
                  ? 'text-[#00D2FF] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#00D2FF]" />
              Privacidad
            </button>

            <button
              id="nav-link-terms"
              onClick={() => handleNavClick('terms')}
              className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentRoute === 'terms'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#9D4EDD]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#9D4EDD]" />
              Términos
            </button>
          </nav>

          {/* Download Action CTA - Clean Minimalist Pill Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-download-btn"
              onClick={onOpenDownload}
              className="bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white px-7 py-3 rounded-2xl font-bold text-sm shadow-[0_10px_20px_-5px_rgba(157,78,221,0.4)] hover:shadow-none hover:opacity-95 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Descargar APK</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-download-btn"
              onClick={onOpenDownload}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white shadow-sm text-xs font-bold sm:hidden flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 lg:hidden border-b border-slate-100 bg-white/95 backdrop-blur-lg px-6 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            <button
              id="m-nav-home"
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left ${
                currentRoute === 'home' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Tv className="w-4 h-4 text-[#9D4EDD]" />
              Inicio
            </button>
            <button
              id="m-nav-features"
              onClick={() => handleNavClick('features')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left ${
                currentRoute === 'features' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#00D2FF]" />
              Funciones
            </button>
            <button
              id="m-nav-guide"
              onClick={() => handleNavClick('guide')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left ${
                currentRoute === 'guide' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4 text-[#9D4EDD]" />
              Guía de Instalación
            </button>
            <button
              id="m-nav-compatibility"
              onClick={() => handleNavClick('compatibility')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left ${
                currentRoute === 'compatibility' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#00D2FF]" />
              Dispositivos
            </button>
            <button
              id="m-nav-faq"
              onClick={() => handleNavClick('faq')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left ${
                currentRoute === 'faq' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#9D4EDD]" />
              Preguntas
            </button>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 px-4 tracking-wider">
                Políticas y Legal
              </span>
            </div>

            <button
              id="m-nav-privacy"
              onClick={() => handleNavClick('privacy')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-left ${
                currentRoute === 'privacy' ? 'bg-blue-50 text-[#00D2FF] font-bold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Shield className="w-4 h-4 text-[#00D2FF]" />
              Políticas de Privacidad
            </button>
            <button
              id="m-nav-terms"
              onClick={() => handleNavClick('terms')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-left ${
                currentRoute === 'terms' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-[#9D4EDD]" />
              Términos y Condiciones
            </button>

            <div className="pt-2">
              <button
                id="m-nav-download-main"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white font-bold text-center shadow-[0_10px_20px_-5px_rgba(157,78,221,0.4)] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar APK de Magic TV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

