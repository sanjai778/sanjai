// file: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for the Next.js Image component
  images: {
    // Whitelist external domains for image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onfra.io',
        port: '',
        pathname: '/wp-content/uploads/**', // Optional: adds security by restricting paths
      },
    ],
  },
};

// Use ES Module syntax to export the configuration
export default nextConfig;