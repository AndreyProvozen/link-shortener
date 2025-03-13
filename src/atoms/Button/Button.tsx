import { ButtonHTMLAttributes, FC } from 'react';

const buttonVariants = {
  primary:
    'text-white-50 text-xl font-medium px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-300 active:bg-pink-700 disabled:bg-white-200 disabled:text-white-500',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: keyof typeof buttonVariants;
}

const Button: FC<Props> = ({ children, variant = 'primary', className = '', ...props }) => (
  <button className={`transition ${buttonVariants[variant]} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
