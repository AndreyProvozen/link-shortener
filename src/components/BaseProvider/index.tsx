import { FC, PropsWithChildren } from 'react';

import { User } from '@/api/auth/types';
import { UserProvider } from '@/providers';

type Props = PropsWithChildren<{ initialUser: User | null }>;

const BaseProvider: FC<Props> = ({ children, ...props }) => <UserProvider {...props}>{children}</UserProvider>;

export default BaseProvider;
