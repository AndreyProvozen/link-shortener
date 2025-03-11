import { Link } from '@/atoms';
import React, { FC } from 'react';

import { FullScreenWrapper } from '@/components';

interface Props {
  isSuccess: boolean;
}

const ActivationPage: FC<Props> = ({ isSuccess }) => (
  <FullScreenWrapper blobsColor={isSuccess ? '#05c148' : '#c1002a'}>
    <div className="bg-white-50 text-center flex flex-col items-center gap-2  px-20 py-10 mx-auto rounded-md my-auto z-10">
      <h1 className="text-5xl">{isSuccess ? 'Activation Success' : 'Activation Failed'}</h1>
      <p className="text-xl max-w-80 text-black-500">
        {isSuccess ? 'Your account has been successfully activated' : 'Your account has not been activated'}
      </p>
      <Link variant="button" href="/" className="mt-3">
        Go to Home
      </Link>
    </div>
  </FullScreenWrapper>
);

export default ActivationPage;
