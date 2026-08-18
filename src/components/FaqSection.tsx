import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'general',
      question: '¿Qué es Magic TV y en qué se diferencia del Kodi oficial?',
      answer:
        'Magic TV es una versión adaptada (port) basada en el código abierto de Kodi v21.2 Omega. Ha sido optimizada especialmente para sistemas Android y Fire OS reduciendo el consumo de memoria RAM, optimizando los skins para mandos a distancia y pantallas táctiles, y acelerando el tiempo de arranque sin alterar la compatibilidad con el motor oficial de Add-ons de Kodi.',
    },
    {
      id: 'faq-2',
      category: 'legal',
      question: '¿Es legal utilizar Magic TV?',
      answer:
        'Sí, totalmente. Magic TV es un reproductor de medios neutral y de código abierto distribuido bajo la licencia GPL v2+. No incluye ni aloja contenido multimedia con derechos de autor por defecto. El usuario es responsable de los medios propios que reproduce o de los complementos de terceros que decide instalar.',
    },
    {
      id: 'faq-3',
      category: 'kodi',
      question: '¿Puedo instalar cualquier Add-on o Repositorio de Kodi en Magic TV?',
      answer:
        'Sí. Magic TV cuenta con compatibilidad del 100% con los complementos desarrollados para Kodi 21 Omega (Python 3.12). Puedes instalar add-ons desde archivos ZIP, repositorios remotos HTTP/HTTPS, o utilizar el repositorio oficial de Kodi integrado.',
    },
    {
      id: 'faq-4',
      category: 'install',
      question: '¿Cómo actualizo Magic TV a versiones futuras?',
      answer:
        'Puedes descargar el nuevo archivo APK e instalarlo directamente sobre la versión existente en tu dispositivo Android. Toda tu configuración, favoritos y add-ons se conservarán intactos sin necesidad de borrar datos.',
    },
    {
      id: 'faq-5',
      category: 'general',
      question: '¿Requiere registrar una cuenta o pagar suscripción?',
      answer:
        'No. Magic TV es 100% gratuito, libre de suscripciones y no requiere registro de correos ni datos personales para funcionar.',
    },
    {
      id: 'faq-6',
      category: 'kodi',
      question: '¿Admite sonido multicanal envolvente (Dolby Atmos, DTS, 5.1 / 7.1)?',
      answer:
        'Sí. En los ajustes de audio de Magic TV puedes habilitar la opción de "Audio Passthrough" (Paso directo de audio) para que tu barra de sonido o receptor AV decodifique directamente Dolby Digital Plus, Dolby TrueHD, Atmos y DTS-HD Master Audio.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
            Dudas Comunes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-slate-500 text-base font-normal max-w-md mx-auto">
            Todo lo que necesitas saber antes de instalar y usar Magic TV en tu televisor o smartphone.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[24px] border transition-all duration-200 bg-white overflow-hidden ${
                  isOpen
                    ? 'border-[#9D4EDD]/30 shadow-md ring-1 ring-purple-100'
                    : 'border-slate-100 shadow-sm hover:border-slate-200'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-purple-50 text-[#9D4EDD] rotate-180'
                        : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-500 leading-relaxed border-t border-slate-50 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legal notice */}
        <div className="mt-12 p-5 rounded-[24px] bg-white border border-slate-100 flex items-start gap-4 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#00D2FF] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-500 leading-relaxed font-normal">
            <strong className="text-slate-800 font-bold block mb-1">Aclaración de Marca y Licencia:</strong>
            Kodi® es una marca registrada de la Fundación XBMC. Magic TV es un port independiente y no está patrocinado ni afiliado oficialmente con la Fundación XBMC.
          </div>
        </div>

      </div>
    </section>
  );
};
