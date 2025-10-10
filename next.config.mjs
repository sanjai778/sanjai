// file: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for the Next.js Image component
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '**',
      },
    ],
  }
};

// Use ES Module syntax to export the configuration
export default nextConfig;
