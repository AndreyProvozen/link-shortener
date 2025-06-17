import type { FC } from 'react';

import { Link } from '@/atoms';
import { Footer, HeroSection } from '@/components';
import type { FullLinkDataProps } from '@/types';
import { getConfigVariable } from '@/utils';

import { NotFoundSection } from '../LinksListPage/components';

import { LinkSettingsBar } from './components';

// import { ChartBlock, HeroBlock, LinkSettingsBar, NotFoundSection } from '@/components';

const API_URL = getConfigVariable('API_URL');

type Props = { linkData: FullLinkDataProps };

const LinkStatistic: FC<Props> = ({ linkData }) => {
  const shortLink = `${API_URL}/${linkData?.code}`;

  return (
    <>
      <HeroSection
        title="Link Page"
        description="View detailed statistics for your shortened links with our Link Shortener's statistics page. Track
            clicks, locations, and referral sources to gain insights on your link's performance."
      />
      {linkData && (
        <div className="container max-w-screen-desktop-small mx-auto px-5">
          <div className="bg-white-300/20 w-full tablet:text-center rounded-lg border border-white-300 p-5 my-8 hover:border-pink-500 hover:shadow-lg">
            <div className="pb-5 border-b border-white-300 text-lg font-bold truncate">{linkData.url}</div>
            <Link variant="secondary" href={shortLink} className="mt-5 border-b border-white-300 pb-5 w-full truncate">
              {shortLink}
            </Link>
            <LinkSettingsBar link={linkData} />
          </div>
          {linkData.metrics.length ? (
            // <ChartBlock metrics={linkData.metrics} />
            <div>None</div>
          ) : (
            <NotFoundSection
              title="No one has followed this link before you. Be the first to know the statistics"
              href={shortLink}
              linkText={shortLink}
              linkVariant="secondary"
            />
          )}
        </div>
      )}
      <Footer containerClasses="mt-10" />
    </>
  );
};

export default LinkStatistic;
