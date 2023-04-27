/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
  },
};

module.exports = nextConfig;
