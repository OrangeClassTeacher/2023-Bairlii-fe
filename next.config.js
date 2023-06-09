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
            "images.unsplash.com",
            "files.realpython.com",
            "tecdn.b-cdn.net",
            "https://picsum.photos/536/354",
            "i.postimg.cc",
        ],
    },
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
        TOKEN_KEY: process.env.TOKEN_KEY,
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
};

module.exports = nextConfig;
