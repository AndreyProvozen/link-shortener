import { Link } from '@/atoms';
import React, { FC } from 'react';

import { Header } from '@/components';
import { HeroBackground } from '@/icons';

interface Props {
  isSuccess: boolean;
}

const ActivationPage: FC<Props> = ({ isSuccess }) => (
  <div className="min-h-screen flex flex-col justify-between relative">
    <HeroBackground
      blobsColor={isSuccess ? '#05c148' : '#c1002a'}
      className="absolute inset-0 w-full h-full z-0"
      preserveAspectRatio="none"
    />
    <Header containerClasses="px-5" />
    <div className="bg-white-50 text-center flex flex-col items-center gap-2  px-20 py-10 mx-auto rounded-md my-auto z-10">
      <h1 className="text-5xl">{isSuccess ? 'Activation Success' : 'Activation Failed'}</h1>
      <p className="text-xl max-w-80">
        {isSuccess ? 'Your account has been successfully activated' : 'Your account has not been activated'}
      </p>
      <Link variant="button" href="/" className="mt-3">
        Go to Home
      </Link>
    </div>
  </div>
);

export default ActivationPage;
