import { useEffect } from 'react';

const useClickAway = (element, callback) => {
  const listener = event => {
    if (element && callback && !element.contains(event.target)) callback();
  };

  useEffect(() => {
    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  });
};

export default useClickAway;
