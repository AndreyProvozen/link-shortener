import { FC, PropsWithChildren } from 'react';
import { Header } from '@/components';
import { HeroBackground } from '@/icons';

interface Props extends PropsWithChildren {
  blobsColor?: string;
}

const PageWrapper: FC<Props> = ({ children, blobsColor = '#FC88ED' }) => (
  <div className="min-h-screen flex flex-col justify-between relative">
    <HeroBackground className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" blobsColor={blobsColor} />
    <Header />
    <div className="z-10 flex flex-col items-center px-5 mx-auto my-auto">{children}</div>
  </div>
);

export default PageWrapper;
