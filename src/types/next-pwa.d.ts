declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  function withPWA(config: NextConfig): NextConfig;

  export default withPWA;
}
