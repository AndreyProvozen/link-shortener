import { customFetch } from '@/utils';

interface CredentialsProps {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: CredentialsProps) => {
  const response = await customFetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return response;
};

export const login = async ({ email, password }: CredentialsProps) => {
  const response = await customFetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return response;
};

export const logout = async () => {
  const response = await customFetch('/logout', { method: 'POST' });
  return response;
};

export const refresh = async () => {
  const response = await customFetch('/refresh', { method: 'POST' });
  return response;
};

export const activate = async (token: string) => {
  const response = await customFetch(`/activate/${token}`, { method: 'GET' });
  return response;
};
