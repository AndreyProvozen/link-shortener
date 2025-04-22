import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { refreshAccessToken } from '@/api';
import { User } from '@/api/auth/types';
import { PageMeta } from '@/atoms';
import { BaseProvider } from '@/components';
import { META } from '@/constants';
import HomePage from '@/containers/HomePage';
import { StarIcon, ChevronIcon } from '@/icons';

interface Props {
  initialUser: User | null;
}

const Home: FC<Props> = ({ initialUser }) => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} noIndex={false} />
    <BaseProvider initialUser={initialUser}>
      <HomePage />
    </BaseProvider>
    <div className="fixed opacity-0 pointer-events-none">
      <StarIcon id="star-icon" className="fill-orange-500" />
      <ChevronIcon id="chevron-icon" />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { user } = await refreshAccessToken({ req, res });

  return {
    props: { initialUser: user || null },
  };
};

export default Home;
