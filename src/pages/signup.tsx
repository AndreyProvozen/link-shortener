import { FC } from 'react';

import { PageMeta } from '@/atoms';
import { META } from '@/constants';
import SignUpPage from '@/containers/SignUpPage';

const SignUp: FC = () => (
  <>
    <PageMeta title={META.SIGN_UP.TITLE} description={META.SIGN_UP.DESCRIPTION} noIndex />
    <SignUpPage />
  </>
);

export default SignUp;
