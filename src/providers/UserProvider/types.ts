import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import type { User } from '@/api/auth/types';

type UserOrNull = User | null;

export type ProviderProps = PropsWithChildren<{ initialUser: UserOrNull }>;
export type ContextProps =
  | {
      isSignOutModalOpen: boolean;
      setIsSignOutModalOpen: Dispatch<SetStateAction<boolean>>;
      user: UserOrNull;
      setUser: (user: UserOrNull) => void;
      onLogout: () => void;
    }
  | undefined;
