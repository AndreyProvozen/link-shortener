import Link from 'next/link';
import { FC } from 'react';

interface Props {
  btnData: { href: string; text: string };
  title: string;
}

const InfoBlock: FC<Props> = ({ btnData, title }) => (
  <div className="bg-lightBlack text-center py-20 px-3 text-white">
    <div className="text-3xl font-bold mb-10">{title}</div>
    <Link href={btnData.href} className="text-2xl rounded-md hover:bg-lightPink bg-pink px-6 py-2.5 active:bg-darkPink">
      {btnData.text}
    </Link>
  </div>
);

export default InfoBlock;