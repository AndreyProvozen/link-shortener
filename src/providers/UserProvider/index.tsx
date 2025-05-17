import { createContext, useContext, useMemo, useState } from 'react';

import { User } from '@/api/auth/types';

import { ContextProps, ProviderProps } from './types';

const UserContext = createContext<ContextProps>(undefined);

export const UserProvider = ({ children, initialUser }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) return { user: null };

  return context;
};
