import { useRouter } from 'next/router';
import type { Dispatch, FC, SetStateAction } from 'react';

import { Link, ModalWrapper } from '@/atoms';
import { useLinksListActions } from '@/providers';
import { getConfigVariable } from '@/utils';

interface Props {
  deletedLinkCode: string;
  setDeletedLinkCode: Dispatch<SetStateAction<string | false>>;
  isStatisticPage?: boolean;
}

const API_URL = getConfigVariable('API_URL');

const DeleteLinkModal: FC<Props> = ({ deletedLinkCode, setDeletedLinkCode, isStatisticPage }) => {
  const { push } = useRouter();
  const { removeLink } = useLinksListActions();

  const shortLink = `${API_URL}/${deletedLinkCode}`;

  const handleDeleteLink = async () => {
    await removeLink(deletedLinkCode);

    if (isStatisticPage) return push('/links');

    setDeletedLinkCode(false);
  };

  return (
    <ModalWrapper contentClasses="!p-0" setIsModalOpen={setDeletedLinkCode as Dispatch<SetStateAction<boolean>>}>
      <div className="border-b-2 border-b-white-300 py-2 flex justify-center text-xl font-semibold">Delete link</div>
      <div className="py-4 px-8">
        <p>Are you really want to delete this link?</p>
        <Link variant="secondary" target="_blank" href={shortLink}>
          {shortLink}
        </Link>
      </div>
      <div className="flex justify-between border-t-2 border-t-white-300">
        <button
          className="hover:bg-red-500 px-4 py-2 w-1/2 border-r-2 border-r-white-300 rounded-bl-lg"
          onClick={() => setDeletedLinkCode(false)}
        >
          No
        </button>
        <button
          className="hover:bg-green-500 px-4 py-2 w-1/2 rounded-br-lg"
          onClick={() => {
            handleDeleteLink();
            setDeletedLinkCode(false);
          }}
        >
          Yes
        </button>
      </div>
    </ModalWrapper>
  );
};
export default DeleteLinkModal;
