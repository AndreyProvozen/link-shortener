import { FC } from 'react';

import { PageMeta } from '@/atoms';
import { META } from '@/constants';
import HomePage from '@/containers/HomePage';
import { StarIcon, ChevronIcon } from '@/icons';

const Home: FC = () => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} noIndex={false} />
    <HomePage />
    <div className="fixed opacity-0 pointer-events-none">
      <StarIcon id="star-icon" className="fill-orange-500" />
      <ChevronIcon id="chevron-icon" />
    </div>
  </>
);

export default Home;
