import { useState, type ChangeEvent, type FormEvent } from 'react';

import { Button, Input } from '@/atoms';
import { LinksListSkeleton } from '@/components';
import { HOME_PAGE_LINKS_PER_PAGE } from '@/constants';
import { Arrow, HeroBGWaves, Mouse } from '@/icons';
import { useFavoriteList } from '@/providers/FavoriteListProvider';
import { useLinksList, useLinksListActions } from '@/providers/LinksListProvider';

import LinksListItem from '../../../../components/LinksListItem';

const HeroSection = () => {
  const [longLink, setLongLink] = useState('');

  const { linksList, isLoading } = useLinksList();
  const { favoriteList, toggleFavorite } = useFavoriteList();
  const { addNewLink } = useLinksListActions();

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addNewLink(longLink, () => setLongLink(''));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setLongLink(event.target.value);
  const limitedList = linksList.slice(0, HOME_PAGE_LINKS_PER_PAGE);

  return (
    <>
      <HeroBGWaves className="absolute inset-0 w-full h-full" preserveAspectRatio="none" />
      <div className="container max-w-3xl px-5 text-center mx-auto text-lg text-white-50 z-10">
        <div className="mt-7 mb-5 text-white">
          <h1 className="text-5xl">Link Shortener</h1>
          <p className="max-w-lg mx-auto">
            Free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs
          </p>
        </div>
        <form onSubmit={handleOnSubmit} className="mb-8 w-full relative flex gap-2 tablet-small:flex-col">
          <Input
            type="search"
            value={longLink}
            onChange={handleInputChange}
            placeholder="Paste the URL to be shortened"
          />
          <Button type="submit" className="shrink-0 h-12">
            generate link
          </Button>
        </form>
        {isLoading ? (
          <LinksListSkeleton isHomePageList />
        ) : (
          limitedList.map(linkData => {
            const isFavorite = favoriteList.includes(linkData.code);

            return (
              <LinksListItem
                {...linkData}
                toggleFavorite={() => toggleFavorite(isFavorite, linkData.code)}
                isFavorite={isFavorite}
                key={linkData.code}
                isExternalShortLink
                containerClasses="bg-white-50 rounded-md mb-5"
              />
            );
          })
        )}
      </div>
      <div className="absolute tablet-small:hidden animate-bounce bottom-2 left-1/2 -translate-x-1/2 z-10 text-white-50">
        <Mouse width={36} height={36} />
        <Arrow width={24} height={24} className="mx-auto" />
      </div>
    </>
  );
};

export default HeroSection;
