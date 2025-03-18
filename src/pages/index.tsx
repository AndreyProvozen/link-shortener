import { FC } from 'react';

import { PageMeta } from '@/atoms';
import HomePage from '@/containers/HomePage';
import { META } from '@/constants';
import { StarIcon } from '@/icons';

const Home: FC = () => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} noIndex={false} />
    <HomePage />
    <div className="fixed opacity-0 pointer-events-none">
      <StarIcon id="star-icon" className="fill-orange-500" />
    </div>
  </>
);

export default Home;
