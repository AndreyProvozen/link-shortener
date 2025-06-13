import { useRef, useState, type FC, type ReactElement, type RefObject } from 'react';

import { useClickOutside } from '@/hooks';

import DropdownPopUp, { type DropdownDataProps } from './DropdownPopUp';
import { DROPDOWN_TEST_IDS } from './testIds';

interface Props {
  dropdownData: DropdownDataProps[];
  placeholder: ReactElement;
  listContainerClasses?: string;
}

const Dropdown: FC<Props> = ({ dropdownData = [], placeholder, listContainerClasses = 'right-0 w-72' }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef as RefObject<HTMLElement>, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prevState => !prevState);

  return (
    <div className="relative text-white-50" ref={dropdownRef}>
      <button data-testid={DROPDOWN_TEST_IDS.TOGGLE_BUTTON} onClick={toggleDropdown} className="cursor-pointer flex">
        {placeholder}
      </button>
      {isOpen && (
        <DropdownPopUp dropdownData={dropdownData} listContainerClasses={listContainerClasses} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default Dropdown;
