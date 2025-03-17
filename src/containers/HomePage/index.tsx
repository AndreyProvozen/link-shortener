import { Header } from '@/components';
import { HeroBGWaves } from '@/icons';
import { QualityBlock, InfoBlock } from './components';

const HomePage = () => (
  <>
    <div className="relative min-h-screen flex flex-col ">
      <Header />
      <HeroBGWaves className="absolute inset-0 w-full h-full" preserveAspectRatio="none" />
    </div>
    <QualityBlock />
    <InfoBlock btnHref="#" btnText="Get lorem started" title="lorem ipsi dolar sit amer" />
  </>
);

export default HomePage;
