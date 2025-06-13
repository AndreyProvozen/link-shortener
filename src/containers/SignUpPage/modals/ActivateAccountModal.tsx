import type { Dispatch, FC, SetStateAction } from 'react';

import { ModalWrapper } from '@/atoms';
import { EnvelopeIcon } from '@/icons';

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ActivateAccountModal: FC<Props> = ({ setIsModalOpen }) => (
  <ModalWrapper contentClasses="text-center max-w-xl" setIsModalOpen={setIsModalOpen}>
    <EnvelopeIcon className="w-32 h-32 mx-auto text-pink-500 animate-float" />
    <p className="font-bold text-3xl text-gray-800 mb-1">You&apos;re almost there!</p>
    <p className="text-black-500 mb-3">
      Please check your email and click the activation link to verify your account. Once activated, you can log in and
      start using your account.
    </p>
    <p className="italic text-sm text-white-500">
      If you don&apos;t see the email, be sure to check your spam, junk, or other folders.
    </p>
  </ModalWrapper>
);

export default ActivateAccountModal;
