import Cookies from 'js-cookie';
import { useCallback, useEffect, useMemo, useState, createContext } from 'react';
import { toast } from 'react-toastify';

import { ContextProps, ContextActionsProps } from './types';
import { ProviderProps } from './types';

import { createLink, deleteLink } from '@/api';
import { FAVORITE_LIST_KEY } from '@/constants';

export const LinksListContext = createContext<ContextProps | undefined>(undefined);
export const LinksListActionsContext = createContext<ContextActionsProps | undefined>(undefined);

const LinksListProvider = ({ children, initialLinksData }: ProviderProps) => {
  const [favoriteList, setFavoriteList] = useState<string[]>(JSON.parse(Cookies.get(FAVORITE_LIST_KEY) || '[]'));
  const [linksList, setLinksList] = useState(initialLinksData.data);
  const [totalCount, setTotalCount] = useState(initialLinksData.totalCount);
  const [isLoading] = useState(false);

  useEffect(() => {
    Cookies.set(FAVORITE_LIST_KEY, JSON.stringify(favoriteList));
  }, [favoriteList]);

  const addNewLink = useCallback(async (url: string, callback?: () => void) => {
    const response = await createLink({ url });

    if (response?.message) {
      toast.error(response.message);
      return;
    }

    setLinksList(prev => [response, ...prev]);
    setTotalCount(prev => prev + 1);
    toast.success('Link added successfully');
    callback?.();
  }, []);

  const removeLink = useCallback(async (code: string) => {
    const linkData = await deleteLink(code);

    if (linkData) {
      setLinksList(prev => prev.filter(link => link.code !== code));
      setTotalCount(prev => prev - 1);
    }
  }, []);

  const toggleFavorite = useCallback((isFavoriteLink: boolean, code: string) => {
    if (isFavoriteLink) {
      setFavoriteList(prev => prev.filter(item => item !== code));
      toast.success('Link has been removed from the favorites list');

      return null;
    }

    setFavoriteList(prev => [...prev, code]);
    toast.success('Link has been added to the favorites list');
  }, []);

  const value = useMemo(
    () => ({ linksList, favoriteList, totalCount, isLoading }),
    [linksList, favoriteList, totalCount, isLoading]
  );

  const actions = useMemo(() => ({ toggleFavorite, addNewLink, removeLink }), [addNewLink, removeLink, toggleFavorite]);

  return (
    <LinksListContext.Provider value={value}>
      <LinksListActionsContext.Provider value={actions}>{children}</LinksListActionsContext.Provider>
    </LinksListContext.Provider>
  );
};

export default LinksListProvider;
