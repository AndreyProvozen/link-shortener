import { useEffect, useState, type FC } from 'react';

import type { MenuProps } from '@/types';

import DroverContent from './DroverContent';
import DroverHeader from './DroverHeader';
import { DROVER_TEST_IDS } from './testIds';

interface Props {
  isOpen: boolean;
  handleToggle: () => void;
  menu: MenuProps[];
}

const Drover: FC<Props> = ({ isOpen, handleToggle, menu }) => {
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState([menu]);

  const selectLevel = (nextLevel: number, menu: MenuProps[]) => {
    setLevel(nextLevel);
    setCurrentMenu(l => {
      l[level] = menu;
      return l;
    });
  };

  const backToPrevLevel = () => {
    setLevel(prevLevel => prevLevel - 1);
    setCurrentMenu(prevLevel => prevLevel.slice(0, level - 1));
  };

  useEffect(() => {
    if (!isOpen) {
      setLevel(1);
      setCurrentMenu([menu]);
    }
  }, [isOpen, menu]);

  return (
    <div className="relative text-white">
      <div
        data-testid={DROVER_TEST_IDS.ROOT}
        className={`${
          isOpen ? 'right-0' : 'right-full'
        } fixed z-40 top-0 w-full h-screen bg-black-500 ease-in-out transition-all duration-500`}
      >
        <DroverHeader level={level} handleToggle={handleToggle} backToPrevLevel={backToPrevLevel} />
        <DroverContent selectLevel={selectLevel} currentMenu={currentMenu} level={level} />
      </div>
    </div>
  );
};

export default Drover;
