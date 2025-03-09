import { FC } from 'react';

import { PageMeta } from '@/atoms';
import LoginPage from '@/containers/LoginPage';

interface Props {
  data: string;
}

const META_TITLE = 'Login Page';
const META_DESCRIPTION =
  'Login Page provides a detailed overview of the login process. It includes information about the login status, any errors or issues encountered during the login process, and any relevant details or context that may be helpful in understanding the login process.';

const Login: FC<Props> = () => (
  <>
    <PageMeta title={META_TITLE} description={META_DESCRIPTION} noIndex />
    <LoginPage />
  </>
);

export default Login;
