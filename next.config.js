/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'gb', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'zh', 'ja', 'ar'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
