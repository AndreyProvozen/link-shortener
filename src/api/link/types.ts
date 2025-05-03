import { ServerProps } from '../auth/types';

type PaginationProps = { limit?: number; offset?: number };

export type LinkProps = {
  clicked: number;
  code: string;
  createdAt: string;
  metrics: any[];
  updatedAt: string;
  url: string;
};

export type GetUserLinksProps = PaginationProps & ServerProps;
export type GetUserLinksReturnProps = { totalCount: number; data: LinkProps[] };

export type CreateLinkProps = { url: string };
