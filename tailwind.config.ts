import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/atoms/**/*.{ts,tsx}',
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
        300: '#b1b5bd',
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
      green: {
        500: '#05c148',
      },
      orange: {
        500: '#F0AD4E',
      },
      red: {
        500: '#e60000',
        700: '#c1002a',
      },
    },
    extend: {
      animation: { float: 'float 4s ease-in-out infinite' },
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
