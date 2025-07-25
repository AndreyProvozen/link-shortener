import type { NextPageContext } from 'next';

import { PageMeta } from '@/atoms';
import { META } from '@/constants/meta';
import ErrorPage from '@/containers/ErrorPage';

interface Props {
  statusCode: number;
}

const Error = ({ statusCode }: Props) => (
  <>
    <PageMeta title={META.ERROR.TITLE} description={META.ERROR.DESCRIPTION} noIndex />
    <ErrorPage statusCode={statusCode} />
  </>
);

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;

  return { statusCode };
};

export default Error;
