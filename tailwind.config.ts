import { Config } from 'tailwindcss';

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
      desktop: '1200px',
      'desktop-small': '1023px',
      tablet: '767px',
      'tablet-small': '640px',
      mobile: '500px',
      'mobile-small': '400px',
      'max-desktop': {
        max: '1200px',
      },
      'max-desktop-small': {
        max: '1023px',
      },
      'max-tablet': {
        max: '767px',
      },
      'max-tablet-small': {
        max: '640px',
      },
      'max-mobile': {
        max: '500px',
      },
      'max-mobile-small': {
        max: '400px',
      },
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
        700: '#c1002a',
      },
    },
  },
};

export default config;
