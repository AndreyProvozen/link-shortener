import { motion } from 'framer-motion';
import type { FC, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  waveColor?: string;
}

const HeroBGWave: FC<Props> = ({ waveColor = '#FC88ED', ...props }) => (
  <svg data-testid="hero-bg-wave" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0" y="0" width="900" height="600" fill="#000" />
    <motion.path
      initial={{
        d: 'M0 334L30 333.7C60 333.3 120 332.7 180 338.8C240 345 300 358 360 367.2C420 376.3 480 381.7 540 385.3C600 389 660 391 720 378.8C780 366.7 840 340.3 870 327.2L900 314L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z',
      }}
      animate={{
        d: [
          'M0 334L30 333.7C60 333.3 120 332.7 180 338.8C240 345 300 358 360 367.2C420 376.3 480 381.7 540 385.3C600 389 660 391 720 378.8C780 366.7 840 340.3 870 327.2L900 314L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z',
          'M0 448L30 428C60 408 120 368 180 342.5C240 317 300 306 360 333.3C420 360.7 480 426.3 540 443C600 459.7 660 427.3 720 391.3C780 355.3 840 315.7 870 295.8L900 276L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z',
        ],
      }}
      transition={{ repeat: Infinity, duration: 6, repeatType: 'reverse', ease: 'easeInOut' }}
      fill={waveColor}
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
);

export default HeroBGWave;
