import clsx from 'clsx';
import { FC, useState } from 'react';

import { LinkProps } from '@/api/link/types';
import { Link } from '@/atoms';
import { DeleteLinkModal, SettingsDropDown } from '@/components';
import { useIsMounted } from '@/hooks';
import { EyeIcon } from '@/icons';
import { getConfigVariable } from '@/utils';

import { LINKS_LIST_ITEM_TEST_IDS } from './testIds';

interface Props extends Pick<LinkProps, 'code' | 'url' | 'clicked'> {
  toggleFavorite: () => void;
  containerClasses?: string;
  isExternalShortLink?: boolean;
  isFavorite?: boolean;
}

const API_URL = getConfigVariable('API_URL');

const LinksListItem: FC<Props> = ({
  toggleFavorite,
  containerClasses,
  isExternalShortLink,
  code,
  url,
  clicked,
  isFavorite,
}) => {
  const isMounted = useIsMounted();

  const [deletedLinkCode, setDeletedLinkCode] = useState<string | false>(false);

  const shortLink = `${API_URL}/${code}`;

  return (
    <div className={clsx('flex text-start items-center justify-between p-5 gap-2', containerClasses)}>
      <div className="flex flex-col w-full max-w-md">
        <Link
          data-testid={LINKS_LIST_ITEM_TEST_IDS.SHORT_LINK}
          target={isExternalShortLink ? '_blank' : '_self'}
          variant="secondary"
          href={`${isExternalShortLink ? shortLink : `/links/${code}`}`}
          className="line-clamp-1 break-all"
        >
          {shortLink}
        </Link>
        <p className="max-w-sm text-white-500 line-clamp-1 break-all text-sm">{url}</p>
      </div>
      <div className="text-black-900 flex items-center gap-2 tablet-small:hidden">
        {clicked} <EyeIcon />
      </div>
      <div className="flex gap-2">
        <svg
          data-testid={LINKS_LIST_ITEM_TEST_IDS.FAVORITE}
          onClick={toggleFavorite}
          viewBox="0 0 24 24"
          width="24px"
          className="ml-auto cursor-pointer hover:scale-110 transition-all tablet-small:hidden"
        >
          <use
            data-testid={LINKS_LIST_ITEM_TEST_IDS.FAVORITE_USE}
            href={isMounted && isFavorite ? '#heart-icon' : '#heart-outline-icon'}
          />
        </svg>
        <SettingsDropDown code={code} onDelete={() => setDeletedLinkCode(code)} />
      </div>
      {!!deletedLinkCode && (
        <DeleteLinkModal setDeletedLinkCode={setDeletedLinkCode} deletedLinkCode={deletedLinkCode} />
      )}
    </div>
  );
};

export default LinksListItem;
