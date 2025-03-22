import { Accordion } from '@/atoms';
import { Footer, Header } from '@/components';
import { MOCK_QUESTIONS, MOCK_TEXT_WITH_IMAGE } from '@/constants';

import { QualityBlock, InfoBlock, TextWithImage, HeroSection } from './components';

const HomePage = () => (
  <>
    <div className="relative min-h-screen flex flex-col ">
      <Header />
      <HeroSection />
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
    <InfoBlock btnHref="/auth" btnText="Sign up" title="Sign up to see full link statistic" />
    <div className="container max-w-screen-desktop mx-auto px-5 my-10">
      <p className="text-4xl font-bold mb-5 text-center">Frequently Asked Questions</p>
      <Accordion accordionItems={MOCK_QUESTIONS} />
    </div>
    <Footer />
  </>
);

export default HomePage;
