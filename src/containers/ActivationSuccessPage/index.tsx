import type { FC } from 'react';

import { Link } from '@/atoms';
import { FullScreenWrapper, BACKGROUND_VARIANTS } from '@/components';

const ActivationSuccessPage: FC = () => (
  <FullScreenWrapper patternColor="#05c148" backgroundVariant={BACKGROUND_VARIANTS.BLOB}>
    <h1 className="text-4xl mb-2 font-bold">Activation Success</h1>
    <p className="text-xl max-w-80 mx-auto text-black-500 mb-5">Your account has been successfully activated</p>
    <Link variant="button" href="/">
      Go to Home
    </Link>
  </FullScreenWrapper>
);

export default ActivationSuccessPage;
