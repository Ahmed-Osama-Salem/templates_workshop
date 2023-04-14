import ImageHoverWrapper from '../elements/Images/ImageHoverWrapper';

const OurWork = () => {
  return (
    <div className=" w-full text-center">
      <h1 className="font-Nanum-Myeongjo text-5xl font-medium tracking-widest text-gray-mid">
        LOVELY HOMEPAGES
      </h1>
      <div className="py-4 text-gray-light-100">
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
            image="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/home-1-1-768x2978.jpg"
            imageWidth="w-[70%]"
            imageHeight="h-[700px]"
            hoverFrom="top"
            hoverTo="bottom"
          />
        </div>
        <div className="flex w-[50%] flex-col items-center ">
          <ImageHoverWrapper
            image="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/home-2-1.jpg"
            imageWidth="w-[73%]"
            imageHeight="h-[340px]"
            hoverFrom="left"
            hoverTo="right"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
