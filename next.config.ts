import path from 'path';

import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const analyzerProvider = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

const PWAProvider = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest.json$/, /dynamic-css-manifest.json$/],
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: { API_URL: process.env.API_URL },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        { key: 'X-Frame-Options', value: 'DENY' },
      ],
    },
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1280, 1536],
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
};

// @ts-expect-error TODO: fix error
export default PWAProvider(analyzerProvider(nextConfig));
