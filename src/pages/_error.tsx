import { NextPageContext } from 'next';

import PageMeta from '@/atoms/PageMeta';
import Error from '@/containers/ErrorPage';
import { META } from '@/constants';

interface Props {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: Props) => (
  <>
    <PageMeta title={META.ERROR.TITLE} description={META.ERROR.DESCRIPTION} noIndex />
    <Error statusCode={statusCode} />
  </>
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;

  return { statusCode };
};

export default ErrorPage;
