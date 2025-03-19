import { FC } from 'react';

import { Link } from '@/atoms';
import { FullScreenWrapper, BACKGROUND_VARIANTS } from '@/components';

interface Props {
  statusCode: number;
}

const Error: FC<Props> = ({ statusCode }) => (
  <FullScreenWrapper patternColor="#ff1a1a" backgroundVariant={BACKGROUND_VARIANTS.BLOB}>
    <p className="text-[160px] mobile:text-[112px] leading-none font-bold">{statusCode}</p>
    <p className="text-2xl font-bold mobile:text-lg mobile:leading-none">OPPS! PAGE NOT FOUND</p>
    <p className="text-2xl text-black-500 mb-5 mobile:text-lg">
      {`An error occurred on the ${statusCode.toString().startsWith('4') ? 'client' : 'server'}`}
    </p>
    <Link href="/" variant="button">
      Go to home
    </Link>
  </FullScreenWrapper>
);

export default Error;
