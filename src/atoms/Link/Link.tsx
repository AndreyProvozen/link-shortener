import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';

const linkVariants = {
  primary: 'text-white-50 hover:text-pink-500',
  secondary: 'text-pink-700 hover:text-pink-500',
  button: 'text-white-50 text-xl font-medium rounded-md hover:bg-pink-300 bg-pink-500 px-6 py-2.5 active:bg-pink-700',
};

type NextLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends NextLinkProps {
  variant?: keyof typeof linkVariants;
}

const Link: FC<Props> = ({ variant = 'primary', children, className, ...props }) => (
  <NextLink className={clsx('inline-block transition', linkVariants[variant], className)} {...props}>
    {children}
  </NextLink>
);

export default Link;
