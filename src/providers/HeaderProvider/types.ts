import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type { MenuProps } from '@/types';

export type ContextProps =
  | {
      isOpenDrover: boolean;
      setIsOpenDrover: Dispatch<SetStateAction<boolean>>;
      navFields: MenuProps[];
    }
  | undefined;

export type ProviderProps = { children: ReactNode };
