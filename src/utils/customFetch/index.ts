import { IncomingMessage, ServerResponse } from 'http';

import ky from 'ky-universal';

import getConfigVariable from '../getConfigVariable';
import { getTokens } from '../tokenUtils';

import afterResponse from './afterResponse';
import beforeRequest from './beforeRequest';

const API_URL = getConfigVariable('API_URL');

interface OptionProps {
  method?: RequestInit['method'];
  headers?: HeadersInit;
  body?: BodyInit;
  json?: unknown;
  req?: IncomingMessage;
  res?: ServerResponse;
}

const customFetch = async <T = unknown>(url: string, options: OptionProps = {}): Promise<T> => {
  const { req, res, method = 'GET', headers, body, json } = options;

  const { accessToken, refreshToken } = getTokens(req);
  const cookieHeader = req?.headers?.cookie ? { cookie: req.headers.cookie } : {};

  const instance = ky.create({
    prefixUrl: API_URL,
    hooks: {
      beforeRequest: beforeRequest(accessToken, { ...cookieHeader, ...headers }),
      afterResponse: afterResponse(refreshToken, res),
    },
    credentials: 'include',
    throwHttpErrors: false,
  });

  try {
    const response = await instance(url, { method, body, json });

    return await response.json();
  } catch (error: any) {
    return error?.message ?? 'Fetch error';
  }
};

export default customFetch;
