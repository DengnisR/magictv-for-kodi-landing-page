import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, Shield, CheckCircle2, Lock, EyeOff, Server, HardDrive, Copy, Check, Printer } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (route: RoutePath) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = document.getElementById('privacy-policy-body')?.innerText || '';
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
          id="back-home-privacy-btn"
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

      {/* Main Document Box - Clean Minimalism */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Glow Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]" />

        {/* Header */}
        <div className="border-b border-slate-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-blue-100">
            <Shield className="w-3.5 h-3.5" />
            <span>Documento Legal Oficial</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Políticas de Privacidad de Magic TV
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
            <span><strong>Última actualización:</strong> 18 de Agosto de 2026</span>
            <span>•</span>
            <span><strong>Versión del documento:</strong> 1.0 (Borrador Estructurado)</span>
            <span>•</span>
            <span><strong>Aplicación:</strong> Magic TV para Android (Port de Kodi)</span>
          </div>

          {/* Notice box */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-600 text-xs leading-relaxed">
            <strong className="text-blue-900 font-bold block mb-1">Nota para el administrador:</strong>
            Esta plantilla incluye las cláusulas de privacidad estándar para un reproductor multimedia de código abierto derivado de Kodi. Puedes reemplazar o agregar tus cláusulas personalizadas en cualquier momento.
          </div>
        </div>

        {/* Body Content */}
        <div id="privacy-policy-body" className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#00D2FF] font-black">1.</span> Compromiso con la Privacidad del Usuario
            </h2>
            <p>
              En <strong>Magic TV</strong>, la privacidad de nuestros usuarios es un principio fundamental de diseño. Dado que Magic TV es una aplicación basada en el código abierto de Kodi (distribuida bajo la Licencia Pública General de GNU v2+), está diseñada para operar como una herramienta cliente completamente autónoma y neutral en el dispositivo del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#00D2FF] font-black">2.</span> Datos que NO recopilamos
            </h2>
            <p className="mb-3">
              Magic TV no incluye telemetría oculta, rastreadores publicitarios ni servidores centrales de recopilación. En particular:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Sin cuentas ni registros obligatorios:</strong> No solicitamos nombres, correos electrónicos, contraseñas ni números telefónicos.</li>
              <li><strong>Sin historial de reproducción en la nube:</strong> La lista de películas, series, canales o música reproducida se almacena de forma estrictamente local en la base de datos SQLite de tu dispositivo Android.</li>
              <li><strong>Sin acceso a geolocalización precisa:</strong> Magic TV no rastrea las coordenadas GPS de tu televisor o smartphone.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#00D2FF] font-black">3.</span> Permisos requeridos en Android
            </h2>
            <p className="mb-3">Para garantizar el correcto funcionamiento del centro multimedia, Magic TV solicita los siguientes permisos en el sistema operativo Android:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-[#00D2FF]" />
                  Almacenamiento (READ / WRITE)
                </div>
                <p className="text-xs text-slate-500">Permite indexar y reproducir archivos locales (videos, subtítulos, carátulas y música) ubicados en la memoria interna o unidades USB.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#9D4EDD]" />
                  Acceso a Red (INTERNET / ACCESS_NETWORK_STATE)
                </div>
                <p className="text-xs text-slate-500">Necesario para descargar complementos desde repositorios, sincronizar con servidores locales NAS (SMB, NFS, DLNA) y reproducir transmisiones de video solicitadas por el usuario.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#00D2FF] font-black">4.</span> Complementos y Servicios de Terceros (Add-ons)
            </h2>
            <p>
              Magic TV permite al usuario instalar complementos (Add-ons) desarrollados por terceros para Kodi. Dichos complementos se comunican directamente con los servicios externos que el usuario elija configurar (por ejemplo, YouTube, servicios de subtítulos, o servidores multimedia propios). Magic TV no intermedia, audita ni almacena el tráfico generado entre el complemento y sus respectivos proveedores externos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#00D2FF] font-black">5.</span> Contacto para Asuntos de Privacidad
            </h2>
            <p>
              Si tienes preguntas, sugerencias o inquietudes acerca de esta política de privacidad, puedes contactar al equipo de mantenimiento de Magic TV a través del repositorio oficial de la aplicación o al correo de soporte designado.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
};
