import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { PAGINATION_TEST_IDS } from './testIds';

import { ChevronIcon } from '@/icons';

interface Props {
  perPage: number;
  count: number;
  className?: string;
}

const Pagination: FC<Props> = ({ perPage, count, className }) => {
  const { query, push } = useRouter();

  const currentPage = parseInt(query?.page as string, 10) || 0;
  const totalPage = Math.ceil(count / perPage);

  const disabledForPrev = currentPage === 0;
  const disabledForNext = currentPage === totalPage - 1;

  const pageCounter = `Page ${currentPage + 1} of ${totalPage}`;

  const updatePage = (page: number) => {
    push({ query: { ...query, page } }, undefined, { shallow: true });
  };

  const nextPage = () => {
    if (!disabledForNext) updatePage(currentPage + 1);
  };

  const prevPage = () => {
    if (!disabledForPrev) updatePage(currentPage - 1);
  };

  return (
    <div className={clsx('flex justify-center', className)}>
      <button
        onClick={prevPage}
        data-testid={PAGINATION_TEST_IDS.PREV_BUTTON}
        className="flex"
        disabled={disabledForPrev}
      >
        <ChevronIcon className={clsx('rotate-90', { 'fill-white-500': disabledForPrev })} width={30} height={30} />
        <b className={clsx('text-xl', { 'text-white-500': disabledForPrev })}>Prev</b>
      </button>
      <b className="text-xl mx-5">{pageCounter}</b>
      <button
        className="flex"
        onClick={nextPage}
        data-testid={PAGINATION_TEST_IDS.NEXT_BUTTON}
        disabled={disabledForNext}
      >
        <b className={clsx('text-xl', { 'text-white-500': disabledForNext })}>Next</b>
        <ChevronIcon className={clsx('-rotate-90', { 'fill-white-500': disabledForNext })} width={30} height={30} />
      </button>
    </div>
  );
};

export default Pagination;
