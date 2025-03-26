import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/atoms/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    './src/containers/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      container: '1200px',
      desktop: { max: '1200px' },
      'desktop-small': { max: '1023px' },
      tablet: { max: '767px' },
      'tablet-small': { max: '640px' },
      mobile: { max: '500px' },
      'mobile-small': { max: '400px' },
    },
    colors: {
      white: {
        50: '#fff',
        100: '#dde1e7',
        200: '#c6c9cf',
        300: '#b1b5bd',
        400: '#9ba0a9',
        500: '#868c95',
      },
      black: {
        500: '#2e2e2e',
        900: '#020205',
      },
      pink: {
        300: '#FC88ED',
        500: '#FA3DE2',
        700: '#A43F99',
      },
      purple: {
        300: '#9333EA',
        500: '#6B21A8',
        700: '#4C1D95',
        900: '#2E1065',
      },
      green: {
        500: '#05c148',
      },
      orange: {
        500: '#F0AD4E',
      },
      red: {
        50: '#ffe5e5',
        100: '#ffb3b3',
        200: '#ff8080',
        300: '#ff4d4d',
        400: '#ff1a1a',
        500: '#e60000',
        600: '#cc0000',
        700: '#c1002a',
      },
    },
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};

export default config;
