import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';

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
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden text-black-500"
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default AccordionItem;
