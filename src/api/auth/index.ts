import { customFetch, setTokens } from '@/utils';

import type {
  CredentialsProps,
  LoginResponseProps,
  MessageProps,
  RefreshResponseProps,
  ServerProps,
  SignUpProps,
  User,
} from './types';

export const signUp = async (props: SignUpProps) => {
  const response = await customFetch<MessageProps>('signup', { method: 'POST', json: props });
  return response.message ?? '';
};

export const login = async ({ email, password }: CredentialsProps) => {
  const response = await customFetch<LoginResponseProps>('login', { method: 'POST', json: { email, password } });

  if (response.message) return response.message;

  const { accessToken, refreshToken } = response;
  setTokens({ accessToken, refreshToken });

  return '';
};

export const refreshAccessToken = async ({ req, res }: ServerProps) => {
  const response = await customFetch<RefreshResponseProps>('refresh', { req, res });

  if (response?.user) {
    const { accessToken, refreshToken } = response;
    setTokens({ res, accessToken, refreshToken });
  }

  return response;
};

export const logout = async () => await customFetch('logout', { method: 'POST' });

export const check = async ({ req, res }: ServerProps) => {
  const response = await customFetch<{ user: User }>('check', { method: 'GET', req, res });
  return response.user;
};

export const activate = async (token: string) => await customFetch(`activate/${token}`, { method: 'GET' });
