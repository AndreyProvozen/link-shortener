import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { check, getUserLinks } from '@/api';
import { User } from '@/api/auth/types';
import { GetUserLinksReturnProps } from '@/api/link/types';
import { PageMeta } from '@/atoms';
import { META } from '@/constants';
import HomePage from '@/containers/HomePage';
import { StarIcon, ChevronIcon } from '@/icons';
import { UserProvider, LinksListProvider } from '@/providers';

interface Props {
  initialUser: User | null;
  initialHeroLinks: GetUserLinksReturnProps;
}

const Home: FC<Props> = ({ initialUser, initialHeroLinks }) => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} noIndex={false} />
    <UserProvider initialUser={initialUser}>
      <LinksListProvider initialLinksData={initialHeroLinks}>
        <HomePage />
      </LinksListProvider>
    </UserProvider>
    <div className="fixed opacity-0 pointer-events-none">
      <StarIcon id="star-icon" className="fill-orange-500" />
      <ChevronIcon id="chevron-icon" />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await check({ req, res });

  if (user) {
    const initialHeroLinks = await getUserLinks({ limit: 4, req, res });

    return { props: { initialUser: user, initialHeroLinks } };
  }

  return { props: {} };
};

export default Home;
