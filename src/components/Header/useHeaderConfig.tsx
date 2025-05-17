import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { Dropdown } from '@/atoms';
import { HeartIcon, LogOutIcon, UserIcon } from '@/icons';
import { useUser } from '@/providers';

import { MenuProps } from './MobileHeader';

const useHeaderConfig = (isMobile: boolean) => {
  const { user } = useUser();
  const router = useRouter();

  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const dropdownData = useMemo(
    () =>
      user
        ? [
            {
              customField: (
                <div className="flex items-center">
                  <UserIcon className="flex-shrink-0 rounded-full overflow-hidden mr-2 w-auto" width={48} height={48} />
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
              fieldImage: <HeartIcon fill="white" strokeWidth="2" stroke="white" />,
            },
            {
              fieldTitle: 'Sign out',
              fieldFunction: () => setIsSignOutModalOpen(true),
              fieldImage: <LogOutIcon />,
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
    [isMobile, dropdownData, router]
  );

  const navFields = useMemo(
    () => [
      { name: 'Home', link: '/' },
      { name: 'Links', link: '/links' },
      user ? authorizedFields : { name: 'Sign in', link: '/login' },
    ],
    [user, authorizedFields]
  ) as MenuProps[];

  const value = useMemo(() => ({ isSignOutModalOpen, navFields }), [isSignOutModalOpen, navFields]);

  return value;
};

export default useHeaderConfig;
