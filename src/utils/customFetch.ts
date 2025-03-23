import { refreshAccessToken } from '@/api';

import getConfigVariable from './getConfigVariable';
import { getTokens, clearTokens } from './tokenUtils';

const API_URL = getConfigVariable('API_URL');

interface OptionProps {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

const customFetch = async <T = any>(url: string, { method = 'GET', headers, body }: OptionProps = {}): Promise<T> => {
  try {
    // eslint-disable-next-line prefer-const
    let { accessToken, refreshToken } = getTokens();

    const headersWithAuth = { Authorization: `Bearer ${accessToken}`, ...headers };
    let response = await fetch(`${API_URL}/${url}`, { method, headers: headersWithAuth, body });

    if (response.status === 401 && refreshToken) {
      const isRefreshed = await refreshAccessToken();

      if (isRefreshed) {
        accessToken = getTokens().accessToken;
        headersWithAuth.Authorization = `Bearer ${accessToken}`;
        response = await fetch(`${API_URL}/${url}`, { method, headers: headersWithAuth, body });
      } else {
        clearTokens();
        throw new Error('Session expired. Please log in again.');
      }
    }

    return await response.json();
  } catch (error: any) {
    return error.message || 'Fetch error';
  }
};

export default customFetch;
