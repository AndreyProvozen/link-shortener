import { ReactNode } from 'react';

import { MenuProps } from '@/components';

export type ContextProps = { navFields: MenuProps[] } | undefined;
export type ProviderProps = { children: ReactNode };
