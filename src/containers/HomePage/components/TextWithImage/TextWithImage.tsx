import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import { TEXT_WITH_IMAGE_TEST_IDS } from './testIds';

interface Props {
  linkData: { src: string; alt: string };
  text: string;
  title: string;
  featuresListData: string[];
  imageFirst?: boolean;
  containerClasses?: string;
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const TextWithImage: FC<Props> = ({ linkData, text, imageFirst, title, featuresListData, containerClasses = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    data-testid={TEXT_WITH_IMAGE_TEST_IDS.ROOT}
    className={clsx(
      { 'flex-row-reverse': imageFirst },
      'flex justify-between max-w-screen-container px-5 mx-auto desktop-small:block overflow-hidden',
      containerClasses
    )}
  >
    <motion.div variants={imageFirst ? fadeInRight : fadeInLeft} className="px-5 shrink-0">
      <Image
        loading="lazy"
        src={linkData.src}
        alt={linkData.alt}
        height={400}
        width={500}
        className="desktop-small:mx-auto"
      />
    </motion.div>
    <motion.div variants={imageFirst ? fadeInLeft : fadeInRight} className="pt-5 max-w-[700px] desktop-small:mx-auto">
      <h2 className="text-2xl font-bold mx-auto text-center mb-2 ">{title}</h2>
      <div className="text-black-500" dangerouslySetInnerHTML={{ __html: text }} />
      {featuresListData?.map(feature => (
        <div className="flex mt-5 font-medium items-start" key={feature}>
          <svg viewBox="0 0 24 24" width="24px" className="shrink-0 mr-2 ">
            <use href="#star-icon" />
          </svg>
          {feature}
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default TextWithImage;
