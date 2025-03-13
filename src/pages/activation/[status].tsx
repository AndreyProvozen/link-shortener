import { FC } from 'react';
import { PageMeta } from '@/atoms';
import Activation from '@/containers/ActivationStatusPage';
import { GetServerSidePropsContext } from 'next';

interface Props {
  isSuccess: boolean;
}

const ActivationPage: FC<Props> = ({ isSuccess }) => {
  const statusText = isSuccess ? 'Success' : 'Failed';

  const META_TITLE = `Activation ${statusText} Page`;
  const META_DESCRIPTION = `Activation ${statusText} Page provides a detailed overview of the activation process. It includes information about the activation status, any errors or issues encountered during the activation process, and any relevant details or context that may be helpful in understanding the activation process.`;

  return (
    <>
      <PageMeta title={META_TITLE} description={META_DESCRIPTION} noIndex />
      <Activation isSuccess={isSuccess} />
    </>
  );
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const isSuccess = query.status === 'success';

  return { props: { isSuccess } };
};

export default ActivationPage;
