import type { PropsWithChildren } from 'react';

import type { GetUserLinksReturnProps } from '@/types';

export type ProviderProps = PropsWithChildren<{ initialLinksData: GetUserLinksReturnProps }>;

export type ContextProps =
  | {
      linksList: GetUserLinksReturnProps['data'];
      isLoading: boolean;
      totalCount: GetUserLinksReturnProps['totalCount'];
    }
  | undefined;

export type ContextActionsProps =
  | {
      addNewLink: (url: string, callback?: () => void) => Promise<void>;
      removeLink: (code: string) => Promise<void>;
      setIsLoading: (isLoading: boolean) => void;
      setLinksList: (linksList: GetUserLinksReturnProps['data']) => void;
      setTotalCount: (totalCount: GetUserLinksReturnProps['totalCount']) => void;
    }
  | undefined;
