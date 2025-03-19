import { FC } from 'react';

import { CloseIcon } from '@/icons';

import { DROVER_TEST_IDS } from './testIds';

interface Props {
  level: number;
  handleToggle: () => void;
  backToPrevLevel: () => void;
}

const DroverHeader: FC<Props> = ({ level, handleToggle, backToPrevLevel }) => (
  <div className="flex justify-between items-center p-4 border-b">
    {level > 1 ? (
      <button onClick={backToPrevLevel} className="font-bold text-2xl">
        back
      </button>
    ) : (
      <h2 className="font-bold text-2xl">Menu</h2>
    )}
    <button
      data-testid={DROVER_TEST_IDS.CLOSE_BUTTON}
      className="text-gray-500 focus:outline-none"
      onClick={handleToggle}
      aria-label="Close button"
    >
      <CloseIcon />
    </button>
  </div>
);

export default DroverHeader;
