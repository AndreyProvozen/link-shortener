import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  isOpened: boolean;
  onClick: () => void;
}

const AccordionItem: FC<Props> = ({ title, description, isOpened, onClick }) => (
  <div>
    <button className="p-2 cursor-pointer flex justify-between border-b-2 w-full hover:bg-pink-300" onClick={onClick}>
      <h3 className="font-bold text-lg">{title}</h3>
      <svg
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        className={clsx('transform transition ease-out duration-300', { 'rotate-180': isOpened })}
      >
        <use href="#chevron-icon" />
      </svg>
    </button>
    <div
      className={`transition-max-height ease-in-out duration-300 text-black-500 overflow-hidden ${
        isOpened ? 'max-h-[1000px]' : 'max-h-0'
      }`}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

export default AccordionItem;
