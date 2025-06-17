import type { PropsWithChildren } from 'react';

export type ProviderProps = PropsWithChildren;

export type ContextProps =
  | {
      toggleFavorite: (isFavoriteLink: boolean, code: string) => void;
      favoriteList: string[];
    }
  | undefined;
