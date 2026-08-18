import React, { useState } from 'react';
import { GOOGLE_PLAY_URL } from '../config';
import { Play, Tv, Sparkles, Film, Radio, Layers, Settings, ShieldCheck, CheckCircle2, ChevronRight, Volume2, Cpu, Check, Network, Puzzle, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigateToFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToFeatures }) => {
  const [activeTab, setActiveTab] = useState<'movies' | 'tv' | 'addons' | 'music'>('movies');
  const [selectedItem, setSelectedItem] = useState(0);

  const previewMedia = {
    movies: [
      { id: 1, title: 'Cosmic Odyssey 4K', genre: 'Sci-Fi • 2026', res: '4K HDR10', rating: '8.9', color: 'from-[#00D2FF]/30 to-[#9D4EDD]/30' },
      { id: 2, title: 'Neon Horizon', genre: 'Cyberpunk • 2025', res: '4K Dolby', rating: '9.2', color: 'from-[#9D4EDD]/30 to-purple-900/40' },
      { id: 3, title: 'Deep Ocean Blue', genre: 'Documental • 2026', res: '4K 60FPS', rating: '9.5', color: 'from-blue-600/30 to-[#00D2FF]/40' },
    ],
    tv: [
      { id: 1, title: 'Transmisión IPTV & PVR', genre: 'Servidor Local o Remoto', res: '1080p 60FPS', rating: 'LIVE', color: 'from-emerald-500/30 to-teal-900/40' },
      { id: 2, title: 'IP Personalizada / Multi-Servidor', genre: 'Cualquier Stream M3U / TS', res: 'FHD • EPG', rating: 'LIVE', color: 'from-amber-500/30 to-red-900/40' },
      { id: 3, title: 'Canales Internacionales', genre: 'Transmisiones Directas', res: '4K HDR', rating: '9.4', color: 'from-[#9D4EDD]/30 to-indigo-900/40' },
    ],
    addons: [
      { id: 1, title: 'Repositorio Oficial Kodi', genre: 'Miles de Add-ons Compatibles', res: 'Nexus 20.5', rating: 'v20.5', color: 'from-[#00D2FF]/30 to-blue-800/40' },
      { id: 2, title: 'YouTube, Twitch & Web Addons', genre: 'Complementos de Terceros', res: '4K AV1', rating: 'Activo', color: 'from-red-500/30 to-[#9D4EDD]/40' },
      { id: 3, title: 'Subtítulos Auto-Sync', genre: 'OpenSubtitles / Subdivx', res: 'Multilingüe', rating: 'Activo', color: 'from-teal-500/30 to-[#00D2FF]/40' },
    ],
    music: [
      { id: 1, title: 'Synthwave & Lo-Fi Lounge', genre: 'Audio Hi-Res FLAC 24-bit', res: 'Lossless', rating: 'HQ', color: 'from-fuchsia-500/30 to-[#9D4EDD]/40' },
      { id: 2, title: 'Radio Internet Global', genre: '50,000+ Emisoras en Directo', res: '320 kbps', rating: 'LIVE', color: 'from-[#00D2FF]/30 to-sky-900/40' },
      { id: 3, title: 'Biblioteca Local NAS & DLNA', genre: 'Servidor Samba / NFS / SMB', res: 'Direct Play', rating: 'Local', color: 'from-indigo-600/30 to-slate-900/40' },
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
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest border border-blue-100 shadow-sm">
                Port Oficial • Kodi Nexus 20.5
              </span>
              <span className="inline-block px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100 shadow-sm">
                Google Play Store
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.1] text-slate-900 tracking-tight mb-6">
              Tu centro multimedia, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
                ahora es mágico.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6 max-w-lg font-normal">
              Disfruta de toda la potencia y estabilidad de <strong>Kodi Nexus 20.5</strong> en una interfaz optimizada para Android y Android TV. Compatible con cualquier dirección IP de streaming, servidores personalizados y todos tus complementos favoritos.
            </p>

            {/* Freedom highlights banner */}
            <div className="w-full max-w-lg p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-slate-100 mb-8 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Network className="w-4 h-4 text-[#00D2FF]" />
                <span>Libertad Total de IPs y Servidores:</span>
              </div>
              <p className="text-slate-500 leading-normal pl-6">
                No limita la transmisión: puedes configurar cualquier IP local, remota, servidor IPTV, NAS o enlace externo.
              </p>
              <div className="flex items-center gap-2 font-bold text-slate-800 pt-1">
                <Puzzle className="w-4 h-4 text-[#9D4EDD]" />
                <span>Compatibilidad 100% de Add-ons:</span>
              </div>
              <p className="text-slate-500 leading-normal pl-6">
                Instala libremente cualquier complemento, repositorio o addon desarrollado para Kodi Nexus 20.5.
              </p>
            </div>

            {/* Action Buttons: Google Play Store primary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-playstore"
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 border border-slate-700 group"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l.1.1 9.8-9.8v-.2L3.7 2.4l-.1-.6z" fill="#00D2FF"/>
                  <path d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFD200"/>
                  <path d="M13.5 12.1L3.6 22.2c.4.4 1.1.5 1.8.1l11.5-6.6-3.4-3.6z" fill="#FF3366"/>
                  <path d="M13.5 11.9l3.4-3.6L5.4 1.7C4.7 1.3 4 1.4 3.6 1.8l9.9 10.1z" fill="#00E676"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">DISPONIBLE EN</div>
                  <div className="text-sm font-black text-white group-hover:text-[#00D2FF] transition-colors">Google Play</div>
                </div>
              </a>

              <button
                id="hero-cta-explore-features"
                onClick={onNavigateToFeatures}
                className="bg-white px-6 py-3.5 rounded-2xl font-bold text-slate-700 text-sm border border-slate-200 shadow-sm hover:border-[#9D4EDD]/40 hover:text-[#9D4EDD] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explorar Funciones</span>
                <ArrowRight className="w-4 h-4 text-[#9D4EDD]" />
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
                <p className="font-bold text-slate-800 text-sm">Add-ons Ilimitados</p>
                <p className="text-xs text-slate-400 mt-1">Soporte total Kodi Nexus</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Mockup Frame */}
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
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        activeTab === 'movies' ? 'bg-[#00D2FF] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Películas
                    </button>
                    <button
                      onClick={() => setActiveTab('tv')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        activeTab === 'tv' ? 'bg-[#9D4EDD] text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      TV / IPTV
                    </button>
                    <button
                      onClick={() => setActiveTab('addons')}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
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
                      Kodi Nexus 20.5 Engine
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 font-mono">
                      4K HDR • Multi-IP Ready
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
                      className="text-[#9D4EDD] hover:underline font-bold cursor-pointer"
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
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Kodi Nexus 20.5</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
