import { createContext, useContext, useMemo, useState } from 'react';

import { ContextProps, ProviderProps } from './types';

import { User } from '@/api/auth/types';

const UserContext = createContext<ContextProps>(undefined);

export const UserProvider = ({ children, initialUser }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used within a UserProvider');

  return context;
};
