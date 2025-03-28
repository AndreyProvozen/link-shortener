import { InputHTMLAttributes, FC } from 'react';

import ErrorMessage from '../ErrorMessage';

const inputVariants = {
  base: 'border-2 rounded-md px-4 py-2 text-black-900 focus:outline-none focus:border-pink-500 transition w-full',
  primary: 'border-white-300',
  error: 'border-red-500',
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof inputVariants;
  error?: string;
}

const Input: FC<Props> = ({ variant = 'primary', error, className, ...props }) => (
  <div className="w-full">
    <input className={`${inputVariants.base} ${inputVariants[error ? 'error' : variant]} ${className}`} {...props} />
    {error && <ErrorMessage className="mt-1">{error}</ErrorMessage>}
  </div>
);

export default Input;
