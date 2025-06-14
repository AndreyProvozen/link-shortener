import type { User } from '@/types';

export type CredentialsProps = { email: string; password: string };
export type MessageProps = { message?: string };

export interface SignUpProps extends CredentialsProps {
  username: string;
}

export interface LoginResponseProps extends MessageProps {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponseProps {
  accessToken: string;
  refreshToken: string;
  user: User;
}
