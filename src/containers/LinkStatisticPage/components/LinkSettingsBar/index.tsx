import { useMemo, useState, type FC } from 'react';
import { toast } from 'react-toastify';

import { DeleteLinkModal } from '@/components';
import { useIsMounted } from '@/hooks';
import { ClipBoard, Heart, Trash } from '@/icons';
import { useFavoriteList } from '@/providers/FavoriteListProvider';
import type { FullLinkDataProps } from '@/types';
import { getConfigVariable } from '@/utils';

const API_URL = getConfigVariable('API_URL');

type Props = { link: FullLinkDataProps };

const LinkSettingsBar: FC<Props> = ({ link }) => {
  const isMounted = useIsMounted();

  const { favoriteList, toggleFavorite } = useFavoriteList();

  const [deletedLinkCode, setDeletedLinkCode] = useState<string | false>(false);

  const isFavoriteLink = isMounted && favoriteList.includes(link.code);

  const barData = useMemo(
    () => [
      {
        ariaLabel: 'Copy link button',
        fieldTitle: 'Copy',
        fieldFunction: () => {
          navigator.clipboard.writeText(`${API_URL}/${link.code}`);
          toast.success('Link copied successfully');
        },
        fieldImage: <ClipBoard fill="black" />,
      },
      {
        ariaLabel: 'Delete button',
        fieldTitle: 'Delete',
        fieldFunction: () => setDeletedLinkCode(link.code),
        fieldImage: <Trash fill="black" />,
      },
      {
        ariaLabel: 'Favorite button',
        fieldFunction: () => toggleFavorite(isFavoriteLink, link.code),
        fieldImage: (
          <Heart
            width={24}
            fill={isFavoriteLink ? 'red' : 'none'}
            stroke={isFavoriteLink ? 'red' : 'black'}
            strokeWidth="2"
          />
        ),
      },
    ],
    [isFavoriteLink, link.code, toggleFavorite]
  );

  return (
    <>
      <div className="flex justify-between mt-4 gap-2 items-center tablet:flex-col">
        <div className="flex gap-3">
          <div className="border bg-orange-500/20 border-orange-500 rounded-lg flex gap-2 items-center px-3">
            Total clicks:
            <b>{link.clicked}</b>
          </div>
          <b className="border bg-green-500/20 border-green-500 rounded-lg flex items-center px-3 py-2">
            {new Date(link.createdAt).toDateString()}
          </b>
        </div>
        <div className="flex gap-3 items-center">
          {barData.map(({ fieldTitle, fieldFunction, fieldImage, ariaLabel }) => (
            <button
              key={ariaLabel}
              onClick={fieldFunction}
              aria-label={ariaLabel}
              className="flex border gap-1 rounded-lg p-2 hover:border-pink-300 border-white-300 hover:bg-pink-500/10"
            >
              {fieldImage}
              {fieldTitle && <span className="mobile:hidden">{fieldTitle}</span>}
            </button>
          ))}
        </div>
      </div>
      {!!deletedLinkCode && (
        <DeleteLinkModal setDeletedLinkCode={setDeletedLinkCode} deletedLinkCode={deletedLinkCode} isStatisticPage />
      )}
    </>
  );
};

export default LinkSettingsBar;
