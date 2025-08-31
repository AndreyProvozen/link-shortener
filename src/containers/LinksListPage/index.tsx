import type { FC } from 'react';

import { Pagination } from '@/atoms';
import { HeroSection, LinksListItem, LinksListSkeleton, PaginationSkeleton } from '@/components';
import { BACKGROUND_VARIANTS, LINKS_LIST_PER_PAGE } from '@/constants';
import { useFavoriteList } from '@/providers/FavoriteListProvider';
import { useLinksList } from '@/providers/LinksListProvider';

import { SearchSection, NotFoundSection } from './components';

const notFoundVariantsData = {
  default: { title: 'You don’t have any links in your collection yet', linkText: 'Add your first one today' },
  favorite: {
    title: 'Your favorites list does not contain any links',
    linkText: 'Add your first one today',
  },
  search: { title: 'No results were found for your current search', linkText: 'Try a different search' },
};

const LinksListPage: FC = () => {
  const { isLoading, linksList, totalCount, notFoundVariant } = useLinksList();
  const { favoriteList, toggleFavorite } = useFavoriteList();

  const { linkText, title } = notFoundVariantsData[notFoundVariant] || notFoundVariantsData.default;

  return (
    <>
      <HeroSection
        variant={BACKGROUND_VARIANTS.CIRCLE_SCATTER}
        description="Explore a comprehensive list of your links and effortlessly manage them all on the Links List Page. With
            this powerful tool, you can stay organized, keep track of your important URLs, and optimize your online
            presence."
        title="Links List Page"
      />
      <div className="max-w-screen-container mx-auto w-full px-5 my-8">
        <SearchSection />
        {isLoading ? (
          <>
            <LinksListSkeleton quantity={LINKS_LIST_PER_PAGE} />
            <PaginationSkeleton />
          </>
        ) : totalCount === 0 ? (
          <NotFoundSection title={title} href="/" linkText={linkText} />
        ) : (
          <>
            {linksList.map(linkData => {
              const isFavorite = favoriteList?.includes(linkData.code);

              return (
                <LinksListItem
                  {...linkData}
                  toggleFavorite={() => toggleFavorite(isFavorite, linkData.code)}
                  isFavorite={isFavorite}
                  containerClasses="border-b border-white-300"
                  key={linkData.code}
                />
              );
            })}
            {totalCount > LINKS_LIST_PER_PAGE && (
              <Pagination count={totalCount} className="mt-5" perPage={LINKS_LIST_PER_PAGE} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default LinksListPage;
