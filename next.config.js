/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    // basePath: isProd ? '/_next/static' : '',
    // assetPrefix: isProd ? 'https://cdn.jsdelivr.net/npm/water.css@2/out/' : ''
};

module.exports = nextConfig;