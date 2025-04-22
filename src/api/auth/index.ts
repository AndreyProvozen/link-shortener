import { customFetch, setTokens } from '@/utils';

import { CredentialsProps, LoginResponseProps, MessageProps, RefreshResponseProps } from './types';

export const signUp = async ({ email, password }: CredentialsProps) => {
  const response = await customFetch<MessageProps>('signup', { method: 'POST', json: { email, password } });
  return response.message ?? '';
};

export const login = async ({ email, password }: CredentialsProps) => {
  const response = await customFetch<LoginResponseProps>('login', { method: 'POST', json: { email, password } });

  if (response.message) return response.message;

  const { accessToken, refreshToken } = response;
  setTokens({ accessToken, refreshToken });

  return '';
};

export const refreshAccessToken = async ({ req, res }: any) => {
  const response = await customFetch<RefreshResponseProps>('refresh', { req, res });

  if (response?.user) {
    const { accessToken, refreshToken } = response;
    setTokens({ res, accessToken, refreshToken });
  }

  return response;
};

export const logout = async () => await customFetch('logout', { method: 'POST' });

export const activate = async (token: string) => await customFetch(`activate/${token}`, { method: 'GET' });
