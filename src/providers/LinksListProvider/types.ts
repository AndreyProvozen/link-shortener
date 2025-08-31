import type { PropsWithChildren } from 'react';

import type { NOT_FOUND_VARIANTS } from '@/constants';
import type { GetUserLinksReturnProps } from '@/types';

export type ProviderProps = PropsWithChildren<{ initialLinksData: GetUserLinksReturnProps }>;

export type ContextProps =
  | {
      linksList: GetUserLinksReturnProps['data'];
      isLoading: boolean;
      totalCount: GetUserLinksReturnProps['totalCount'];
      notFoundVariant: NOT_FOUND_VARIANTS;
    }
  | undefined;

export type ContextActionsProps =
  | {
      addNewLink: (url: string, callback?: () => void) => Promise<void>;
      removeLink: (code: string) => Promise<void>;
      setIsLoading: (isLoading: boolean) => void;
      setLinksList: (linksList: GetUserLinksReturnProps['data']) => void;
      setTotalCount: (totalCount: GetUserLinksReturnProps['totalCount']) => void;
      setNotFoundVariant: (variant: NOT_FOUND_VARIANTS) => void;
    }
  | undefined;
