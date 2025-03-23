import { IncomingMessage, ServerResponse } from 'http';

import { serialize, parse } from 'cookie';
import Cookies from 'js-cookie';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants';

const COOKIE_DAYS = 7;
const MAX_AGE = 60 * 60 * 24 * COOKIE_DAYS;

interface SetTokensProps {
  res?: ServerResponse | null;
  accessToken: string;
  refreshToken: string;
}

export const setTokens = ({ res, accessToken, refreshToken }: SetTokensProps) => {
  if (res) {
    const options = { httpOnly: true, maxAge: MAX_AGE };

    const accessCookie = serialize(ACCESS_TOKEN_KEY, accessToken, options);
    const refreshCookie = serialize(REFRESH_TOKEN_KEY, refreshToken, options);

    return res.setHeader('Set-Cookie', [accessCookie, refreshCookie]);
  }

  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { expires: COOKIE_DAYS });
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { expires: COOKIE_DAYS });
};

export const getTokens = (req?: IncomingMessage) => {
  if (req) {
    const cookies = parse(req.headers.cookie ?? '');
    return { accessToken: cookies[ACCESS_TOKEN_KEY] ?? null, refreshToken: cookies[REFRESH_TOKEN_KEY] ?? null };
  }

  return { accessToken: Cookies.get(ACCESS_TOKEN_KEY) ?? null, refreshToken: Cookies.get(REFRESH_TOKEN_KEY) ?? null };
};

export const clearTokens = (res?: ServerResponse | null) => {
  if (res) {
    const options = { httpOnly: true, maxAge: -1 };

    return res.setHeader('Set-Cookie', [
      serialize(ACCESS_TOKEN_KEY, '', options),
      serialize(REFRESH_TOKEN_KEY, '', options),
    ]);
  }

  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};
