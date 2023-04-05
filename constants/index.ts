type NavItem = {
  title: string;
  href: string;
};

export const API_URL = 'https://newsapi.org/v2';
export const API_KEY = 'ffeee91983414084972e71cab438496e';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Top News',
    href: '/',
  },
  {
    title: 'Categories',
    href: '/categories',
  },
  {
    title: 'Search',
    href: '/search',
  },
];

export const CATEGORIES = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export const DEFAULT_LOCALE = 'en';

export const LOCALE_NAMES = {
  en: 'English',
  gb: 'English (UK)',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
  ja: '日本語',
  ar: 'العربية',
};
