import type { IncomingMessage, ServerResponse } from 'http';

import type { ReactNode } from 'react';

export interface MenuProps {
  name?: string;
  link?: string;
  handleFunction?: () => void;
  component?: ReactNode;
  children?: MenuProps[];
}

export type PaginationProps = { limit?: number; offset?: number };
export type ServerProps = { req?: IncomingMessage; res?: ServerResponse };
export type User = { id: string; email: string; username: string; isActivated: string };
export type GetUserLinksReturnProps = { totalCount: number; data: LinkProps[] };

export type LinkProps = {
  clicked: number;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
};

export type MetricsProps = { title: string; data: Record<string, number> };

export type FullLinkDataProps = LinkProps & { metrics: MetricsProps[] };
