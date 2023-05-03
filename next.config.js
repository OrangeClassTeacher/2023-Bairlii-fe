/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    TOKEN_KEY: process.env.TOKEN_KEY,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
};

module.exports = nextConfig;
