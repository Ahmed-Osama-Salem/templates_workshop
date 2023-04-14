import { imagesHoverd } from '@/source/db/images';

import ImageHoverWrapper from '../elements/Images/ImageHoverWrapper';

const OurWork = () => {
  return (
    <div className=" w-full p-[30px] text-center">
      <h1 className="font-Nanum-Myeongjo text-5xl font-medium tracking-widest text-gray-mid">
        LOVELY HOMEPAGES
      </h1>
      <div className="pt-4 text-gray-light-100">
        <p className="font-Satisfy ">
          Solene comes with 12 alluring homepages carefully created to help
        </p>
        <p className="font-Satisfy">
          you present every aspect of your business.
        </p>
      </div>
      <div className="flex h-[1000px] w-full  p-[60px]">
        <div className="flex w-[50%] flex-col items-center ">
          <ImageHoverWrapper
            image={imagesHoverd[0] as string}
            imageWidth="w-[80%]"
            imageHeight="h-[600px]"
            hoverFrom="top"
            hoverTo="bottom"
          />
        </div>
        <div className="flex w-[50%] flex-col items-center ">
          <ImageHoverWrapper
            image={imagesHoverd[1] as string}
            imageWidth="w-[80%]"
            imageHeight="h-[325px]"
            hoverFrom="left"
            hoverTo="right"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
