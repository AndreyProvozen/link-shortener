import { createContext, useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { ContextProps, ProviderProps } from './types';

import { createLink, deleteLink } from '@/api';

const LinksListContext = createContext<ContextProps>(undefined);

export const LinksListProvider = ({ children, initialLinksData }: ProviderProps) => {
  const [linksList, setLinksList] = useState(initialLinksData.data);
  const [totalCount, setTotalCount] = useState(initialLinksData.totalCount);

  const addNewLink = async (url: string, callback?: () => void) => {
    const response = await createLink({ url });

    if (response?.message) {
      toast.error(response.message);
      return;
    }

    setLinksList(prev => [response, ...prev]);
    setTotalCount(prev => prev + 1);
    toast.success('Link added successfully');
    callback?.();
  };

  const removeLink = async (code: string) => {
    const linkData = await deleteLink(code);

    if (linkData) {
      setLinksList(prev => prev.filter(link => link.code !== code));
      setTotalCount(prev => prev - 1);
    }
  };

  const value = useMemo(() => ({ linksList, totalCount, addNewLink, removeLink }), [linksList, totalCount]);

  return <LinksListContext.Provider value={value}>{children}</LinksListContext.Provider>;
};

export const useLinksList = () => {
  const context = useContext(LinksListContext);

  if (!context) throw new Error('useLinksList must be used within a LinksListProvider');

  return context;
};
