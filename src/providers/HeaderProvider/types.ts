import { Dispatch, ReactNode, SetStateAction } from 'react';

import { MenuProps } from '@/components';

export type ContextProps =
  | {
      isOpenDrover: boolean;
      setIsOpenDrover: Dispatch<SetStateAction<boolean>>;
      navFields: MenuProps[];
    }
  | undefined;

export type ProviderProps = { children: ReactNode };
