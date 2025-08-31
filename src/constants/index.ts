export const enum SCREEN_SIZES {
  DESKTOP_BELOW = '(max-width: 1200px)',
  DESKTOP_SMALL_BELOW = '(max-width: 1023px)',
  TABLET_BELOW = '(max-width: 767px)',
  TABLET_SMALL_BELOW = '(max-width: 640px)',
  MOBILE_BELOW = '(max-width: 500px)',
  MOBILE_SMALL_BELOW = '(max-width: 400px)',
}

export const enum BACKGROUND_VARIANTS {
  WAVE = 'wave',
  BLOB = 'blob',
  CIRCLE_SCATTER = 'circle-scatter',
}

export const enum NOT_FOUND_VARIANTS {
  DEFAULT = 'default',
  SEARCH = 'search',
  FAVORITE = 'favorite',
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const URL_REGEX = /^(ftp|http|https):\/\/[^ "]+$/;

export const MOCK_API_URL = 'http://localhost:3000/api';

export const ACCESS_TOKEN_KEY = 'LS_ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'LS_REFRESH_TOKEN';

export const FAVORITE_LIST_KEY = 'FAVORITE_LIST';

export const LINKS_LIST_PER_PAGE = 10;
export const HOME_PAGE_LINKS_PER_PAGE = 3;

export const COOKIE_DAYS = 7;
export const MAX_AGE = 60 * 60 * 24 * COOKIE_DAYS;
