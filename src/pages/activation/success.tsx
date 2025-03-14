import { FC } from 'react';
import { PageMeta } from '@/atoms';
import ActivationSuccess from '@/containers/ActivationSuccess';
import { META } from '@/constants';

const ActivationSuccessPage: FC = () => (
  <>
    <PageMeta title={META.ACTIVATION_SUCCESS.TITLE} description={META.ACTIVATION_SUCCESS.DESCRIPTION} noIndex />
    <ActivationSuccess />
  </>
);

export default ActivationSuccessPage;
