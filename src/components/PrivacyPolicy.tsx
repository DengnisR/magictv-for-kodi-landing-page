import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, Shield, HardDrive, Server, ExternalLink, Copy, Check, Printer, Mail, Lock, CheckCircle2 } from 'lucide-react';

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
      
      {/* Navigation Header */}
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

      {/* Main Document Container */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Neon Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]" />

        {/* Header section */}
        <div className="border-b border-slate-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-blue-100">
            <Shield className="w-3.5 h-3.5" />
            <span>Official Privacy Document</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
            <span><strong>Application:</strong> Magic TV for Kodi</span>
            <span>•</span>
            <span><strong>Service Provider:</strong> DengnisR</span>
            <span>•</span>
            <span><strong>Effective Date:</strong> 2026-08-18</span>
          </div>
        </div>

        {/* Body content */}
        <div id="privacy-policy-body" className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          
          <section>
            <p className="text-base text-slate-700 leading-relaxed">
              This privacy policy applies to the <strong>Magic TV for Kodi</strong> application for mobile devices (collectively, the "Application"), developed and operated as a non-commercial, non-profit project by <strong>DengnisR</strong> (referred to as the "Service Provider").
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Nature of the Application &amp; Open Source Disclaimer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The Application is an independent, non-official port and derivative work based on the open-source code of <strong>Kodi®</strong> (licensed under GNU General Public License v2). <strong>Kodi®</strong> is a registered trademark of the <strong>XBMC Foundation</strong>. This Application is not affiliated with, maintained, authorized, endorsed, or sponsored by the XBMC Foundation or the official Kodi development team.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Information Collection and Use
            </h2>
            <p className="mb-4">
              The Application is designed to function primarily as a local media player. The Service Provider <strong>does not directly collect, store, or transmit any personally identifiable information (PII)</strong> to external servers.
            </p>
            <p className="mb-3 font-semibold text-slate-700">
              To provide core media playback capabilities, the Application requires specific local device permissions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-[#00D2FF]" />
                  Storage Access
                </div>
                <p className="text-xs text-slate-600">Used exclusively to read, index, and play local media files and user-installed add-ons selected on your device.</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/80">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#9D4EDD]" />
                  Network/Internet Access
                </div>
                <p className="text-xs text-slate-600">Used exclusively to stream online media content manually provided or configured by the user.</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Automated technical data (such as IP address, operating system version, or crash logs) may only be processed locally or via essential third-party framework services to ensure system stability and performance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Cookies and Tracking Technologies
            </h2>
            <p>
              The Application itself does not use cookies or tracking pixels. However, underlying core engine modules or essential system SDKs may use local temporary caching mechanisms required for media playback or network stream buffering.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Your Rights &amp; CCPA/CPRA Rights
            </h2>
            <p>
              Because the Service Provider does not collect, store, or sell your personal data on external servers, no personal data is retained to be accessed, modified, or sold. If you have any privacy questions or wish to exercise statutory data protection rights, you may contact the Service Provider at{' '}
              <a href="mailto:dengnis97@gmail.com" className="text-[#9D4EDD] font-semibold hover:underline">
                dengnis97@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Third Party Access and Services
            </h2>
            <p className="mb-3">
              The Application utilizes essential third-party service infrastructure (such as Google Play Services) to support core operating system functionality. These services operate under their own independent privacy policies:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00D2FF] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Play Services Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Data Disclosure and Legal Compliance
            </h2>
            <p>
              The Service Provider does not monetize or trade user data. Disclosure of operational logs would only occur if explicitly required by applicable law, such as to comply with a valid court order or official legal subpoena.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Children's Privacy
            </h2>
            <p>
              The Application is a general-purpose media player and does not knowingly collect or target information from children under 16 years of age.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Security
            </h2>
            <p>
              Since media files processed by the Application reside locally on your device or are requested directly from streams configured by you, security depends primarily on maintaining the security of your own mobile device.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              The Service Provider may update this Privacy Policy periodically. You are advised to review this page regularly for any changes. Changes are effective immediately upon posting on this page.
            </p>
            <p className="mt-2 font-semibold text-slate-700">
              This privacy policy is effective as of <strong>2026-08-18</strong>.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Contact Us
            </h2>
            <p className="mb-2">
              If you have any questions or concerns regarding privacy while using the Application, please contact the Service Provider via email at:
            </p>
            <a
              href="mailto:dengnis97@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 text-[#9D4EDD] font-bold text-sm hover:bg-purple-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>dengnis97@gmail.com</span>
            </a>
          </section>

        </div>

      </div>

    </div>
  );
};
