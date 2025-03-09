import { useRouter } from 'next/router';
import { FC } from 'react';

import { PageMeta } from '@/atoms';
import Activation from '@/containers/ActivationStatusPage';

interface Props {
  data: string;
}

const ActivationPage: FC<Props> = () => {
  const { query } = useRouter();

  const isSuccess = query.status === 'success';
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

export default ActivationPage;
