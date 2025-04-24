import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { refreshAccessToken } from '@/api';
import { PageMeta } from '@/atoms';
import { META } from '@/constants';
import LoginPage from '@/containers/LoginPage';

const Login: FC = () => (
  <>
    <PageMeta title={META.LOGIN.TITLE} description={META.LOGIN.DESCRIPTION} noIndex />
    <LoginPage />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { user } = await refreshAccessToken({ req, res });
  if (user) return { redirect: { destination: '/', permanent: false } };

  return { props: {} };
};

export default Login;
