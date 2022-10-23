import { MutableRefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  handler: (event: T) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as T;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler(target);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
