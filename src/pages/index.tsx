import { FC } from 'react';

import { PageMeta } from '@/atoms';
import HomePage from '@/containers/HomePage';
import { META } from '@/constants';

const Home: FC = () => (
  <>
    <PageMeta title={META.HOME.TITLE} description={META.HOME.DESCRIPTION} noIndex={false} />
    <HomePage />
  </>
);

export default Home;
