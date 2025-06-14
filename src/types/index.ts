import type { ReactNode } from 'react';

export interface MenuProps {
  name?: string;
  link?: string;
  handleFunction?: () => void;
  component?: ReactNode;
  children?: MenuProps[];
}
