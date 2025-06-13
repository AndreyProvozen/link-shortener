import { motion } from 'framer-motion';
import type { FC, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  blobsColor?: string;
}

const HeroBGBlob: FC<Props> = ({ blobsColor = '#FC88ED', ...props }) => (
  <svg data-testid="hero-bg-blob" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0" y="0" width="900" height="600" fill="#000" />
    <g transform="translate(900, 600)">
      <motion.path
        style={{ transition: 'fill 0.1s ease-in-out' }}
        d="M-270.4 0C-266.9 -29.3 -263.4 -58.7-246.3 -80C-229.3 -101.4-198.8 -114.8-178 -129.3C-157.2 -143.8-146.2 -159.3-133.4 -183.6C-120.6 -208 -106.1 -241.2-83.6 -257.2C-61 -273.1-30.5 -271.8 0 -270.4L0 0Z"
        fill={blobsColor}
        animate={{
          d: [
            'M-270.4 0C-266.9 -29.3 -263.4 -58.7-246.3 -80C-229.3 -101.4-198.8 -114.8-178 -129.3C-157.2 -143.8-146.2 -159.3-133.4 -183.6C-120.6 -208 -106.1 -241.2-83.6 -257.2C-61 -273.1-30.5 -271.8 0 -270.4L0 0Z',
            'M-270.4 0C-250 -25 -240 -55 -230 -85C-220 -115 -205 -145 -190 -160C-175 -175 -160 -190 -140 -200C-120 -210 -100 -225 -70 -240C-40 -255 -20 -260 0 -270.4L0 0Z',
          ],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
      />
    </g>
    <g transform="translate(0, 0)">
      <motion.path
        style={{ transition: 'fill 0.1s ease-in-out' }}
        d="M270.4 0C269.8 29.4 269.2 58.8 257.2 83.6C245.1 108.4 221.6 128.5 199.8 145.2C178 161.8 158 174.9 138.7 190.9C119.4 207 100.9 225.9 77.9 239.7C54.9 253.4 27.4 261.9 0 270.4L0 0Z"
        fill={blobsColor}
        animate={{
          d: [
            'M270.4 0C269.8 29.4 269.2 58.8 257.2 83.6C245.1 108.4 221.6 128.5 199.8 145.2C178 161.8 158 174.9 138.7 190.9C119.4 207 100.9 225.9 77.9 239.7C54.9 253.4 27.4 261.9 0 270.4L0 0Z',
            'M270.4 0C250 25 240 55 230 85C220 115 205 145 190 160C175 175 160 190 140 200C120 210 100 225 70 240C40 255 20 260 0 270.4L0 0Z',
          ],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
      />
    </g>
  </svg>
);

export default HeroBGBlob;
