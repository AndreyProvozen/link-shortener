import { useRouter } from 'next/router';
import { useEffect, useRef, useState, type FC, type ChangeEvent, useMemo } from 'react';

import { getUserLinks } from '@/api/link';
import { Input } from '@/atoms';
import { Heart } from '@/icons';
import { useLinksListActions } from '@/providers/LinksListProvider';

const DEBOUNCE_DELAY = 500;

const SearchSection: FC = () => {
  const { query, push, pathname } = useRouter();
  const { setIsLoading, setLinksList, setTotalCount } = useLinksListActions();

  const showFavoriteList = useMemo(() => query.favorite === 'true', [query.favorite]);
  const initialSearchString = useMemo(() => (query.searchString as string) ?? '', [query.searchString]);

  const [searchString, setSearchString] = useState(initialSearchString);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updateURL = (searchStr: string, isFavorite?: boolean) => {
    const newQuery: Record<string, string> = {};

    if (searchStr) newQuery.searchString = searchStr;
    if (isFavorite) newQuery.favorite = 'true';

    push({ pathname, query: newQuery }, undefined, { shallow: true });
  };

  useEffect(() => {
    updateURL(searchString, showFavoriteList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, showFavoriteList]);

  useEffect(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

    debounceTimerRef.current = setTimeout(() => {
      const fetchLinks = async () => {
        setIsLoading(true);

        try {
          const data = await getUserLinks({ searchString, favorite: showFavoriteList });

          setLinksList(data.data);
          setTotalCount(data.totalCount);
        } finally {
          setIsLoading(false);
        }
      };

      fetchLinks();
    }, DEBOUNCE_DELAY);

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, [searchString, showFavoriteList, setIsLoading, setLinksList, setTotalCount]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value);
  const handleFavoriteClick = () => updateURL(searchString, !showFavoriteList);

  return (
    <div className="flex justify-between w-full items-start border-b border-white-300 pb-5 gap-5">
      <Input
        value={searchString}
        onChange={onSearchChange}
        placeholder="Enter symbols after the last slash in the URL"
        wrapperClassName="max-w-sm"
        className="w-full"
      />
      {/* TODO: rewrite to button from atoms */}
      <button
        aria-label="Toggle favorite"
        className={`border-2 ${
          showFavoriteList ? 'border-pink-500 bg-pink-300/20' : 'border-white-300'
        } px-4 h-11 rounded flex gap-2 items-center`}
        onClick={handleFavoriteClick}
      >
        <Heart width={20} height={20} className={showFavoriteList ? 'fill-pink-500' : 'fill-white-300'} />
        <p className="text-black-500 tablet-small:hidden">Favorite</p>
      </button>
    </div>
  );
};

export default SearchSection;
