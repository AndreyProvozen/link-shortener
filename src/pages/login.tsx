import { FC } from 'react';

import { PageMeta } from '@/atoms';
import { META } from '@/constants';
import LoginPage from '@/containers/LoginPage';

const Login: FC = () => (
  <>
    <PageMeta title={META.LOGIN.TITLE} description={META.LOGIN.DESCRIPTION} noIndex />
    <LoginPage />
  </>
);

export default Login;
