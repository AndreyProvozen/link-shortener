import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { toast } from 'react-toastify';

import { Dropdown } from '@/atoms';
import { BarChartIcon, ClipBoardIcon, TrashIcon } from '@/icons';
import { getConfigVariable } from '@/utils';

interface Props {
  code: string;
  onDelete: () => void;
}

const API_HOST = getConfigVariable('API_HOST');

const SettingsDropDown: FC<Props> = ({ code, onDelete }) => {
  const router = useRouter();

  const settingsFields = useMemo(
    () => [
      {
        fieldTitle: 'Copy',
        fieldFunction: () => {
          navigator.clipboard.writeText(`${API_HOST}/${code}`);
          toast.success('Link copied successfully');
        },
        fieldImage: <ClipBoardIcon />,
      },
      {
        fieldTitle: 'Statistic',
        fieldFunction: () => router.push(`/links/${code}`),
        fieldImage: <BarChartIcon width="25px" height="25px" fill="white" />,
      },
      { fieldTitle: 'Delete', fieldFunction: onDelete, fieldImage: <TrashIcon /> },
    ],
    [code, router, onDelete]
  );

  return (
    <Dropdown
      placeholder={
        <svg
          className="ml-5 hover:scale-110 transition-all"
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
