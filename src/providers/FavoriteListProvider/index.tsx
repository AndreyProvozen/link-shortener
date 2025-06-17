import Cookies from 'js-cookie';
import { useCallback, useEffect, useMemo, useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';

import { FAVORITE_LIST_KEY } from '@/constants';

import type { ContextProps, ProviderProps } from './types';

const FavoriteListContext = createContext<ContextProps | undefined>(undefined);

const FavoriteListProvider = ({ children }: ProviderProps) => {
  const [favoriteList, setFavoriteList] = useState<string[]>(JSON.parse(Cookies.get(FAVORITE_LIST_KEY) || '[]'));

  useEffect(() => {
    Cookies.set(FAVORITE_LIST_KEY, JSON.stringify(favoriteList));
  }, [favoriteList]);

  const toggleFavorite = useCallback((isFavoriteLink: boolean, code: string) => {
    if (isFavoriteLink) {
      setFavoriteList(prev => prev.filter(item => item !== code));
      toast.success('Link has been removed from the favorites list');

      return null;
    }

    setFavoriteList(prev => [...prev, code]);
    toast.success('Link has been added to the favorites list');
  }, []);

  const value = useMemo(() => ({ favoriteList, toggleFavorite }), [favoriteList, toggleFavorite]);

  return <FavoriteListContext.Provider value={value}>{children}</FavoriteListContext.Provider>;
};

export default FavoriteListProvider;

export const useFavoriteList = () => {
  const context = useContext(FavoriteListContext);

  if (!context) throw new Error('useLinksList must be used within a LinksListProvider');

  return context;
};
