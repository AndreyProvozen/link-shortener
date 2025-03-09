import NextLink, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes, FC } from 'react';

const linkVariants = {
  primary: 'text-white hover:text-pink',
  secondary: 'text-darkPink hover:text-pink',
  button: 'text-white text-2xl rounded-md hover:bg-lightPink bg-pink px-6 py-2.5 active:bg-darkPink',
};

type NextLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends NextLinkProps {
  variant?: keyof typeof linkVariants;
}

const Link: FC<Props> = ({ variant = 'primary', children, className, ...props }) => (
  <NextLink className={`${linkVariants[variant]} ${className}`} {...props}>
    {children}
  </NextLink>
);

export default Link;
