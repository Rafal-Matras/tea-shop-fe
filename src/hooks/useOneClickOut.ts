import { useEffect } from 'react';

export const useOnClickOutside = (ref: any, open: boolean, handler: () => void) => {
  useEffect(() => {
      const listener = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) handler();
      };
      if (open) {
        document.addEventListener('mousedown', listener);
      }
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, open, handler],
  );
};
