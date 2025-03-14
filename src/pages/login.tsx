import { FC } from 'react';

import { PageMeta } from '@/atoms';
import LoginPage from '@/containers/LoginPage';
import { META } from '@/constants';

const Login: FC = () => (
  <>
    <PageMeta title={META.LOGIN.TITLE} description={META.LOGIN.DESCRIPTION} noIndex />
    <LoginPage />
  </>
);

export default Login;
