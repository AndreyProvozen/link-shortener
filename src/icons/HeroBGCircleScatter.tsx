import { motion } from 'framer-motion';
import type { FC, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  blobsColor?: string;
}

const floatTransition = { repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' as const };

const HeroBGCircleScatter: FC<Props> = ({ blobsColor = '#FC88ED', ...props }) => (
  <svg viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0" y="0" width="900" height="450" fill="#000" />
    <g fill={blobsColor}>
      <motion.circle
        r="128"
        cx="717"
        cy="4"
        animate={{ y: [0, 10, 0] }}
        transition={{ ...floatTransition, duration: 5.5 }}
      />
      <motion.circle
        r="64"
        cx="448"
        cy="169"
        animate={{ y: [0, 10, 0] }}
        transition={{ ...floatTransition, duration: 3 }}
      />
      <motion.circle
        r="86"
        cx="11"
        cy="86"
        animate={{ y: [0, 10, 0] }}
        transition={{ ...floatTransition, duration: 3.5 }}
      />
      <motion.circle
        r="119"
        cx="819"
        cy="334"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...floatTransition, duration: 5 }}
      />
      <motion.circle
        r="93"
        cx="340"
        cy="442"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...floatTransition, duration: 4 }}
      />
      <motion.circle
        r="106"
        cx="30"
        cy="422"
        animate={{ y: [0, 10, 0] }}
        transition={{ ...floatTransition, duration: 4.5 }}
      />
    </g>
  </svg>
);

export default HeroBGCircleScatter;
