import type { PaginationProps, ServerProps } from '@/types';

export type GetUserLinksProps = PaginationProps & ServerProps & { searchString?: string; favorite?: boolean };
export type GetLinkByCodeProps = ServerProps & { code: string };

export type CreateLinkProps = { url: string };
