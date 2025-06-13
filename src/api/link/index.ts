import { customFetch } from '@/utils';

import type { CreateLinkProps, GetUserLinksProps, GetUserLinksReturnProps, LinkProps } from './types';

export const createLink = async ({ url }: CreateLinkProps) =>
  await customFetch<LinkProps>('links', { method: 'POST', json: { url } });

export const deleteLink = async (code: string) => await customFetch<LinkProps>(`links/${code}`, { method: 'DELETE' });

export const getLinkByCode = async (code: string) => {
  const response = await customFetch(`links/${code}`);
  return response;
};

export const getUserLinks = async ({ limit = 10, offset = 0, req, res }: GetUserLinksProps) => {
  const query = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` }).toString();

  return await customFetch<GetUserLinksReturnProps>(`links?${query}`, { req, res });
};
