/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    topLevelAwait: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.logojoy.com/**',
      },
    ],
  },
};

module.exports = nextConfig;
