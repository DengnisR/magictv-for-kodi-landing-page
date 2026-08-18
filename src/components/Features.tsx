import React from 'react';
import { Zap, Puzzle, Film, Sliders, Shield, RefreshCw, Cpu, MonitorPlay, Sparkles, CheckCircle } from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Zap,
      title: 'Ultra Rápido y Optimizado',
      description: 'Compilado específicamente para Android con menor huella de memoria RAM y arranque instantáneo en TV Boxes y Fire Sticks.',
      accent: 'cyan',
      tag: 'Alto Rendimiento',
    },
    {
      icon: Puzzle,
      title: '100% Compatible con Add-ons Kodi',
      description: 'Soporte total para el motor Python 3 de Kodi. Instala complementos de video, música, letras, subtítulos automáticos y fuentes personalizadas.',
      accent: 'purple',
      tag: 'Ecosistema Kodi',
    },
    {
      icon: Film,
      title: 'Multi-formato 4K HDR & AV1',
      description: 'Reproduce cualquier archivo local o remoto por streaming: MKV, MP4, TS, AV1, HEVC/H.265, Dolby Vision, HDR10+ y audio passthrough.',
      accent: 'cyan',
      tag: 'Calidad Cine',
    },
    {
      icon: MonitorPlay,
      title: 'Diseñado para Android TV & Touch',
      description: 'Interfaz fluida de líneas suaves con soporte nativo para controles remotos estándar, mandos para juegos, teclados y pantallas táctiles.',
      accent: 'purple',
      tag: 'Multi-pantalla',
    },
    {
      icon: Shield,
      title: 'Privacidad y Código Libre',
      description: 'Basado en código abierto bajo licencia GPL v2+. Sin rastreo de usuarios, sin telemetría invasiva y sin cuentas obligatorias.',
      accent: 'cyan',
      tag: 'Seguridad Total',
    },
    {
      icon: Sliders,
      title: 'Personalización de Skins',
      description: 'Cambia el aspecto visual de la aplicación con temas ligeros, colores acento neón y ajustes a medida de tu televisor o smartphone.',
      accent: 'purple',
      tag: 'Customizable',
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-white/80 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Title - Clean Minimalism */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#9D4EDD] text-xs font-bold uppercase tracking-widest mb-4 border border-purple-100">
            Funciones Principales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
            Todo lo que amas de Kodi,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
              con diseño limpio.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            Magic TV combina la potencia del ecosistema Kodi con una arquitectura ligera pensada para televisores inteligentes y móviles.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((f, i) => {
            const Icon = f.icon;
            const isCyan = f.accent === 'cyan';
            return (
              <div
                key={i}
                className="bg-white p-7 rounded-[28px] shadow-sm border border-slate-100 hover:border-slate-200 shadow-minimal-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isCyan
                        ? 'bg-blue-50 text-[#00D2FF]'
                        : 'bg-purple-50 text-[#9D4EDD]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {f.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    {f.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-xs font-semibold text-slate-400">
                  <CheckCircle className={`w-4 h-4 mr-2 ${isCyan ? 'text-[#00D2FF]' : 'text-[#9D4EDD]'}`} />
                  <span>Optimizado para Android 5.0 a 14+</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engine Specs Box */}
        <div className="mt-12 rounded-[32px] bg-slate-900 p-8 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00D2FF]/20 to-[#9D4EDD]/20 flex items-center justify-center border border-white/10 flex-shrink-0">
                <Cpu className="w-6 h-6 text-[#00D2FF]" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white">
                  Motor Nativo Kodi v21.2 Omega
                </h4>
                <p className="text-xs text-slate-400">
                  Compatibilidad absoluta con protocolos Samba (SMBv2/v3), NFS, WebDAV, DLNA/UPnP e IPTV con listas M3U.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-[#00D2FF]">
                Python 3.12 Engine
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-[#9D4EDD]">
                MediaCodec HW Direct
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-emerald-400">
                Audio Passthrough 7.1
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
