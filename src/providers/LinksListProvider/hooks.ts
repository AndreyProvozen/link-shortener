import { useContext } from 'react';

import { LinksListActionsContext, LinksListContext } from './LinksListProvider';

export const useLinksList = () => {
  const context = useContext(LinksListContext);

  if (!context) throw new Error('useLinksList must be used within a LinksListProvider');

  return context;
};

export const useLinksListActions = () => {
  const context = useContext(LinksListActionsContext);

  if (!context) throw new Error('useLinksListActions must be used within a LinksListProvider');

  return context;
};
