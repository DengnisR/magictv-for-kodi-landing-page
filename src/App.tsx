import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InstallationGuide } from './components/InstallationGuide';
import { CompatibilitySection } from './components/CompatibilitySection';
import { FaqSection } from './components/FaqSection';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Footer } from './components/Footer';
import { Download, Tv, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('home');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Sync with Browser Hash for direct URLs (#privacy, #terms, etc.)
  useEffect(() => {
    const handleHashChange = () => {
      // Check if arriving from a 404.html redirect
      if (sessionStorage.redirect) {
        const redirectUrl = sessionStorage.redirect;
        delete sessionStorage.redirect;
        try {
          const url = new URL(redirectUrl);
          const pathSegment = url.pathname.split('/').filter(Boolean).pop() as RoutePath;
          if (['privacy', 'terms', 'features', 'guide', 'compatibility', 'faq'].includes(pathSegment)) {
            setCurrentRoute(pathSegment);
            window.location.hash = pathSegment;
            return;
          }
        } catch {
          // ignore parsing error
        }
      }

      const hash = window.location.hash.replace('#', '') as RoutePath;
      if (['privacy', 'terms', 'features', 'guide', 'compatibility', 'faq'].includes(hash)) {
        setCurrentRoute(hash);
        if (hash !== 'privacy' && hash !== 'terms') {
          // Scroll to the specific section on the home landing view
          const el = document.getElementById(hash);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: RoutePath) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;

    if (route === 'privacy' || route === 'terms') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(route);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500/20 selection:text-purple-700">
      
      {/* Top Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentRoute === 'privacy' ? (
          <PrivacyPolicy onNavigate={navigateTo} />
        ) : currentRoute === 'terms' ? (
          <TermsAndConditions onNavigate={navigateTo} />
        ) : (
          /* Landing Page View */
          <div>
            <Hero
              onOpenDownload={() => setIsDownloadModalOpen(true)}
              onNavigateToGuide={() => navigateTo('guide')}
              onNavigateToFeatures={() => navigateTo('features')}
            />

            <Features />

            <InstallationGuide
              onOpenDownload={() => setIsDownloadModalOpen(true)}
            />

            <CompatibilitySection />

            <FaqSection />

            {/* Bottom Call to Action Pre-Footer Banner - Clean Minimalism */}
            <section className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
              <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-slate-900 p-8 sm:p-14 text-white shadow-2xl border border-slate-800">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D2FF]/10 blur-[90px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9D4EDD]/15 blur-[90px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#00D2FF]/20">
                      <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                      Disponible para Android & Fire TV
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
                      Lleva el mejor reproductor a tu televisor hoy
                    </h2>
                    <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                      Descarga Magic TV gratis en menos de un minuto. Compatible con Android TV, Fire TV Stick, TV Boxes y smartphones.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                    <button
                      id="footer-cta-download"
                      onClick={() => setIsDownloadModalOpen(true)}
                      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD] text-white font-bold text-base shadow-[0_10px_20px_-5px_rgba(157,78,221,0.4)] hover:shadow-none active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <Download className="w-5 h-5" />
                      <span>Descargar Magic TV APK</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Download APK Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        onNavigateToGuide={() => {
          navigateTo('guide');
        }}
      />

    </div>
  );
}
