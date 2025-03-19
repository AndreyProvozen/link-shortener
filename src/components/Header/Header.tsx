import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';

import { SCREEN_SIZES } from '@/constants';
import { useMediaQuery } from '@/hooks';

const DesktopHeader = dynamic(() => import('./DesktopHeader'), { ssr: false });
const MobileHeader = dynamic(() => import('./MobileHeader'), { ssr: false });

interface Props {
  textBlack?: boolean;
  containerClasses?: string;
}

const Header: FC<Props> = ({ textBlack, containerClasses = '' }) => {
  const isMobile = useMediaQuery(SCREEN_SIZES.TABLET_BELOW);

  return (
    <header
      className={`${textBlack ? 'text-black-900 border-b-2 border-gray-100' : 'text-white-50'} ${containerClasses} z-40 p-5`}
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
    </header>
  );
};

export default Header;
