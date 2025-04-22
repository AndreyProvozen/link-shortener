import { PropsWithChildren } from 'react';

import { User } from '@/api/auth/types';

type UserOrNull = User | null;

export type ProviderProps = PropsWithChildren<{ initialUser: UserOrNull }>;
export type ContextProps = { user: UserOrNull; setUser: (user: UserOrNull) => void } | undefined;
