import clsx from 'clsx';
import { FC } from 'react';

import { DIVIDER_TEST_IDS } from './testids';

interface Props {
  text?: string;
  className?: string;
}

const Divider: FC<Props> = ({ text, className = '' }) => (
  <div data-testid={DIVIDER_TEST_IDS.CONTAINER} className={clsx('relative flex items-center', className)}>
    <div className="flex-grow border-t-2 border-white-300" />
    {text && <span className="flex-shrink mx-4 text-white-500">{text}</span>}
    <div className="flex-grow border-t-2 border-white-300" />
  </div>
);

export default Divider;
