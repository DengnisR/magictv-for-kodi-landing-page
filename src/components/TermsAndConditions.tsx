import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, FileText, ExternalLink, Copy, Check, Printer, Mail, AlertTriangle, Scale } from 'lucide-react';

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
      
      {/* Navigation Header */}
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

      {/* Main Document Container */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Neon Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9D4EDD] to-[#00D2FF]" />

        {/* Header section */}
        <div className="border-b border-slate-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-[#9D4EDD] text-xs font-extrabold uppercase tracking-widest mb-4 border border-purple-100">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms &amp; Conditions
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
        <div id="terms-conditions-body" className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          
          <section>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              These terms and conditions apply to the <strong>Magic TV for Kodi</strong> mobile application (collectively, the "Application"), operated as a non-commercial project by <strong>DengnisR</strong> (referred to as the "Service Provider").
            </p>
            <p className="font-semibold text-slate-900">
              By downloading, installing, or using the Application, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Open Source License &amp; Derivative Work Notice
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The Application is an independent port based on the open-source code of <strong>Kodi®</strong>, distributed under the <strong>GNU General Public License v2 (GPLv2)</strong>. You are granted rights to use, inspect, and redistribute this software in compliance with the terms of the GPLv2 license.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Trademark Disclaimer
            </h2>
            <p>
              <strong>Kodi®</strong> is a registered trademark of the <strong>XBMC Foundation</strong>. The Service Provider and this Application are entirely independent and are <strong>not affiliated with, authorized, sponsored, or endorsed by the XBMC Foundation</strong> or the official Kodi project. All trademarks, brand names, and logos belong to their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Acceptable Use &amp; User-Provided Content
            </h2>
            <p className="mb-3">
              The Application is provided strictly as a neutral media playing interface. The Service Provider <strong>does not provide, host, bundle, or distribute any media content, channels, playlists, or add-ons</strong>.
            </p>
            <p className="mb-2 font-medium text-slate-700">
              You agree that you are solely responsible for all content, streams, and media played through the Application. You agree not to use the Application to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-600">
              <li>Stream, view, or distribute copyrighted content without authorization from the copyright holder.</li>
              <li>Access illegal or unauthorized media streams in your jurisdiction.</li>
              <li>Engage in activities that violate local or international intellectual property laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Intellectual Property Rights
            </h2>
            <p>
              All core engine source components originating from Kodi remain licensed under GPLv2. Custom branding, specific interface configurations, and original non-GPL assets created by DengnisR remain protected by applicable copyright law, subject to GPLv2 compliance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Device Security &amp; Network Usage
            </h2>
            <p className="mb-2">
              The Application requires internet connectivity to stream user-selected media. You are responsible for any data charges or roaming fees incurred with your mobile network provider while using the Application.
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              Modifying your device's operating system (jailbreaking or rooting) may compromise device security and lead to unexpected software behavior.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Third-Party Services
            </h2>
            <p className="mb-3">
              The Application relies on Google Play Services infrastructure for system-level operational features:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
              <li>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9D4EDD] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Play Services Terms of Service</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </section>

          <section className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <h2 className="text-lg font-bold text-amber-950 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Limitation of Liability &amp; Disclaimer of Warranty
            </h2>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-mono uppercase tracking-tight">
              THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE PROVIDER SHALL NOT BE HELD LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF DATA, DEVICE DAMAGE, OR LEGAL ISSUES ARISING FROM USER-PROVIDED CONTENT OR UNFAIR USE OF STREAMING SOURCES.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Termination &amp; Updates
            </h2>
            <p>
              The Service Provider reserves the right to modify, update, or discontinue the Application (or any part thereof) at any time without prior notice. You may terminate these Terms at any time simply by uninstalling the Application from your device.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms and Conditions are governed by applicable local laws, excluding conflict of law principles. Any legal disputes shall be brought before the competent courts of the Service Provider's jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              DSA Compliance Notice (Digital Services Act)
            </h2>
            <p>
              As a neutral, user-controlled media client that does not host, index, or distribute public third-party content on central servers, inquiries regarding moderation of user-loaded local content should be directed to the user or content host directly. Official communications can be submitted to{' '}
              <a href="mailto:dengnis97@gmail.com" className="text-[#9D4EDD] font-semibold hover:underline">
                dengnis97@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Changes to These Terms and Conditions
            </h2>
            <p>
              The Service Provider may update these Terms periodically. You are advised to review this page regularly. Changes take effect upon publication.
            </p>
            <p className="mt-2 font-semibold text-slate-700">
              These terms and conditions are effective as of <strong>2026-08-18</strong>.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Contact Us
            </h2>
            <p className="mb-2">
              For questions or suggestions regarding these Terms and Conditions, please contact:
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
