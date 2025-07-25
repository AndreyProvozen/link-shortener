import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { FC } from 'react';

import { SCREEN_SIZES } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { HeaderDataProvider } from '@/providers/HeaderProvider';
import { useUser } from '@/providers/UserProvider';

import ConfirmSignOutModal from '../ConfirmSignOutModal';

const DesktopHeader = dynamic(() => import('./components/DesktopHeader'), { ssr: false });
const MobileHeader = dynamic(() => import('./components/MobileHeader'), { ssr: false });

interface Props {
  textBlack?: boolean;
  containerClasses?: string;
}

const HeaderContent: FC<Props> = ({ textBlack, containerClasses = '' }) => {
  const isMobile = useMediaQuery(SCREEN_SIZES.TABLET_BELOW);
  const { isSignOutModalOpen, setIsSignOutModalOpen } = useUser();

  return (
    <header
      className={clsx(
        'z-40 p-5',
        textBlack ? 'text-black-900 border-b-2 border-gray-100' : 'text-white-50',
        containerClasses
      )}
    >
      <div className="container max-w-screen-container mx-auto flex justify-between items-center text-xl">
        <Link
          href="/"
          style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}
          className="text-3xl font-extrabold mobile-small:text-2xl"
        >
          Link Shortener
        </Link>
        {isMobile ? <MobileHeader textBlack={textBlack} /> : <DesktopHeader textBlack={textBlack} />}
      </div>
      {isSignOutModalOpen && <ConfirmSignOutModal setIsModalOpen={setIsSignOutModalOpen} />}
    </header>
  );
};

const Header: FC<Props> = props => (
  <HeaderDataProvider>
    <HeaderContent {...props} />
  </HeaderDataProvider>
);

export default Header;
