import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { logout } from '@/api';
import type { User } from '@/api/auth/types';

import type { ContextProps, ProviderProps } from './types';

const UserContext = createContext<ContextProps>(undefined);

export const UserProvider = ({ children, initialUser }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const onLogout = useCallback(() => {
    setUser(null);
    logout();
    toast.success('Logged out successfully');
  }, []);

  const value = useMemo(
    () => ({ user, isSignOutModalOpen, setIsSignOutModalOpen, setUser, onLogout }),
    [isSignOutModalOpen, onLogout, user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context)
    return {
      user: null,
      setUser: () => {},
      onLogout: () => {},
      isSignOutModalOpen: false,
      setIsSignOutModalOpen: () => {},
    };

  return context;
};
