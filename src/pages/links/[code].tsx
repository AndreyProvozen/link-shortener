import { type GetServerSidePropsContext } from 'next';
import { type FC } from 'react';

import { check } from '@/api/auth';
import { getLinkByCode } from '@/api/link';
import PageMeta from '@/atoms/PageMeta';
import { META } from '@/constants/meta';
import LinkStatisticPage from '@/containers/LinkStatisticPage';
import FavoriteListProvider from '@/providers/FavoriteListProvider';
import { UserProvider } from '@/providers/UserProvider';
import type { FullLinkDataProps, User } from '@/types';

interface Props {
  linkData: FullLinkDataProps;
  initialUser: User | null;
}
const { DESCRIPTION, TITLE } = META.LINK_STATISTIC;

const LinkStatistic: FC<Props> = ({ linkData, initialUser }) => (
  <>
    <PageMeta title={TITLE} description={DESCRIPTION} noIndex />
    <UserProvider initialUser={initialUser}>
      <FavoriteListProvider>
        <LinkStatisticPage linkData={linkData} />
      </FavoriteListProvider>
    </UserProvider>
  </>
);

export const getServerSideProps = async ({ req, res, query }: GetServerSidePropsContext) => {
  const user = await check({ req, res });

  if (!user) return { props: {} };

  const linkData = await getLinkByCode({ code: query.code as string, req, res });
  return { props: { initialUser: user, linkData } };
};

export default LinkStatistic;
