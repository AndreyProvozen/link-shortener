import { customFetch, setTokens } from '@/utils';

interface CredentialsProps {
  email: string;
  password: string;
}

interface RefreshResponseProps {
  accessToken: string;
  refreshToken: string;
  user: { id: string; email: string; isActivated: boolean };
}

export const signUp = async ({ email, password }: CredentialsProps) => {
  const response = await customFetch('signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return response;
};

export const login = async ({ email, password }: CredentialsProps) => {
  const { accessToken, refreshToken, message } = await customFetch('login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (message) {
    return message;
  }

  setTokens({ accessToken, refreshToken });
  return '';
};

export const logout = async () => {
  const response = await customFetch('logout', { method: 'POST' });
  return response;
};

export const refreshAccessToken = async () => {
  const response = await customFetch<RefreshResponseProps>('refresh', { method: 'POST' });
  return response;
};

export const activate = async (token: string) => {
  const response = await customFetch(`activate/${token}`, { method: 'GET' });
  return response;
};
