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
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: { API_URL: process.env.API_URL },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1280, 1536],
  },
  eslint: { ignoreDuringBuilds: true },
};

// @ts-expect-error TODO: fix error
export default PWAProvider(analyzerProvider(nextConfig));
