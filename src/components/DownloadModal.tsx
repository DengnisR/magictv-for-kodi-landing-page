import React, { useState } from 'react';
import { X, Download, ShieldCheck, Check, Copy, ArrowDown } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToGuide: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onNavigateToGuide }) => {
  const [arch, setArch] = useState<'arm64' | 'armv7' | 'universal'>('arm64');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  if (!isOpen) return null;

  const directUrl = `https://github.com/magictv-app/releases/download/v21.2.0/MagicTV-v21.2.0-${arch}.apk`;

  const handleCopy = () => {
    navigator.clipboard.writeText(directUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloading(true);
    setDownloadComplete(false);

    // Simulate APK download initiation
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-[36px] p-6 sm:p-8 shadow-2xl border border-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]" />

        {/* Close button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          aria-label="Cerrar ventana de descarga"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00D2FF]/20 to-[#9D4EDD]/20 flex items-center justify-center text-[#9D4EDD] shadow-inner">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">
              Descargar Magic TV APK
            </h3>
            <p className="text-xs text-slate-400">
              Versión estable 21.2.0 Omega • Port oficial
            </p>
          </div>
        </div>

        {/* Architecture Selector */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Selecciona la arquitectura de tu dispositivo:
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setArch('arm64')}
              className={`p-3 rounded-2xl border text-center transition-all text-xs font-bold cursor-pointer ${
                arch === 'arm64'
                  ? 'border-[#9D4EDD] bg-purple-50/70 text-[#9D4EDD] shadow-sm'
                  : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100/70'
              }`}
            >
              <div className="font-extrabold text-sm mb-0.5">ARM64-v8a</div>
              <div className="text-[10px] text-slate-400 font-normal">Recomendado</div>
            </button>

            <button
              onClick={() => setArch('armv7')}
              className={`p-3 rounded-2xl border text-center transition-all text-xs font-bold cursor-pointer ${
                arch === 'armv7'
                  ? 'border-[#9D4EDD] bg-purple-50/70 text-[#9D4EDD] shadow-sm'
                  : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100/70'
              }`}
            >
              <div className="font-extrabold text-sm mb-0.5">ARMv7a</div>
              <div className="text-[10px] text-slate-400 font-normal">Fire TV 32-bit</div>
            </button>

            <button
              onClick={() => setArch('universal')}
              className={`p-3 rounded-2xl border text-center transition-all text-xs font-bold cursor-pointer ${
                arch === 'universal'
                  ? 'border-[#9D4EDD] bg-purple-50/70 text-[#9D4EDD] shadow-sm'
                  : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100/70'
              }`}
            >
              <div className="font-extrabold text-sm mb-0.5">Universal</div>
              <div className="text-[10px] text-slate-400 font-normal">Todo Android</div>
            </button>
          </div>
        </div>

        {/* Technical Specs Box */}
        <div className="p-4 rounded-[20px] bg-slate-50 border border-slate-100 space-y-2 mb-6 text-xs text-slate-600 font-normal">
          <div className="flex justify-between">
            <span className="text-slate-400">Archivo:</span>
            <span className="font-mono font-bold text-slate-800">MagicTV-v21.2.0-{arch}.apk</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Tamaño:</span>
            <span className="font-bold text-slate-800">86.4 MB</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Requisito:</span>
            <span className="font-bold text-slate-800">Android 5.0 o superior</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Base:</span>
            <span className="font-bold text-[#9D4EDD]">Kodi 21.2 Omega (GPL v2+)</span>
          </div>
          <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-mono">SHA-256: 8f2a9b...7c1d4e</span>
            <button
              onClick={handleCopy}
              className="text-[#9D4EDD] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Link'}</span>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <button
            id="modal-download-action-btn"
            onClick={handleDownload}
            disabled={downloading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white font-bold text-base shadow-[0_10px_20px_-5px_rgba(157,78,221,0.4)] hover:shadow-none hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {downloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Iniciando descarga...</span>
              </>
            ) : downloadComplete ? (
              <>
                <Check className="w-5 h-5 text-white" />
                <span>¡Descarga Iniciada!</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Descargar Magic TV APK ({arch.toUpperCase()})</span>
              </>
            )}
          </button>

          {downloadComplete && (
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs flex items-center justify-between animate-in fade-in">
              <span>El archivo se está descargando. Si requieres ayuda:</span>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToGuide();
                }}
                className="font-bold underline ml-2 hover:text-emerald-950 flex-shrink-0 cursor-pointer"
              >
                Ver guía
              </button>
            </div>
          )}

          <div className="flex items-center justify-center gap-3 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
              100% Seguro y Verificado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
