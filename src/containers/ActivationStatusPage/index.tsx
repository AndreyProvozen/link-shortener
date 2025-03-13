import { Link } from '@/atoms';
import { FC } from 'react';

import { FullScreenWrapper } from '@/components';

interface Props {
  isSuccess: boolean;
}

const ActivationPage: FC<Props> = ({ isSuccess }) => (
  <FullScreenWrapper blobsColor={isSuccess ? '#05c148' : '#c1002a'}>
    <h1 className="text-4xl mb-2 font-bold">{`Activation ${isSuccess ? 'Success' : 'Failed'}`}</h1>
    <p className="text-xl max-w-80 mx-auto text-black-500 mb-5">
      {`Your account has ${isSuccess ? 'been successfully' : 'not been'} activated`}
    </p>
    <Link variant="button" href="/">
      Go to Home
    </Link>
  </FullScreenWrapper>
);

export default ActivationPage;
