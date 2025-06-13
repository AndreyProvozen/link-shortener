import type { KyRequest } from 'ky-universal';

const beforeRequest = (accessToken: string | null, headers: Record<string, any> = {}) => [
  (request: KyRequest) => {
    request.headers.set('Authorization', `Bearer ${accessToken}`);

    Object.entries(headers).forEach(([key, value]) => {
      if (value) request.headers.set(key, String(value));
    });
  },
];

export default beforeRequest;
