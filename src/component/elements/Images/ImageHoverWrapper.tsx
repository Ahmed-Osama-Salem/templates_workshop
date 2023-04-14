import { useState } from 'react';

const ImageHoverWrapper: React.FC<{
  image: string;
  imageWidth: string;
  imageHeight: string;
  hoverFrom: 'top' | 'bottom' | 'right' | 'left';
  hoverTo: 'top' | 'bottom' | 'right' | 'left';
}> = (props) => {
  const [isImageHoverd, setIsImageHoverd] = useState<boolean>(false);

  return (
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
      }}
      onMouseLeave={() => {
        setIsImageHoverd(false);
      }}
      className={`${props.imageWidth} ${props.imageHeight} overflow-hidden bg-white shadow-sm shadow-gray-light-100/30 transition-all duration-[5000ms] ease-in-out`}
    ></div>
  );
};

export default ImageHoverWrapper;