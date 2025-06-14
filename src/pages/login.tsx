import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { check } from '@/api';
import { PageMeta } from '@/atoms';
import { META } from '@/constants/meta';
import LoginPage from '@/containers/LoginPage';

const Login: FC = () => (
  <>
    <PageMeta title={META.LOGIN.TITLE} description={META.LOGIN.DESCRIPTION} noIndex />
    <LoginPage />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await check({ req, res });
  if (user) return { redirect: { destination: '/', permanent: false } };

  return { props: {} };
};

export default Login;
