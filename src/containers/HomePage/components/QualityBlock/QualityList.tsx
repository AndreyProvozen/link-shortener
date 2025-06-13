import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

import { SCREEN_SIZES } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { BarChart, Heart } from '@/icons';

export const qualitiesList = [
  {
    image: <BarChart />,
    title: 'Statistics',
    subTitle: 'Check the amount of clicks that your shortened URL received',
    gridClasses: 'col-span-2 col-start-2',
  },
  {
    image: <Heart width={100} height={100} fill="none" strokeWidth="2" stroke="red" />,
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      className="grid grid-cols-6 justify-items-center tablet:grid-cols-2 mobile:grid-cols-1 gap-4"
    >
      {qualitiesList.map(({ image, title, subTitle, gridClasses }) => (
        <motion.div
          key={subTitle}
          className={clsx('flex flex-col items-center max-w-xs mx-3', { [gridClasses]: !isMobile })}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 10 } },
          }}
        >
          {image}
          <p className="text-2xl font-bold">{title}</p>
          <p className="max-w-xs text-black-500">{subTitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default QualityList;
