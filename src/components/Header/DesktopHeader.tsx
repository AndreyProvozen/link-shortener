import { FC } from 'react';

import { Link } from '@/atoms';

import useHeaderConfig from './useHeaderConfig';

interface Props {
  textBlack?: boolean;
}

const DesktopHeader: FC<Props> = () => {
  const { navFields } = useHeaderConfig(false);

  return (
    <nav className="flex">
      {navFields.map(({ link, component, name }, index) => (
        <div key={name ?? index}>
          {link ? (
            <Link variant="primary" href={link} className="mx-3 text-2xl">
              {name}
            </Link>
          ) : (
            component
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopHeader;
