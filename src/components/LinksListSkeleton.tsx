import clsx from 'clsx';
import type { FC } from 'react';

interface Props {
  isHomePageList?: boolean;
  quantity?: number;
}

type TabLinkProps = Pick<Props, 'isHomePageList'>;

const TableLink: FC<TabLinkProps> = ({ isHomePageList }) => {
  const linkContainerClasses = isHomePageList ? 'bg-white-50 rounded-md mb-5' : 'border-b border-white-300';

  return (
    <div className={clsx('w-full p-5 flex justify-between items-center', linkContainerClasses)}>
      <div className="max-w-xs w-full">
        <div className="max-w-[288px] h-6 animate-pulse bg-pink-300 rounded-md mb-1" />
        <div className="max-w-[176px] h-5 mr-5 animate-pulse bg-white-300 rounded-md" />
      </div>
      <div className="tablet-small:hidden w-9 shrink-0 h-7 ml-5 animate-pulse bg-white-300 rounded-md" />
      <div className="w-4 shrink-0 h-7 ml-5 animate-pulse bg-pink-300 rounded-md" />
    </div>
  );
};

const LinksListSkeleton: FC<Props> = ({ isHomePageList = false, quantity = 3 }) => {
  const skeletonList = Array(quantity).fill(1);

  return (
    <>
      {skeletonList.map((_, index) => (
        <TableLink key={index} isHomePageList={isHomePageList} />
      ))}
    </>
  );
};

export default LinksListSkeleton;
