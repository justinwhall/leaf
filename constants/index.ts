type NavItem = {
  title: string;
  href: string;
};

export const API_URL = 'https://newsapi.org/v2';

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

export const LOCALE_NAMES: { [key: string]: string } = {
  us: 'English (US)',
  gb: 'English (UK)',
  fr: 'Français',
  de: 'Deutsch',
  ru: 'Русский',
  ar: 'العربية',
};
