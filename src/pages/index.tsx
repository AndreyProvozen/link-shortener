import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { check } from '@/api/auth';
import { getUserLinks } from '@/api/link';
import { PageMeta } from '@/atoms';
import { HOME_PAGE_LINKS_PER_PAGE } from '@/constants';
import { META } from '@/constants/meta';
import HomePage from '@/containers/HomePage';
import { Star, ThreeDots, Chevron, Heart, Eye } from '@/icons';
import FavoriteListProvider from '@/providers/FavoriteListProvider';
import { LinksListProvider } from '@/providers/LinksListProvider';
import { UserProvider } from '@/providers/UserProvider';
import type { GetUserLinksReturnProps, User } from '@/types';

interface Props {
  initialUser: User | null;
  initialHeroLinks: GetUserLinksReturnProps;
}

const Home: FC<Props> = ({ initialUser, initialHeroLinks }) => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} />
    <UserProvider initialUser={initialUser}>
      <LinksListProvider initialLinksData={initialHeroLinks}>
        <FavoriteListProvider>
          <HomePage />
        </FavoriteListProvider>
      </LinksListProvider>
    </UserProvider>
    <div className="fixed opacity-0 pointer-events-none">
      <Star id="star-icon" className="fill-orange-500" />
      <Chevron id="chevron-icon" />
      {initialUser && (
        <>
          <Heart id="heart-icon" className="fill-red-700 stroke-2 stroke-red-700" />
          <ThreeDots id="three-dots-icon" className="fill-pink-700" />
          <Heart id="heart-outline-icon" className="fill-none stroke-2 stroke-red-700" />
          <Eye id="eye-icon" />
        </>
      )}
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await check({ req, res });

  if (user) {
    const initialHeroLinks = await getUserLinks({ limit: HOME_PAGE_LINKS_PER_PAGE, req, res });

    return { props: { initialUser: user, initialHeroLinks } };
  }

  return { props: {} };
};

export default Home;
