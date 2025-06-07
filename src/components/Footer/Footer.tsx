import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import { GitHub, Instagram, Steam } from '@/icons';

interface Props {
  containerClasses?: string;
}

export const SOCIAL_LINKS_DATA = [
  { icon: <GitHub fill="white" />, href: '/#', ariaLabel: 'Link to GitHub' },
  { icon: <Instagram />, href: '/#', ariaLabel: 'Link to Instagram' },
  { icon: <Steam />, href: '/#', ariaLabel: 'Link to Steam' },
];

const Footer: FC<Props> = ({ containerClasses = '' }) => (
  <div className={clsx('bg-black-900 text-white-50', containerClasses)}>
    <div className="container mobile:flex-col-reverse max-w-screen-container flex justify-between p-5 items-center mx-auto">
      <p className="text-3xl font-extrabold">Link Shortener</p>
      <div className="flex gap-3">
        {SOCIAL_LINKS_DATA.map(({ icon, href, ariaLabel }) => (
          <Link
            target="_blank"
            href={href}
            className="hover:[&>svg]:fill-pink-300"
            key={ariaLabel}
            aria-label={ariaLabel}
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
