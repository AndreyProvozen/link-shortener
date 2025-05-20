import { FC, ReactNode } from 'react';

import { Drover } from '@/atoms';
import { MenuIcon } from '@/icons';
import { useHeaderData } from '@/providers';

export interface MenuProps {
  name?: string;
  link?: string;
  handleFunction?: () => void;
  component?: ReactNode;
  children?: MenuProps[];
}

interface Props {
  textBlack?: boolean;
}

const MobileHeader: FC<Props> = ({ textBlack }) => {
  const { navFields, isOpenDrover, setIsOpenDrover } = useHeaderData();

  const handleToggle = () => setIsOpenDrover(prev => !prev);

  return (
    <div>
      <MenuIcon
        onClick={handleToggle}
        cursor="pointer"
        className={`${textBlack ? 'fill-black-900' : 'fill-white-50'}`}
      />
      <Drover isOpen={isOpenDrover} handleToggle={handleToggle} menu={navFields} />
    </div>
  );
};

export default MobileHeader;
