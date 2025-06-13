import type { FC } from 'react';

import { Link } from '@/atoms';
import { useHeaderData } from '@/providers';

interface Props {
  textBlack?: boolean;
}

const DesktopHeader: FC<Props> = () => {
  const { navFields } = useHeaderData();

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
