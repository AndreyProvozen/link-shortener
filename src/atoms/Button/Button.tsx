import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';

const buttonVariants = {
  base: 'transition text-xl font-medium px-4 py-2 disabled:bg-white-300 disabled:text-white-500',
  primary: 'text-white-50 bg-pink-500 hover:bg-pink-300 active:bg-pink-700 rounded-md',
  secondary:
    'border-white-300 border-2 text-white-500 hover:bg-pink-300 hover:text-white-50 hover:border-pink-300 active:bg-pink-700 rounded-md',
  danger: 'hover:bg-red-500',
  success: 'hover:bg-green-500',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: keyof typeof buttonVariants;
}

const Button: FC<Props> = ({ children, variant = 'primary', className = '', ...props }) => (
  <button className={clsx(buttonVariants.base, buttonVariants[variant], className)} {...props}>
    {children}
  </button>
);

export default Button;
