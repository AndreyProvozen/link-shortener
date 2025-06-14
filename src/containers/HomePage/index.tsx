import { Accordion } from '@/atoms';
import { Footer, Header } from '@/components';
import { GUEST_INFO_BLOCK, LOGGED_INFO_BLOCK, MOCK_QUESTIONS, MOCK_TEXT_WITH_IMAGE } from '@/constants';
import { useUser } from '@/providers/UserProvider';

import { QualityBlock, InfoBlock, TextWithImage, HeroSection } from './components';

const HomePage = () => {
  const { user } = useUser();

  const secondInfoBlockData = user ? LOGGED_INFO_BLOCK : GUEST_INFO_BLOCK;

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <HeroSection />
      </div>
      <QualityBlock />
      <InfoBlock btnHref="#" btnText="Learn more about us" title="Discover who we are and what we do" />
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
      <InfoBlock {...secondInfoBlockData} />
      <div className="container max-w-screen-desktop mx-auto px-5 my-10">
        <p className="text-4xl font-bold mb-5 text-center">Frequently Asked Questions</p>
        <Accordion accordionItems={MOCK_QUESTIONS} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
