import { imagesHoverd } from '@/source/db/images';

import ImageHoverWrapper from '../../elements/Images/ImageHoverWrapper';

const LeftImageHoverd = () => {
  return (
    <div className="flex w-[50%] flex-col items-center gap-[60px]">
      <ImageHoverWrapper
        image={imagesHoverd[0] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[700px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[3] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[355px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[5] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[700px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[7] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[355px]"
        hoverFrom="left"
        hoverTo="right"
      />
      <ImageHoverWrapper
        image={imagesHoverd[9] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[700px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[11] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[358px]"
        hoverFrom="left"
        hoverTo="right"
      />
    </div>
  );
};

export default LeftImageHoverd;
