import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { check, getUserLinks } from '@/api';
import type { User } from '@/api/auth/types';
import type { GetUserLinksReturnProps } from '@/api/link/types';
import { PageMeta } from '@/atoms';
import { LINKS_LIST_PER_PAGE, META } from '@/constants';
import LinksListPage from '@/containers/LinksListPage';
import { Heart, ThreeDots } from '@/icons';
import { LinksListProvider } from '@/providers/LinksListProvider';
import { UserProvider } from '@/providers/UserProvider';

interface Props {
  initialUser: User | null;
  initialLinksData: GetUserLinksReturnProps;
}

const LinksList: FC<Props> = ({ initialUser, initialLinksData }) => (
  <>
    <PageMeta title={META.LIST.TITLE} description={META.LIST.DESCRIPTION} noIndex />
    <UserProvider initialUser={initialUser}>
      <LinksListProvider initialLinksData={initialLinksData}>
        <LinksListPage />
      </LinksListProvider>
    </UserProvider>
    <div className="fixed opacity-0 pointer-events-none">
      <ThreeDots id="three-dots-icon" className="fill-pink-700 hover:fill-pink-500" />
      <Heart id="heart-icon" className="fill-red-700 stroke-2 stroke-red-700" />
      <Heart id="heart-outline-icon" className="fill-none stroke-2 stroke-red-700" />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await check({ req, res });

  if (user) {
    const initialLinksData = await getUserLinks({ limit: LINKS_LIST_PER_PAGE, req, res });

    return { props: { initialUser: user, initialLinksData } };
  }

  return { props: {} };
};

export default LinksList;
