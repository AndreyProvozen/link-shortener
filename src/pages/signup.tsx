import { FC } from 'react';

import { PageMeta } from '@/atoms';
import SignUpPage from '@/containers/SignUpPage';
import { META } from '@/constants';

const SignUp: FC = () => (
  <>
    <PageMeta title={META.SIGN_UP.TITLE} description={META.SIGN_UP.DESCRIPTION} noIndex />
    <SignUpPage />
  </>
);

export default SignUp;
