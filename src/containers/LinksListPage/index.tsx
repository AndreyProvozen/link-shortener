import { FC } from 'react';

import { Header } from '@/components';
import { HeroBGCircleScatter } from '@/icons';
// import LinksListSkeleton from '@/components/Skeleton/LinksListSkeleton';
// import PaginationSkeleton from '@/components/Skeleton/PaginationSkeleton';
// import { useGetLinksQuery } from '@/store/api/links.api';
// import { useFetchLinksBySearchStringQuery } from '@/store/api/search.api';

const LinksList: FC = () => {
  // const { query } = useRouter();

  // const [perPage] = useState(9);

  // const favorite = query?.search === 'favorite';
  // const searchString = query?.searchString as string;
  // const skip = !favorite && !searchString;

  // const sortedLinkData = useFetchLinksBySearchStringQuery(
  //   { favorite, searchString },
  //   { refetchOnMountOrArgChange: true, skip }
  // );

  // const linkData = useGetLinksQuery({ perPage: 10 }, { skip: !skip });
  // const { data, isLoading } = skip ? linkData : sortedLinkData;

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
          <p className="text-center text-xl" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>
            Explore a comprehensive list of your links and effortlessly manage them all on the Links List Page. With
            this powerful tool, you can stay organized, keep track of your important URLs, and optimize your online
            presence.
          </p>
        </div>
      </div>
      {/* <div className="max-w-screen-desktop mx-auto w-full px-5 my-10">
        <FiltersBlock />
        {isLoading ? (
          <>
            <LinksListSkeleton quantity={5} />
            <PaginationSkeleton />
          </>
        ) : data.count === 0 ? (
          <NotFoundSection
            title="You currently do not have any links in your collection."
            href="/"
            linkClassName="text-2xl text-white rounded-md hover:bg-lightPink bg-pink px-6 py-2.5 active:bg-darkPink"
            linkText="Create new link"
          />
        ) : (
          <LinkDataBlock
            linksList={data.linksList}
            count={data.count}
            perPage={perPage}
            linkContainerClasses="border-b border-gray"
            showFiltersAndPagination={true}
          />
        )}
      </div> */}
    </>
  );
};

export default LinksList;
