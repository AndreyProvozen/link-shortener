import type { FC } from 'react';

import type { BACKGROUND_VARIANTS } from '@/constants';
import { HeroBGCircleScatter } from '@/icons';

import Header from '../Header';

type Props = { variant?: BACKGROUND_VARIANTS; title: string; description: string };

const HeroSection: FC<Props> = ({ description, title }) => (
  <div className="relative flex flex-col">
    <Header />
    <HeroBGCircleScatter className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" />
    <div className="container max-w-3xl text-center mx-auto text-white-50 z-10 pb-16">
      <h1 className="text-5xl py-5" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>
        {title}
      </h1>
      <p className="text-center text-xl mx-5" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>
        {description}
      </p>
    </div>
  </div>
);

export default HeroSection;
