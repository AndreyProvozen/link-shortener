import { Link } from '@/atoms';
import { FC } from 'react';

interface Props {
  btnHref: string;
  btnText: string;
  title: string;
}

const InfoBlock: FC<Props> = ({ btnHref, btnText, title }) => (
  <div className="bg-black-900 text-center py-20 px-3 text-white-50">
    <p className="text-3xl font-bold mb-10">{title}</p>
    <Link href={btnHref} variant="button">
      {btnText}
    </Link>
  </div>
);

export default InfoBlock;
