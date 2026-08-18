import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, Scale, Code, Copy, Check, Printer } from 'lucide-react';

interface TermsAndConditionsProps {
  onNavigate: (route: RoutePath) => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = document.getElementById('terms-conditions-body')?.innerText || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto">
      
      {/* Breadcrumb / Back button */}
      <div className="flex items-center justify-between mb-8">
        <button
          id="back-home-terms-btn"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#9D4EDD] hover:text-purple-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyText}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copiado' : 'Copiar Texto'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* Main Terms Document Box - Clean Minimalism */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Glow Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9D4EDD] to-[#00D2FF]" />

        {/* Header */}
        <div className="border-b border-slate-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-[#9D4EDD] text-xs font-extrabold uppercase tracking-widest mb-4 border border-purple-100">
            <FileText className="w-3.5 h-3.5" />
            <span>Términos Legales & Condiciones de Uso</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Términos y Condiciones de Uso de Magic TV
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
            <span><strong>Fecha de vigencia:</strong> 18 de Agosto de 2026</span>
            <span>•</span>
            <span><strong>Licencia:</strong> GNU General Public License v2.0 o superior (GPL v2+)</span>
            <span>•</span>
            <span><strong>Plataforma:</strong> Android (TV, Box, Móvil, Tablet)</span>
          </div>

          {/* Alert Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-purple-50/60 border border-purple-100 text-slate-600 text-xs leading-relaxed">
            <strong className="text-purple-900 font-bold block mb-1">Descargo de Responsabilidad Fundamental:</strong>
            Magic TV es un reproductor de medios neutral y de código abierto. No proporciona, hospeda ni distribuye contenido multimedia protegido con derechos de autor.
          </div>
        </div>

        {/* Body Content */}
        <div id="terms-conditions-body" className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#9D4EDD] font-black">1.</span> Aceptación de los Términos
            </h2>
            <p>
              Al descargar, instalar o utilizar la aplicación <strong>Magic TV</strong>, el usuario declara haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estas condiciones, debes abstenerte de utilizar la aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#9D4EDD] font-black">2.</span> Naturaleza del Software y Licencia GNU GPL
            </h2>
            <p className="mb-3">
              Magic TV es un port derivado del proyecto de código abierto Kodi (anteriormente XBMC). En estricto cumplimiento con la licencia <strong>GNU General Public License (GPL) v2.0 o posterior</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>El software se proporciona de manera libre y gratuita.</li>
              <li>Tienes la libertad de ejecutar el programa para cualquier propósito legítimo.</li>
              <li>Tienes la libertad de estudiar el funcionamiento del programa y adaptarlo a tus necesidades técnicas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#9D4EDD] font-black">3.</span> Uso Adecuado y Responsabilidad del Usuario
            </h2>
            <p className="mb-3">
              Como usuario de Magic TV, reconoces y aceptas de forma expresa que:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Contenido Propio:</strong> Eres el único responsable del origen, legalidad y licencias de los archivos multimedia (videos, audios, fotos) o transmisiones en vivo (listas M3U, servidores PVR, etc.) que decidas reproducir mediante la aplicación.</li>
              <li><strong>Add-ons de Terceros:</strong> Cualquier complemento, repositorio o script adicional instalado por el usuario proviene de autores externos independientes. Magic TV no garantiza la estabilidad, legalidad ni continuidad de servicios de terceros.</li>
              <li><strong>Uso no comercial:</strong> La aplicación no puede ser vendida ni revendida en paquetes de hardware precargados con contenido ilícito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#9D4EDD] font-black">4.</span> Exclusión de Garantías (Sin Garantía)
            </h2>
            <p>
              De conformidad con las cláusulas de la licencia GNU GPL, Magic TV se distribuye <em>"TAL CUAL"</em> (AS IS), sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo, entre otras, garantías de comerciabilidad, idoneidad para un fin específico o ausencia de errores en la reproducción en ciertos modelos de hardware Android.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#9D4EDD] font-black">5.</span> Modificaciones a estos Términos
            </h2>
            <p>
              Nos reservamos el derecho de actualizar estos términos en caso de que surjan nuevas versiones de la aplicación o requerimientos normativos aplicables. Se publicará la fecha de última actualización en el encabezado de este documento.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
};
