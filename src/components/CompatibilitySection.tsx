import React from 'react';
import { Tv, Monitor, Smartphone, Flame, Projector, CheckCircle, Radio } from 'lucide-react';

export const CompatibilitySection: React.FC = () => {
  const devices = [
    {
      category: 'Smart TVs con Android TV / Google TV',
      icon: Tv,
      examples: 'Sony Bravia, TCL, Philips, Hisense, Xiaomi TV, Panasonic',
      status: 'Soporte 4K',
      accent: 'cyan',
    },
    {
      category: 'Dispositivos HDMI Streaming',
      icon: Flame,
      examples: 'Amazon Fire TV Stick (4K / Max / Lite / Cube), Chromecast con Google TV, Xiaomi Mi Stick',
      status: 'Ultra Ligero',
      accent: 'purple',
    },
    {
      category: 'TV Boxes & Mini PCs Android',
      icon: Monitor,
      examples: 'NVIDIA Shield TV, Xiaomi Mi Box S, Mecool, X96 Max, Tanix, Beelink',
      status: 'Passthrough 7.1',
      accent: 'cyan',
    },
    {
      category: 'Teléfonos & Tablets Android',
      icon: Smartphone,
      examples: 'Samsung Galaxy, Xiaomi, Motorola, Realme, Google Pixel, OnePlus, Lenovo Tab',
      status: 'Modo Táctil',
      accent: 'purple',
    },
    {
      category: 'Proyectores Inteligentes Android',
      icon: Projector,
      examples: 'XGIMI, Anker Nebula, Wanbo, Formovie, Dangbei con Android TV',
      status: 'Modo Cine',
      accent: 'cyan',
    },
    {
      category: 'Sistemas de Audio & Receptores AV',
      icon: Radio,
      examples: 'Barras de sonido y receptores Yamaha, Denon, Marantz, Sony (eARC / Óptico)',
      status: 'Dolby Atmos',
      accent: 'purple',
    },
  ];

  return (
    <section id="compatibility" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#9D4EDD] text-xs font-bold uppercase tracking-widest mb-4 border border-purple-100">
            Ecosistema Universal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            Compatible con tus pantallas
          </h2>
          <p className="mt-3 text-slate-500 text-base font-normal max-w-md mx-auto">
            Diseñado para adaptarse a pantallas de cualquier tamaño con máxima fluidez y bajo consumo.
          </p>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((d, index) => {
            const Icon = d.icon;
            const isCyan = d.accent === 'cyan';
            return (
              <div
                key={index}
                className="p-6 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white shadow-minimal-hover transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCyan ? 'bg-blue-50 text-[#00D2FF]' : 'bg-purple-50 text-[#9D4EDD]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border ${
                    isCyan
                      ? 'bg-blue-50/60 text-[#00D2FF] border-blue-100'
                      : 'bg-purple-50/60 text-[#9D4EDD] border-purple-100'
                  }`}>
                    {d.status}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-1.5">
                  {d.category}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {d.examples}
                </p>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center text-[11px] text-slate-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-1.5 flex-shrink-0" />
                  <span>Detección automática de resolución</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
