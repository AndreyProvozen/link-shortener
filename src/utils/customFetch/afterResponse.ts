import type { ServerResponse } from 'http';

import ky, { type NormalizedOptions, type KyResponse } from 'ky-universal';

import { refreshAccessToken } from '@/api/auth';

import { getTokens, clearTokens } from '../tokenUtils';

interface ExtendedOptions extends NormalizedOptions {
  _retry?: boolean;
}

const afterResponse = (refreshToken: string | null, res?: ServerResponse) => [
  async (request: any, options: ExtendedOptions, response: KyResponse) => {
    const alreadyRetried = options._retry;

    if (response.status === 401 && refreshToken && !alreadyRetried) {
      const isRefreshed = await refreshAccessToken({ req: request, res });

      if (isRefreshed) {
        const { accessToken: newAccessToken } = getTokens();

        return ky(request, {
          ...options,
          headers: { ...options.headers, Authorization: `Bearer ${newAccessToken}` },
          _retry: true,
        } as ExtendedOptions);
      } else {
        clearTokens(res);
        throw new Error('Session expired. Please log in again.');
      }
    }

    return response;
  },
];

export default afterResponse;
