import { FC } from 'react';

import { FullScreenWrapper } from '@/components';
import { Link } from '@/atoms';

interface Props {
  statusCode: number;
}

const Error: FC<Props> = ({ statusCode }) => (
  <FullScreenWrapper blobsColor="#c1002a">
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
