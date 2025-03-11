import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useMemo, FC } from 'react';

import { Dropdown } from '@/atoms';
import { HeartIcon, LogOutIcon } from '@/icons';

interface Props {
  textBlack?: boolean;
}

const DesktopHeader: FC<Props> = () => {
  const { push } = useRouter();
  const session = false;

  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const dropdownData = useMemo(
    () =>
      session
        ? [
            {
              customField: (
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 rounded-full overflow-hidden mr-2 w-auto"
                    src={session.user?.image || ''}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <div className="overflow-hidden">
                    <p className="text-ellipsis overflow-hidden">{session.user?.name}</p>
                    <p className="text-ellipsis overflow-hidden">{session.user?.email}</p>
                  </div>
                </div>
              ),
            },
            {
              fieldTitle: 'Favorite links',
              fieldFunction: () => push(`${window.location.origin}/links?search=favorite`),
              fieldImage: <HeartIcon fill="white" strokeWidth="2" stroke="white" />,
            },
            {
              fieldTitle: 'Sign out',
              fieldFunction: () => setIsSignOutModalOpen(true),
              fieldImage: <LogOutIcon />,
            },
          ]
        : [],
    [session, setIsSignOutModalOpen, push]
  );

  const navFields = useMemo(
    () => [
      { name: 'Home', link: '/' },
      { name: 'Links', link: '/links' },
      session
        ? {
            component: (
              <Dropdown
                dropdownData={dropdownData}
                placeholder={
                  <div className="flex mx-3">
                    <Image
                      className="rounded-full mr-2 w-auto"
                      src={session.user?.image || ''}
                      width={30}
                      height={30}
                      alt="User avatar"
                    />
                    <p className="text-2xl">My profile</p>
                  </div>
                }
              />
            ),
          }
        : { name: 'Sign in', link: '/auth' },
    ],
    [session, dropdownData]
  );

  return (
    <nav className="flex">
      {navFields.map(({ link, component, name }, index) => (
        <div key={name ?? index}>
          {link ? (
            <Link href={link} className="mx-3 text-2xl">
              {name}
            </Link>
          ) : (
            component
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopHeader;
