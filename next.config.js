/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['us', 'gb', 'fr', 'de', 'ru', 'ar'],
    defaultLocale: 'us',
  },
}

module.exports = nextConfig
