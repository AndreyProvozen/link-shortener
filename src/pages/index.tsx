import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { check, getUserLinks } from '@/api';
import type { User } from '@/api/auth/types';
import type { GetUserLinksReturnProps } from '@/api/link/types';
import { PageMeta } from '@/atoms';
import { META } from '@/constants';
import HomePage from '@/containers/HomePage';
import { StarIcon, ThreeDotsIcon, ChevronIcon, HeartIcon } from '@/icons';
import { UserProvider, LinksListProvider } from '@/providers';

interface Props {
  initialUser: User | null;
  initialHeroLinks: GetUserLinksReturnProps;
}

const Home: FC<Props> = ({ initialUser, initialHeroLinks }) => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} />
    <UserProvider initialUser={initialUser}>
      <LinksListProvider initialLinksData={initialHeroLinks}>
        <HomePage />
      </LinksListProvider>
    </UserProvider>
    <div className="fixed opacity-0 pointer-events-none">
      <StarIcon id="star-icon" className="fill-orange-500" />
      <ChevronIcon id="chevron-icon" />
      <HeartIcon id="heart-icon" className="fill-red-700 stroke-2 stroke-red-700" />
      <ThreeDotsIcon id="three-dots-icon" className="fill-pink-700" />
      <HeartIcon id="heart-outline-icon" className="fill-none stroke-2 stroke-red-700" />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await check({ req, res });

  if (user) {
    const initialHeroLinks = await getUserLinks({ limit: 3, req, res });

    return { props: { initialUser: user, initialHeroLinks } };
  }

  return { props: {} };
};

export default Home;
