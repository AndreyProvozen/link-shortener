import { FC } from 'react';

import { LinkProps } from '@/api/link/types';
import { Link } from '@/atoms';
import { getConfigVariable } from '@/utils';

interface Props extends Pick<LinkProps, 'code' | 'url' | 'clicked'> {
  containerClasses?: string;
  isExternalShortLink?: boolean;
  isFavorite?: boolean;
}

const API_URL = getConfigVariable('API_URL');

const LinksListItem: FC<Props> = ({ containerClasses, isExternalShortLink, code, url, clicked, isFavorite }) => {
  const shortLink = `${API_URL}/${code}`;

  return (
    <div className={`flex text-start items-center justify-between p-5 gap-2 ${containerClasses}`}>
      <div className="flex flex-col w-full max-w-md">
        <Link
          target={isExternalShortLink ? '_blank' : '_self'}
          variant="secondary"
          href={`${isExternalShortLink ? shortLink : `/links/${code}`}`}
          className="line-clamp-1 break-all"
        >
          {shortLink}
        </Link>
        <p className="max-w-sm text-white-500 line-clamp-1 break-all text-sm">{url}</p>
      </div>
      <div className="flex items-center tablet-small:hidden">
        <div className="pr-10 pl-5 text-black-900">{clicked}</div>
        <svg
          onClick={() => {}}
          viewBox="0 0 24 24"
          width="24px"
          className="ml-auto cursor-pointer hover:scale-110 transition-all"
        >
          <use href={isFavorite ? '#heart-icon' : '#heart-outline-icon'} />
        </svg>
      </div>
      <div className="text-black-900">Settings</div>
    </div>
  );
};

export default LinksListItem;
