import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { check } from '@/api/auth';
import { getUserLinks } from '@/api/link';
import { PageMeta } from '@/atoms';
import { LINKS_LIST_PER_PAGE } from '@/constants';
import { META } from '@/constants/meta';
import LinksListPage from '@/containers/LinksListPage';
import { Eye, Heart, ThreeDots } from '@/icons';
import { LinksListProvider } from '@/providers/LinksListProvider';
import { UserProvider } from '@/providers/UserProvider';
import type { GetUserLinksReturnProps, User } from '@/types';

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
    {initialUser && (
      <div className="fixed opacity-0 pointer-events-none">
        <Heart id="heart-icon" className="fill-red-700 stroke-2 stroke-red-700" />
        <ThreeDots id="three-dots-icon" className="fill-pink-700" />
        <Heart id="heart-outline-icon" className="fill-none stroke-2 stroke-red-700" />
        <Eye id="eye-icon" />
      </div>
    )}
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const user = await check({ req, res });

  if (!user) return { props: {} };

  const { searchString, favorite } = query;

  const initialLinksData = await getUserLinks({
    limit: LINKS_LIST_PER_PAGE,
    offset: 0,
    searchString: searchString as string,
    favorite: favorite === 'true',
    req,
    res,
  });

  return { props: { initialUser: user, initialLinksData } };
};

export default LinksList;
