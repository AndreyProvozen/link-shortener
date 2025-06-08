import { FC } from 'react';

import { Pagination } from '@/atoms';
import { Header, LinksListItem, LinksListSkeleton, PaginationSkeleton } from '@/components';
import { LINKS_LIST_PER_PAGE } from '@/constants';
import { HeroBGCircleScatter } from '@/icons';
import { useLinksList, useLinksListActions } from '@/providers';

import { SearchSection, NotFoundSection } from './components';

const LinksListPage: FC = () => {
  const { favoriteList, isLoading, linksList, totalCount } = useLinksList();
  const { toggleFavorite } = useLinksListActions();

  return (
    <>
      <div className="relative flex flex-col">
        <Header />
        <HeroBGCircleScatter
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        />
        <div className="container max-w-3xl text-center mx-auto text-white-50 z-10 pb-16">
          <h1 className="text-5xl py-5" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>
            Links List Page
          </h1>
          <p className="text-center text-xl mx-5" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>
            Explore a comprehensive list of your links and effortlessly manage them all on the Links List Page. With
            this powerful tool, you can stay organized, keep track of your important URLs, and optimize your online
            presence.
          </p>
        </div>
      </div>
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
            linkClassName="text-2xl text-white rounded-md hover:bg-lightPink bg-pink px-6 py-2.5 active:bg-darkPink"
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
