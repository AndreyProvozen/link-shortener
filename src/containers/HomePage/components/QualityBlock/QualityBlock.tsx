import { FC } from 'react';

import QualitiesList from './QualityList';

interface Props {
  containerClasses?: string;
}

const QualitiesBlock: FC<Props> = () => (
  <div className="container max-w-screen-desktop mx-auto text-center px-5 my-8">
    <h2 className="text-4xl font-bold mb-5">Our qualities</h2>
    <QualitiesList />
  </div>
);

export default QualitiesBlock;
