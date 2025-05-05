import { PropsWithChildren } from 'react';

import { GetUserLinksReturnProps } from '@/api/link/types';

export type ProviderProps = PropsWithChildren<{ initialLinksData: GetUserLinksReturnProps }>;

export type ContextProps =
  | {
      linksList: GetUserLinksReturnProps['data'];
      isLoading: boolean;
      totalCount: GetUserLinksReturnProps['totalCount'];
      addNewLink: (url: string, callback?: () => void) => Promise<void>;
      removeLink: (code: string) => Promise<void>;
    }
  | undefined;
