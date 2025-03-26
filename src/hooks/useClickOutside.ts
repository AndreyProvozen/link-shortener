import { useEffect, RefObject } from 'react';

const useClickOutside = (element: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (element.current && !element.current.contains(target) && !element.current.isSameNode(target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [element, callback]);
};

export default useClickOutside;
