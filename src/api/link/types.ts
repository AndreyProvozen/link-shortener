import type { PaginationProps, ServerProps } from '@/types';

export type GetUserLinksProps = PaginationProps & ServerProps;

export type CreateLinkProps = { url: string };
