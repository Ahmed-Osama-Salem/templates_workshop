import ImageHoverWrapper from '@/component/elements/Images/ImageHoverWrapper';
import { imagesHoverd } from '@/source/db/images';

const RightImageHoverd = () => {
  return (
    <div className="flex w-[50%] flex-col items-center gap-[60px] ">
      <ImageHoverWrapper
        image={imagesHoverd[1] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[355px]"
        hoverFrom="left"
        hoverTo="right"
      />
      <ImageHoverWrapper
        image={imagesHoverd[2] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[700px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[4] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[355px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[6] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[700px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[8] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[355px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
      <ImageHoverWrapper
        image={imagesHoverd[10] as string}
        imageWidth="w-[80%]"
        imageHeight="h-[700px]"
        hoverFrom="top"
        hoverTo="bottom"
      />
    </div>
  );
};

export default RightImageHoverd;
