import { ButtonHTMLAttributes, FC } from 'react';

const buttonVariants = {
  base: 'transition text-xl font-medium px-4 py-2 rounded-md disabled:bg-white-200 disabled:text-white-500',
  primary: 'text-white-50 bg-pink-500 hover:bg-pink-300 active:bg-pink-700',
  secondary:
    'border-white-300 border-2 text-white-500 hover:bg-pink-300 hover:text-white-50 hover:border-pink-300 active:bg-pink-700',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: keyof typeof buttonVariants;
}

const Button: FC<Props> = ({ children, variant = 'primary', className = '', ...props }) => (
  <button className={`${buttonVariants.base} ${buttonVariants[variant]} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
