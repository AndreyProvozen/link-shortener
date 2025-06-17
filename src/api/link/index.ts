import type { GetUserLinksReturnProps, LinkProps } from '@/types';
import { customFetch } from '@/utils';

import type { CreateLinkProps, GetLinkByCodeProps, GetUserLinksProps } from './types';

export const createLink = async ({ url }: CreateLinkProps) =>
  await customFetch<LinkProps>('links', { method: 'POST', json: { url } });

export const deleteLink = async (code: string) => await customFetch<LinkProps>(`links/${code}`, { method: 'DELETE' });

export const getLinkByCode = async ({ code, req, res }: GetLinkByCodeProps) => {
  const response = await customFetch(`links/${code}`, { req, res });
  return response;
};

export const getUserLinks = async ({
  limit = 10,
  offset = 0,
  searchString = '',
  favorite,
  req,
  res,
}: GetUserLinksProps) => {
  const query = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` });

  if (searchString) query.append('searchString', searchString);
  if (favorite) query.append('favorite', 'true');

  return await customFetch<GetUserLinksReturnProps>(`links?${query.toString}`, { req, res });
};
