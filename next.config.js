/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
// next.config.js

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig
