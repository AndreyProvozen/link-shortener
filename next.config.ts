import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
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
};

// TODO: fix error
// @ts-ignore
export default PWAProvider(analyzerProvider(nextConfig));
