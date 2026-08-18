import React, { useState } from 'react';
import { Tv, Smartphone, Download, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';

interface InstallationGuideProps {
  onOpenDownload: () => void;
}

interface StepItem {
  step: string;
  title: string;
  desc: string;
  badge: string;
  code?: string;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ onOpenDownload }) => {
  const [deviceType, setDeviceType] = useState<'tv' | 'mobile'>('tv');
  const [copiedCode, setCopiedCode] = useState(false);

  const downloaderCode = '784291';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(downloaderCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const tvSteps: StepItem[] = [
    {
      step: '01',
      title: 'Instala Downloader',
      desc: 'En tu Android TV, Google TV o Fire TV Stick, instala la app gratuita "Downloader" desde la tienda oficial.',
      badge: 'Paso 1',
    },
    {
      step: '02',
      title: 'Permite apps desconocidas',
      desc: 'En Ajustes > Seguridad (u Opciones de Desarrollador), concede permiso de instalación a Downloader.',
      badge: 'Ajuste',
    },
    {
      step: '03',
      title: 'Ingresa el código rápido',
      desc: 'Abre Downloader, escribe el código numérico de Magic TV y pulsa "Go" para iniciar la descarga.',
      code: downloaderCode,
      badge: 'Descarga',
    },
    {
      step: '04',
      title: 'Instala y disfruta',
      desc: 'Pulsa "Instalar", abre Magic TV y comienza a reproducir tu contenido favorito.',
      badge: 'Listo',
    },
  ];

  const mobileSteps: StepItem[] = [
    {
      step: '01',
      title: 'Descarga el archivo APK',
      desc: 'Haz clic en el botón "Descargar APK" en esta página desde el navegador web de tu celular o tablet Android.',
      badge: 'Paso 1',
    },
    {
      step: '02',
      title: 'Permite fuentes externas',
      desc: 'Al abrir el archivo, autoriza la instalación de aplicaciones desde tu navegador en el mensaje emergente.',
      badge: 'Permiso',
    },
    {
      step: '03',
      title: 'Completa la instalación',
      desc: 'Toca en "Instalar". Magic TV aparecerá en la lista de aplicaciones instaladas de tu smartphone.',
      badge: 'Paso 3',
    },
    {
      step: '04',
      title: 'Añade tus fuentes',
      desc: 'Conecta con tus servidores locales (SMB/NFS) o instala los complementos y repositorios que prefieras.',
      badge: 'Listo',
    },
  ];

  const currentSteps: StepItem[] = deviceType === 'tv' ? tvSteps : mobileSteps;

  return (
    <section id="guide" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
            Instalación en 2 Minutos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            Cómo instalar Magic TV
          </h2>
          <p className="mt-3 text-slate-500 text-base font-normal max-w-md mx-auto">
            Elige el tipo de dispositivo en el que vas a disfrutar de tu centro multimedia:
          </p>

          {/* Clean Minimalism Toggle */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-100 shadow-sm mt-6">
            <button
              onClick={() => setDeviceType('tv')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                deviceType === 'tv'
                  ? 'bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Tv className="w-4 h-4" />
              <span>Smart TV / Fire Stick</span>
            </button>
            <button
              onClick={() => setDeviceType('mobile')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                deviceType === 'mobile'
                  ? 'bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Móvil / Tablet</span>
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm shadow-minimal-hover relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] bg-clip-text text-transparent">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {s.desc}
                </p>

                {s.code && (
                  <div className="mt-4 p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between border border-slate-800">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">Código Downloader:</span>
                      <span className="text-sm font-mono font-extrabold text-[#00D2FF]">{s.code}</span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Copiar código"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-50 flex items-center text-xs text-[#9D4EDD] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] mr-1.5 flex-shrink-0" />
                <span>Compatible Android 5.0+</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below guide */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-[0_10px_20px_-5px_rgba(157,78,221,0.4)] hover:shadow-none transition-all active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Descargar archivo APK oficial</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
