import React, { useState } from 'react';
import { Download, Play, Tv, Sparkles, Film, Radio, Layers, Settings, ShieldCheck, CheckCircle2, ChevronRight, Volume2, Cpu, Check } from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
  onNavigateToGuide: () => void;
  onNavigateToFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onNavigateToGuide, onNavigateToFeatures }) => {
  const [activeTab, setActiveTab] = useState<'movies' | 'tv' | 'addons' | 'music'>('movies');
  const [selectedItem, setSelectedItem] = useState(0);

  const previewMedia = {
    movies: [
      { id: 1, title: 'Cosmic Odyssey 4K', genre: 'Sci-Fi • 2026', res: '4K HDR10', rating: '8.9', color: 'from-[#00D2FF]/30 to-[#9D4EDD]/30' },
      { id: 2, title: 'Neon Horizon', genre: 'Cyberpunk • 2025', res: '4K Dolby', rating: '9.2', color: 'from-[#9D4EDD]/30 to-purple-900/40' },
      { id: 3, title: 'Deep Ocean Blue', genre: 'Documental • 2026', res: '4K 60FPS', rating: '9.5', color: 'from-blue-600/30 to-[#00D2FF]/40' },
    ],
    tv: [
      { id: 1, title: 'Deportes en Vivo HD', genre: 'Transmisión PVR • IPTV', res: '1080p 60FPS', rating: 'LIVE', color: 'from-emerald-500/30 to-teal-900/40' },
      { id: 2, title: 'Noticias 24/7 Global', genre: 'Canales Internacionales', res: 'FHD • EPG', rating: 'LIVE', color: 'from-amber-500/30 to-red-900/40' },
      { id: 3, title: 'Series & Anime Stream', genre: 'Temporadas Completas', res: '4K HDR', rating: '9.4', color: 'from-[#9D4EDD]/30 to-indigo-900/40' },
    ],
    addons: [
      { id: 1, title: 'Repositorio Oficial Kodi', genre: '1,200+ Add-ons Disponibles', res: 'Verificado', rating: 'v21.2', color: 'from-[#00D2FF]/30 to-blue-800/40' },
      { id: 2, title: 'YouTube & Twitch Addon', genre: 'Streaming sin límites', res: '4K AV1', rating: 'Activo', color: 'from-red-500/30 to-[#9D4EDD]/40' },
      { id: 3, title: 'Subtítulos Auto-Sync', genre: 'OpenSubtitles / Subdivx', res: 'Multilingüe', rating: 'Activo', color: 'from-teal-500/30 to-[#00D2FF]/40' },
    ],
    music: [
      { id: 1, title: 'Synthwave & Lo-Fi Lounge', genre: 'Audio Hi-Res FLAC 24-bit', res: 'Lossless', rating: 'HQ', color: 'from-fuchsia-500/30 to-[#9D4EDD]/40' },
      { id: 2, title: 'Radio Internet Global', genre: '50,000+ Emisoras en Directo', res: '320 kbps', rating: 'LIVE', color: 'from-[#00D2FF]/30 to-sky-900/40' },
      { id: 3, title: 'Biblioteca Local NAS', genre: 'Servidor Samba / NFS / DLNA', res: 'Direct Play', rating: 'Local', color: 'from-indigo-600/30 to-slate-900/40' },
    ],
  };

  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      {/* Background Soft Neon Light Glow (Clean Minimalism style) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] opacity-[0.08] blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main 2-Column Hero Flex/Grid - Clean Minimalism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Text & Features Mini-Grid */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
              Optimizado para Android • Port de Kodi
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.1] text-slate-900 tracking-tight mb-6">
              Tu centro multimedia, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
                ahora es mágico.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-normal">
              Disfruta de toda la potencia de Kodi en una interfaz ligera, fluida y minimalista diseñada específicamente para tu móvil, TV Box o Android TV.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-cta-download"
                onClick={onOpenDownload}
                className="bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-[0_10px_20px_-5px_rgba(157,78,221,0.4)] hover:shadow-none hover:opacity-95 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Descargar APK</span>
                <span className="text-xs py-0.5 px-2 bg-white/20 rounded-full font-semibold">v21.2</span>
              </button>

              <button
                id="hero-cta-guide"
                onClick={onNavigateToGuide}
                className="bg-white px-6 py-4 rounded-2xl font-bold text-slate-700 text-base border border-slate-100 shadow-sm hover:border-[#9D4EDD]/40 hover:text-[#9D4EDD] transition-all flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#9D4EDD]" />
                <span>Guía de Instalación</span>
              </button>
            </div>

            {/* Mini Highlight Cards Grid from Clean Minimalism Theme */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div className="bg-white p-5 rounded-[24px] shadow-sm border border-slate-100 hover:border-blue-100 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-3 shadow-inner">
                  🚀
                </div>
                <p className="font-bold text-slate-800 text-sm">Ultra Rápido</p>
                <p className="text-xs text-slate-400 mt-1">Carga fluida de contenido</p>
              </div>

              <div className="bg-white p-5 rounded-[24px] shadow-sm border border-slate-100 hover:border-purple-100 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-xl mb-3 shadow-inner">
                  🔌
                </div>
                <p className="font-bold text-slate-800 text-sm">Add-ons Listos</p>
                <p className="text-xs text-slate-400 mt-1">Soporte total de Kodi</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Mockup Frame (Clean Minimalism 48px rounded outer container) */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] opacity-[0.10] blur-[70px] rounded-full pointer-events-none" />

            {/* Outer Device Container */}
            <div className="relative bg-white p-3.5 sm:p-5 rounded-[40px] sm:rounded-[48px] shadow-2xl border border-white flex flex-col">
              
              {/* Inner Screen */}
              <div className="bg-slate-900 rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col text-white border border-slate-800/80">
                
                {/* Header Bar with 3 Colored Dots */}
                <div className="h-11 bg-slate-800/60 border-b border-slate-800 px-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 font-bold">Magic TV Media Center</span>
                  </div>

                  {/* Clean tabs */}
                  <div className="hidden sm:flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={() => setActiveTab('movies')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all ${
                        activeTab === 'movies' ? 'bg-[#00D2FF] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Películas
                    </button>
                    <button
                      onClick={() => setActiveTab('tv')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all ${
                        activeTab === 'tv' ? 'bg-[#9D4EDD] text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      TV
                    </button>
                    <button
                      onClick={() => setActiveTab('addons')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all ${
                        activeTab === 'addons' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Add-ons
                    </button>
                  </div>

                  <div className="h-2 w-16 bg-slate-700 rounded-full" />
                </div>

                {/* Main Screen Body */}
                <div className="p-5 sm:p-6 bg-slate-950 space-y-4">
                  
                  {/* Status header */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-sm">
                      Kodi 21.2 Omega Engine
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 font-mono">
                      4K HDR • 60 FPS
                    </span>
                  </div>

                  {/* Cards inside Mockup */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {previewMedia[activeTab].map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItem(idx)}
                        className={`cursor-pointer rounded-2xl p-3.5 transition-all border ${
                          selectedItem === idx
                            ? 'border-[#00D2FF] bg-slate-800/90 shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                            : 'border-slate-800/90 bg-slate-900/80 hover:border-slate-700'
                        }`}
                      >
                        <div className={`h-20 rounded-xl bg-gradient-to-br ${item.color} border border-white/5 flex items-center justify-center relative overflow-hidden mb-2.5`}>
                          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                          </div>
                          <span className="absolute top-1.5 right-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-[#00D2FF]">
                            {item.res}
                          </span>
                        </div>

                        <p className="font-bold text-xs text-white truncate">{item.title}</p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.genre}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom mockup bar */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                    <span className="flex items-center gap-1 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                      HW Direct Decoding
                    </span>
                    <button
                      onClick={onNavigateToFeatures}
                      className="text-[#9D4EDD] hover:underline font-bold"
                    >
                      Ver especificaciones →
                    </button>
                  </div>

                </div>

              </div>

            </div>

            {/* Floating Badge from Clean Minimalism Design: Sin Errores */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-3.5 sm:p-4 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-3 animate-bounce">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-400 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-400/30">
                <Check className="w-5 h-5 text-white stroke-[3]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs sm:text-sm text-slate-900 leading-none">Sin Errores</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Optimización 2.0</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
