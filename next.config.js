/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
    ...nextTranslate(),
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig
