import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['pdfjs-dist'],
  webpack: (config) => {
    // pdfjs-dist optionally requires Node.js 'canvas' for server-side rendering.
    // In the browser this is not needed, so we mark it as external to skip resolution.
    config.externals = [...(config.externals || []), { canvas: 'commonjs canvas' }];
    return config;
  },
};

export default nextConfig;
