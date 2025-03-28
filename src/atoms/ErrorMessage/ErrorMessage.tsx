import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const ErrorMessage: FC<Props> = ({ children, className }) => (
  <p className={clsx('text-red-500 text-sm', className)}>{children}</p>
);

export default ErrorMessage;
