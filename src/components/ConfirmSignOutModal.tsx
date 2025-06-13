import type { Dispatch, FC, SetStateAction } from 'react';

import { ModalWrapper } from '@/atoms';
import { useHeaderData, useUser } from '@/providers';

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ConfirmSignOutModal: FC<Props> = ({ setIsModalOpen }) => {
  const { onLogout } = useUser();
  const { setIsOpenDrover } = useHeaderData();

  const handleSubmit = () => {
    onLogout();
    setIsModalOpen(false);
    setIsOpenDrover(false);
  };

  return (
    <ModalWrapper contentClasses="!p-0" setIsModalOpen={setIsModalOpen}>
      <div className="border-b-2 border-b-white-300 py-2 flex justify-center text-xl font-semibold">Sign out</div>
      <div className="py-4 px-8">
        <p>Are you really want to sign out?</p>
      </div>
      <div className="flex justify-between border-t-2 border-t-white-300">
        <button
          className="hover:bg-red-500 px-4 py-2 w-1/2 border-r-2 border-r-white-300 rounded-bl-lg"
          onClick={() => setIsModalOpen(false)}
        >
          No
        </button>
        <button className="hover:bg-green-500 px-4 py-2 w-1/2 rounded-br-lg" onClick={handleSubmit}>
          Yes
        </button>
      </div>
    </ModalWrapper>
  );
};

export default ConfirmSignOutModal;
