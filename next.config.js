/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cataas.com", "placekitten.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
