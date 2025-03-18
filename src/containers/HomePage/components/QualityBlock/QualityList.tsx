import Image from 'next/image';
import { FC } from 'react';

import { SCREEN_SIZES } from '@/constants';
import { BarChartIcon, HeartIcon } from '@/icons';
import clsx from 'clsx';
import { useMediaQuery } from '@/hooks';

export const qualitiesList = [
  {
    image: <BarChartIcon />,
    title: 'Statistics',
    subTitle: 'Check the amount of clicks that your shortened URL received',
    gridClasses: 'col-span-2 col-start-2',
  },
  {
    image: <HeartIcon width={100} height={100} fill="none" strokeWidth="2" stroke="red" />,
    title: 'Easy',
    subTitle: 'Link Shortener is easy and fast, enter the long link to get your shortened link',
    gridClasses: 'col-span-2 col-start-4',
  },
  {
    image: <Image src="/image/devices.png" width={100} height={100} alt="our qualities image" />,
    title: 'Devices',
    subTitle: 'Compatible with smartphones, tablets, and desktop',
    gridClasses: 'col-span-2 row-start-2',
  },
  {
    image: <Image src="/svg/lock.svg" width={100} height={100} alt="our qualities image" />,
    title: 'Security',
    subTitle: 'Your data is securely stored and protected',
    gridClasses: 'col-span-2 col-start-3 row-start-2',
  },
  {
    image: <Image src="/svg/scatter-chart.svg" width={100} height={100} alt="our qualities image" />,
    title: 'Analytics',
    subTitle: 'Track and analyze the performance of your shortened URLs',
    gridClasses: 'col-span-2 col-start-5 row-start-2',
  },
  {
    image: <Image src="/svg/edit.svg" width={100} height={100} alt="our qualities image" />,
    title: 'Customization',
    subTitle: 'Personalize your shortened URLs with custom aliases or tags',
    gridClasses: 'col-span-2 col-start-3 row-start-3',
  },
];

const QualityList: FC = () => {
  const isMobile = useMediaQuery(SCREEN_SIZES.TABLET_BELOW);

  return (
    <div className="grid grid-cols-6 justify-items-center tablet:grid-cols-2 mobile:grid-cols-1 gap-4">
      {qualitiesList.map(({ image, title, subTitle, gridClasses }) => (
        <div className={clsx('flex flex-col items-center max-w-xs mx-3', { [gridClasses]: !isMobile })} key={subTitle}>
          {image}
          <p className="text-2xl font-bold">{title}</p>
          <p className="max-w-xs text-black-500">{subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default QualityList;
