import { motion } from 'framer-motion';
import { useState } from 'react';

const ImageHoverWrapper: React.FC<{
  image: string;
  imageWidth: string;
  imageHeight: string;
  hoverFrom: 'top' | 'bottom' | 'right' | 'left';
  hoverTo: 'top' | 'bottom' | 'right' | 'left';
}> = (props) => {
  const [isImageHoverd, setIsImageHoverd] = useState<boolean>(false);
  const [isTextHoverd, setIsTextHoverd] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => {
        setIsTextHoverd(true);
      }}
      onMouseLeave={() => {
        setIsTextHoverd(false);
      }}
      className="flex w-full flex-col items-center gap-5"
    >
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
          backgroundPosition: `${
            !isImageHoverd ? props.hoverFrom : props.hoverTo
          }`,
        }}
        onMouseEnter={() => {
          setIsImageHoverd(true);
          setIsTextHoverd(true);
        }}
        onMouseLeave={() => {
          setIsImageHoverd(false);
          setIsTextHoverd(false);
        }}
        className={`${props.imageWidth} ${props.imageHeight} overflow-hidden bg-white shadow-sm shadow-gray-light-100/30 transition-all duration-[5000ms] ease-in-out`}
      ></div>
      <div
        className={`w-full translate-y-0 opacity-100 transition-all duration-700 ease-linear`}
      >
        {!isTextHoverd ? (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <p className=" font-Nanum-Myeongjo capitalize text-gray-mid-100 ">
              main home
            </p>
          </motion.div>
        ) : null}

        {isTextHoverd ? (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex w-full justify-center gap-[30px]"
          >
            <p className="cursor-pointer font-Nanum-Myeongjo capitalize text-gray-mid-100">
              Contact us
            </p>
            <p className="cursor-pointer font-Nanum-Myeongjo capitalize text-gray-mid-100">
              view album
            </p>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageHoverWrapper;
