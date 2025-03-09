import { Link } from '@/atoms';
import React, { FC } from 'react';

// import { Header } from '@/components';

interface Props {
  isSuccess: boolean;
}

const ActivationPage: FC<Props> = ({ isSuccess }) => (
  <div className="min-h-screen flex flex-col justify-between">
    {/* <Header textBlack containerClasses="px-5" /> */}
    <div className="text-center flex flex-col items-center gap-2 px-5 pb-20 my-auto">
      <h1 className="text-5xl">{isSuccess ? 'Activation Success' : 'Activation Failed'}</h1>
      <p className="text-xl max-w-80">
        {isSuccess ? 'Your account has been successfully activated' : 'Your account has not been activated'}
      </p>
      <Link href="/" className="mt-3">
        Go to Home
      </Link>
    </div>
  </div>
);

export default ActivationPage;
