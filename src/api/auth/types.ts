export type CredentialsProps = { email: string; password: string };

export type MessageProps = { message?: string };

export interface LoginResponseProps extends MessageProps {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  isActivated: string;
}

export interface RefreshResponseProps {
  accessToken: string;
  refreshToken: string;
  user: User;
}
