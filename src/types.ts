export type RoutePath = 'home' | 'features' | 'guide' | 'compatibility' | 'faq' | 'privacy' | 'terms';

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'kodi' | 'install' | 'legal';
}

export interface ApkRelease {
  version: string;
  buildDate: string;
  size: string;
  minAndroid: string;
  architecture: string;
  kodiBase: string;
  downloadUrl: string;
  sha256: string;
}
