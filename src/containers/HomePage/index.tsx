import { Accordion } from '@/atoms';
import { Header } from '@/components';
import { MOCK_QUESTIONS, MOCK_TEXT_WITH_IMAGE } from '@/constants';
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
    <div className="container max-w-screen-desktop mx-auto px-5 my-10">
      <p className="text-4xl font-bold mb-5 text-center">Frequently Asked Questions</p>
      <Accordion accordionItems={MOCK_QUESTIONS} />
    </div>
  </>
);

export default HomePage;
