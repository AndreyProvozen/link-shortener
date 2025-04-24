import { IncomingMessage, ServerResponse } from 'http';

export interface ServerProps {
  req?: IncomingMessage;
  res?: ServerResponse;
}

export type CredentialsProps = { email: string; password: string };

export type MessageProps = { message?: string };

export interface SignUpProps extends CredentialsProps {
  username: string;
}

export interface LoginResponseProps extends MessageProps {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  isActivated: string;
}

export interface RefreshResponseProps {
  accessToken: string;
  refreshToken: string;
  user: User;
}
