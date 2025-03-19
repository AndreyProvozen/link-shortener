import { Header } from '@/components';
import { MOCK_TEXT_WITH_IMAGE } from '@/constants';
import { HeroBGWaves } from '@/icons';

import { QualityBlock, InfoBlock, TextWithImage } from './components';

const HomePage = () => (
  <>
    <div className="relative min-h-screen flex flex-col ">
      <Header />
      <HeroBGWaves className="absolute inset-0 w-full h-full" preserveAspectRatio="none" />
    </div>
    <QualityBlock />
    <InfoBlock btnHref="#" btnText="Get lorem started" title="lorem ipsi dolar sit amer" />
    {MOCK_TEXT_WITH_IMAGE.map(({ listData, linkData, text, title }, index) => (
      <TextWithImage
        key={title}
        linkData={linkData}
        imageFirst={index % 2 !== 0}
        title={title}
        containerClasses="my-10"
        featuresListData={listData}
        text={text}
      />
    ))}
  </>
);

export default HomePage;
