import { FC } from 'react';

import { FullScreenWrapper } from '@/components';
import { Link } from '@/atoms';

interface Props {
  statusCode: number;
}

const Error: FC<Props> = ({ statusCode }) => (
  <FullScreenWrapper blobsColor="#c1002a">
    <div className="bg-white-50 z-10 rounded-lg w-full max-w-md text-center mx-3 py-7">
      <p className="text-[10rem] max-mobile:text-[8rem] leading-none font-bold">{statusCode}</p>
      <p className="text-2xl font-bold max-mobile:text-base">OPPS! PAGE NOT FOUND</p>
      <p className="text-2xl text-black-500 mb-5 max-mobile:text-base">
        {`An error occurred on the ${statusCode.toString().startsWith('4') ? 'client' : 'server'}`}
      </p>
      <Link href="/" variant="button" className="mt-2">
        Go to home
      </Link>
    </div>
  </FullScreenWrapper>
);

export default Error;
