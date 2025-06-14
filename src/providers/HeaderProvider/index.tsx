import { useRouter } from 'next/router';
import { createContext, useContext, useMemo, useState } from 'react';

import { Dropdown } from '@/atoms';
import { SCREEN_SIZES } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { Heart, LogOut, User } from '@/icons';
import type { MenuProps } from '@/types';

import { useUser } from '../UserProvider';

import type { ContextProps, ProviderProps } from './types';

const HeaderDataContext = createContext<ContextProps>(undefined);

export const HeaderDataProvider = ({ children }: ProviderProps) => {
  const router = useRouter();
  const { user, setIsSignOutModalOpen } = useUser();

  const [isOpenDrover, setIsOpenDrover] = useState(false);

  const isMobile = useMediaQuery(SCREEN_SIZES.TABLET_BELOW);

  const dropdownData = useMemo(
    () =>
      user
        ? [
            {
              customField: (
                <div className="flex items-center">
                  <User className="flex-shrink-0 rounded-full overflow-hidden mr-2 w-auto" width={48} height={48} />
                  <div className="overflow-hidden">
                    <p className="text-ellipsis overflow-hidden">{user.username}</p>
                    <p className="text-ellipsis overflow-hidden">{user.email}</p>
                  </div>
                </div>
              ),
            },
            {
              fieldTitle: 'Favorite links',
              fieldFunction: () => router.push(`${window.location.origin}/links?search=favorite`),
              fieldImage: <Heart fill="white" strokeWidth="2" stroke="white" />,
            },
            {
              fieldTitle: 'Sign out',
              fieldFunction: () => setIsSignOutModalOpen(true),
              fieldImage: <LogOut />,
            },
          ]
        : [],
    [user, setIsSignOutModalOpen, router]
  );

  const authorizedFields = useMemo(
    () =>
      isMobile
        ? {
            name: 'My profile',
            children: [
              {
                name: 'Favorite links',
                handleFunction: () => router.push(`${window.location.origin}/links?search=favorite`),
              },
              {
                name: 'Sign out',
                handleFunction: () => setIsSignOutModalOpen(true),
              },
            ],
          }
        : {
            component: (
              <Dropdown dropdownData={dropdownData} placeholder={<p className="mx-3 text-2xl">My profile</p>} />
            ),
          },
    [isMobile, dropdownData, router, setIsSignOutModalOpen]
  );

  const navFields = useMemo(
    () => [
      { name: 'Home', link: '/' },
      { name: 'Links', link: '/links' },
      user ? authorizedFields : { name: 'Sign in', link: '/login' },
    ],
    [user, authorizedFields]
  ) as MenuProps[];

  const value = useMemo(() => ({ isOpenDrover, setIsOpenDrover, navFields }), [isOpenDrover, navFields]);

  return <HeaderDataContext.Provider value={value}>{children}</HeaderDataContext.Provider>;
};

export const useHeaderData = () => {
  const context = useContext(HeaderDataContext);

  if (!context) throw new Error('useHeaderData must be used within a HeaderDataProvider');

  return context;
};
