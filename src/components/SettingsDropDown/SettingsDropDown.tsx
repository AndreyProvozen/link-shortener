import { useRouter } from 'next/router';
import { useMemo, type FC } from 'react';
import { toast } from 'react-toastify';

import { Dropdown } from '@/atoms';
import { BarChart, ClipBoard, Trash } from '@/icons';
import { getConfigVariable } from '@/utils';

interface Props {
  code: string;
  onDelete: () => void;
}

const API_URL = getConfigVariable('API_URL');

const SettingsDropDown: FC<Props> = ({ code, onDelete }) => {
  const router = useRouter();

  const settingsFields = useMemo(
    () => [
      {
        fieldTitle: 'Copy',
        fieldFunction: () => {
          navigator.clipboard.writeText(`${API_URL}/${code}`);
          toast.success('Link copied successfully');
        },
        fieldImage: <ClipBoard />,
      },
      {
        fieldTitle: 'Statistic',
        fieldFunction: () => router.push(`/links/${code}`),
        fieldImage: <BarChart width="25px" height="25px" fill="white" />,
      },
      { fieldTitle: 'Delete', fieldFunction: onDelete, fieldImage: <Trash /> },
    ],
    [code, router, onDelete]
  );

  return (
    <Dropdown
      placeholder={
        <svg
          className="hover:scale-110 transition-all"
          viewBox="0 0 30 30"
          width="30px"
          aria-label="Open link settings"
        >
          <use href="#three-dots-icon" />
        </svg>
      }
      dropdownData={settingsFields}
      listContainerClasses="right-0 w-60"
    />
  );
};
export default SettingsDropDown;
