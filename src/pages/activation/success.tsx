import { FC } from 'react';
import { PageMeta } from '@/atoms';
import ActivationSuccess from '@/containers/ActivationSuccess';

const META_TITLE = 'Activation Success Page';
const META_DESCRIPTION =
  'Activation success page provides a detailed overview of the activation process. It includes information about the activation status, any errors or issues encountered during the activation process, and any relevant details or context that may be helpful in understanding the activation process.';

const ActivationSuccessPage: FC = () => (
  <>
    <PageMeta title={META_TITLE} description={META_DESCRIPTION} noIndex />
    <ActivationSuccess />
  </>
);

export default ActivationSuccessPage;
