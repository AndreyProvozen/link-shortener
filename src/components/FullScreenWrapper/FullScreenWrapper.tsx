import { FC, PropsWithChildren } from 'react';
import { Header } from '@/components';
import { HeroBackground } from '@/icons';

interface Props extends PropsWithChildren {
  blobsColor?: string;
}

const FullScreenWrapper: FC<Props> = ({ children, blobsColor = '#FC88ED' }) => (
  <div className="min-h-screen flex flex-col justify-between relative">
    <HeroBackground className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" blobsColor={blobsColor} />
    <Header />
    <div className="flex flex-col items-center px-5 mx-auto my-auto text-center">
      <div className="w-full max-w-lg bg-white-50 tablet-small:px-10 tablet-small:py-5 px-14 py-7 rounded-xl z-10">
        {children}
      </div>
    </div>
  </div>
);

export default FullScreenWrapper;
