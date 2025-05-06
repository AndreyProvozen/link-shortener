import { PropsWithChildren } from 'react';

import { GetUserLinksReturnProps } from '@/api/link/types';

export type ProviderProps = PropsWithChildren<{ initialLinksData: GetUserLinksReturnProps }>;

export type ContextProps =
  | {
      linksList: GetUserLinksReturnProps['data'];
      isLoading: boolean;
      favoriteList: string[];
      totalCount: GetUserLinksReturnProps['totalCount'];
    }
  | undefined;

export type ContextActionsProps =
  | {
      toggleFavorite: (isFavoriteLink: boolean, code: string) => void;
      addNewLink: (url: string, callback?: () => void) => Promise<void>;
      removeLink: (code: string) => Promise<void>;
    }
  | undefined;
