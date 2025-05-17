import { FC, ReactNode, useState } from 'react';

import { Drover } from '@/atoms';
import { MenuIcon } from '@/icons';

import useHeaderConfig from './useHeaderConfig';

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
  const { navFields } = useHeaderConfig(true);
  const [isOpenDrover, setIsOpenDrover] = useState(false);

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
