import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import type { Dispatch, FC, ReactNode, RefObject, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';

import useClickOutside from '@/hooks/useClickOutside';
import { CloseIcon } from '@/icons';

import { MODAL_WRAPPER_TEST_IDS } from './testIds';

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  contentClasses?: string;
  children: ReactNode;
}

const ModalWrapper: FC<Props> = ({ setIsModalOpen, children, contentClasses }) => {
  const [isVisible, setIsVisible] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 350);
  };

  useClickOutside(modalRef as RefObject<HTMLElement>, handleClose);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.dialog
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black-900 z-50 bg-opacity-75"
          data-testid={MODAL_WRAPPER_TEST_IDS.OVERLAY}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className={clsx('overflow-y-auto bg-white-50 rounded-lg relative p-6 mx-4', contentClasses)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <button
              data-testid={MODAL_WRAPPER_TEST_IDS.CLOSE_BUTTON}
              className="absolute top-2 right-2 p-1"
              onClick={handleClose}
            >
              <CloseIcon fill="#000" width="24px" height="24px" />
            </button>
            {children}
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;
