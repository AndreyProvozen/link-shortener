import { FC } from 'react';

import PageMeta from '@/atoms/PageMeta';
import { META } from '@/constants';
import LinksList from '@/containers/LinksListPage';
import { HeartIcon, ThreeDotsIcon } from '@/icons';

const LinksListPage: FC = () => (
  <>
    <PageMeta title={META.LIST.TITLE} description={META.LIST.DESCRIPTION} noIndex />
    <LinksList />
    <div className="fixed opacity-0 pointer-events-none">
      <ThreeDotsIcon id="three-dots-icon" className="fill-pink-700 hover:fill-pink-500" />
      <HeartIcon id="heart-icon" className="fill-red-700 stroke-2 stroke-red-700" />
      <HeartIcon id="heart-outline-icon" className="fill-none stroke-2 stroke-red-700" />
    </div>
  </>
);

export default LinksListPage;
