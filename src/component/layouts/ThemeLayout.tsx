import { motion, useScroll } from 'framer-motion';
import type { ReactNode } from 'react';

const ThemeLayout: React.FC<{
  children: ReactNode;
}> = (props) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar w-full"
      ></motion.div>
      <section className="theme-layout-container">{props.children}</section>;
    </>
  );
};

export default ThemeLayout;
