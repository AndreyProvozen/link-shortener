import type { FC } from 'react';

import { Pagination } from '@/atoms';
import { HeroSection, LinksListItem, LinksListSkeleton, PaginationSkeleton } from '@/components';
import { BACKGROUND_VARIANTS, LINKS_LIST_PER_PAGE } from '@/constants';
import { useFavoriteList } from '@/providers/FavoriteListProvider';
import { useLinksList } from '@/providers/LinksListProvider';

import { SearchSection, NotFoundSection } from './components';

const LinksListPage: FC = () => {
  const { isLoading, linksList, totalCount } = useLinksList();
  const { favoriteList, toggleFavorite } = useFavoriteList();

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
          <NotFoundSection
            title="You currently do not have any links in your collection."
            href="/"
            linkText="Create new link"
          />
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
