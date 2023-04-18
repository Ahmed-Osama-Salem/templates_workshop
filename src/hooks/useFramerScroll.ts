import { useScroll, useTransform } from 'framer-motion';
import type { MutableRefObject } from 'react';

const useFramerScroll = <T extends MutableRefObject<T> | null>(
  elementRef: MutableRefObject<T>,
  rotateFrom: Array<number>,
  rotateTo: Array<number>,
  translateYFrom: Array<number>,
  translateYTo: Array<number>
) => {
  const { scrollYProgress } = useScroll({
    target: elementRef as unknown as MutableRefObject<HTMLDivElement>,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, rotateFrom, rotateTo);
  const y = useTransform(scrollYProgress, translateYFrom, translateYTo);

  return { rotate, y };
};

export default useFramerScroll;
