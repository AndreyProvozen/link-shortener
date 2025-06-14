import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { memo, type FC, type PropsWithChildren } from 'react';

import { Header } from '@/components';
import { BACKGROUND_VARIANTS } from '@/constants';

interface Props extends PropsWithChildren {
  patternColor?: string;
  backgroundVariant?: BACKGROUND_VARIANTS;
}

const HeroBGWave = dynamic(() => import('@/icons/HeroBGWave'), { ssr: false });
const HeroBGBlob = dynamic(() => import('@/icons/HeroBGBlob'), { ssr: false });

const FullScreenWrapper: FC<Props> = ({ children, patternColor = '#FC88ED', backgroundVariant }) => (
  <div className="min-h-screen flex flex-col justify-between relative">
    {backgroundVariant === BACKGROUND_VARIANTS.BLOB ? (
      <HeroBGBlob className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" blobsColor={patternColor} />
    ) : (
      <HeroBGWave className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" waveColor={patternColor} />
    )}
    <Header />
    <div className="flex flex-col items-center px-5 mx-auto my-auto text-center">
      <motion.div
        className="shadow-xl w-full max-w-lg bg-white-50 tablet-small:px-10 tablet-small:py-5 px-14 py-7 rounded-xl z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  </div>
);

export default memo(FullScreenWrapper);
