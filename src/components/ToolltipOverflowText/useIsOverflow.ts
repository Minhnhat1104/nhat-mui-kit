import { useEffect, useLayoutEffect, useState } from 'react';

import _ from 'lodash';

export const useIsOverflow = (ref: any, callback?: (hasOverflow: boolean) => void) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [ref, screenWidth]);

  useEffect(() => {
    const updateSize = _.debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 500);
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return isOverflow;
};
