import React from 'react';
import { RoutePath } from '../types';
import { Shield, FileText, Download, Github, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDownload }) => {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-500 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#9D4EDD] flex items-center justify-center shadow-sm">
                <span className="text-white font-extrabold text-sm">M</span>
              </div>
              <span className="text-base font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
                Magic TV
              </span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-slate-200" />

            <p className="text-slate-400 font-medium">
              © {new Date().getFullYear()} Magic TV. Port de código abierto basado en Kodi®.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 font-bold text-slate-600">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#9D4EDD] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('features')}
              className="hover:text-[#9D4EDD] transition-colors cursor-pointer"
            >
              Funciones
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#00D2FF] transition-colors cursor-pointer"
            >
              Privacidad
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-[#9D4EDD] transition-colors cursor-pointer"
            >
              Términos
            </button>
            <button
              onClick={onOpenDownload}
              className="hover:text-[#00D2FF] transition-colors cursor-pointer"
            >
              Descargas
            </button>
          </div>

          {/* Social / Minimal Badges */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 transition-all shadow-2xs"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-xs font-mono font-bold shadow-2xs">
              21.2
            </div>
          </div>

        </div>

        {/* Bottom micro disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-100/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>
            Kodi® es una marca registrada de la Fundación XBMC. Magic TV no está afiliado ni respaldado oficialmente por la Fundación XBMC.
          </p>
          <div className="flex items-center gap-1">
            <span>Licenciado bajo GNU GPL v2+</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
