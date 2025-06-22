import Image from 'next/image';
import type { FC } from 'react';

import Link, { type LinkVariantsProps } from '@/atoms/Link/Link';

interface Props {
  title: string;
  href: string;
  linkText: string;
  linkVariant?: LinkVariantsProps;
}

const NotFoundSection: FC<Props> = ({ title, href, linkText, linkVariant = 'button' }) => (
  <div className="text-center">
    <Image src="/image/laptop.png" alt="Not found image" width={200} height={200} className="mx-auto" />
    <h2 className="text-2xl font-bold my-6 mx-auto max-w-xl">{title}</h2>
    {!!linkText && (
      <Link variant={linkVariant} href={href}>
        {linkText}
      </Link>
    )}
  </div>
);

export default NotFoundSection;
