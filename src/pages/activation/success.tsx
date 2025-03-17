import { FC } from 'react';
import { PageMeta } from '@/atoms';
import ActivationSuccessPage from '@/containers/ActivationSuccessPage';
import { META } from '@/constants';

const ActivationSuccess: FC = () => (
  <>
    <PageMeta title={META.ACTIVATION_SUCCESS.TITLE} description={META.ACTIVATION_SUCCESS.DESCRIPTION} noIndex />
    <ActivationSuccessPage />
  </>
);

export default ActivationSuccess;
