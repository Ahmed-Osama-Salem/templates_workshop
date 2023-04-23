import { motion } from 'framer-motion';
import { useRef } from 'react';

import useFramerScroll from '@/hooks/useFramerScroll';

const ContantCardScroll = (props: {
  image: string;
  flexRow: 'row-reverse' | 'row';
}) => {
  const imageDivRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: imageDivRef,
  //   offset: ['start end', 'end start'],
  // });

  // const rotate = useTransform(scrollYProgress, [0, 3], [0, 10]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const { rotate, y } = useFramerScroll(
    imageDivRef,
    [0, 3],
    [-7, 30],
    [0, 1],
    [160, -160]
  );

  return (
    <div
      style={{ flexDirection: `${props.flexRow}` }}
      className="flex justify-center gap-[60px] "
    >
      <motion.div
        ref={imageDivRef}
        style={{ rotate, y }}
        whileHover={{
          scale: 0.96,
          transition: { duration: 0.4, ease: 'easeInOut' },
        }}
        className={`h-full  cursor-pointer overflow-hidden rounded-lg bg-slate-300 `}
      >
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          src={props.image}
          alt="img"
          className="w-[750px] scale-[1] rounded-lg "
        />
      </motion.div>
      <div className=" flex flex-col justify-center gap-[16px] p-[20px]">
        <p className="cursor-pointer font-Nanum-Myeongjo font-extrabold capitalize text-gray-mid-100">
          Visual Identity
        </p>
        <div>
          <h3 className="mid-header">A new brand for a</h3>
          <h3 className="mid-header">new stategy</h3>
        </div>
        <p className="w-[440px] cursor-pointer font-Nanum-Myeongjo text-lg capitalize leading-[33px] text-gray-light-100">
          Fermentum donec vel urna, convallis amet, massa, aliquam vitae id.
          Vestibulum in in gravida ac. Adipiscing in cras.
        </p>
      </div>
    </div>
  );
};

export default ContantCardScroll;
