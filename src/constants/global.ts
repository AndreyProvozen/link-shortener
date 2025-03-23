export enum SCREEN_SIZES {
  DESKTOP_BELOW = '(max-width: 1200px)',
  DESKTOP_SMALL_BELOW = '(max-width: 1023px)',
  TABLET_BELOW = '(max-width: 767px)',
  TABLET_SMALL_BELOW = '(max-width: 640px)',
  MOBILE_BELOW = '(max-width: 500px)',
  MOBILE_SMALL_BELOW = '(max-width: 400px)',
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ACCESS_TOKEN_KEY = 'LS_ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'LS_REFRESH_TOKEN';
