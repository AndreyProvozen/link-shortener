import { useRouter } from 'next/router';
import { useEffect, useState, type FC, type ChangeEvent } from 'react';

import { Input } from '@/atoms';
import { HeartIcon } from '@/icons';

const SearchSection: FC = () => {
  const { query, push, pathname } = useRouter();

  const [link, setLink] = useState(query?.searchString || '');

  const showFavoriteList = query?.search === 'favorite';

  const updateURL = (searchStringParam: string, favoriteParam: string | boolean) => {
    const queryParams = [searchStringParam, favoriteParam].filter(Boolean).join('&');
    const updatedURL = queryParams ? `?${queryParams}` : pathname;

    push(updatedURL);
  };

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout;

    if (link || showFavoriteList) {
      timeoutId = setTimeout(
        () => updateURL(link && `searchString=${link}`, showFavoriteList && 'search=favorite'),
        500
      );

      return () => clearTimeout(timeoutId);
    }
    // TODO: simplify props usage
    updateURL(link && `searchString=${link}`, showFavoriteList && 'search=favorite');

    // NOTE: updateURL as a dependency make dependency cycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link, showFavoriteList]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => setLink(event.target.value);

  return (
    <div className="flex justify-between w-full items-start border-b border-white-300 pb-5 gap-5">
      <Input
        value={link}
        onChange={onSearchChange}
        placeholder="Enter symbols after the last slash in the URL"
        wrapperClassName="max-w-sm"
        className="w-full"
      />
      {/* TODO: rewrite to button from atoms */}
      <button
        className={`border-2 ${
          showFavoriteList ? 'border-pink-500 bg-pink-300/20' : 'border-white-300'
        } px-4 h-11 rounded flex gap-2 items-center`}
        onClick={() => updateURL(link && `searchString=${link}`, !showFavoriteList && 'search=favorite')}
      >
        <HeartIcon width={20} height={20} className={showFavoriteList ? 'fill-pink-500' : 'fill-white-300'} />
        <p className="text-black-500 tablet-small:hidden">Favorite</p>
      </button>
    </div>
  );
};

export default SearchSection;
