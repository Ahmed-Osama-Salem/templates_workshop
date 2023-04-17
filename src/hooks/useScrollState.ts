import { useEffect, useState } from 'react';

const useScrollState = (minValueY: number, maxValueY: number) => {
  const [isScroll, setIsScroll] = useState(false);
  const onScroll = () => {
    // eslint-disable-next-line no-restricted-globals
    if (scrollY >= minValueY && scrollY <= maxValueY) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { isScroll };
};

export default useScrollState;
