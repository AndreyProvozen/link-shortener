import { InputHTMLAttributes, FC } from 'react';

const inputVariants = {
  primary: 'border border-white-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500',
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof inputVariants;
}

const Input: FC<Props> = ({ variant = 'primary', className, ...props }) => (
  <input className={`transition w-full ${inputVariants[variant]} ${className}`} {...props} />
);

export default Input;
