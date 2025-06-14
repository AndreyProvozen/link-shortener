import type { FC } from 'react';

import { PageMeta } from '@/atoms';
import { META } from '@/constants/meta';
import ActivationSuccessPage from '@/containers/ActivationSuccessPage';

const ActivationSuccess: FC = () => (
  <>
    <PageMeta title={META.ACTIVATION_SUCCESS.TITLE} description={META.ACTIVATION_SUCCESS.DESCRIPTION} noIndex />
    <ActivationSuccessPage />
  </>
);

export default ActivationSuccess;
