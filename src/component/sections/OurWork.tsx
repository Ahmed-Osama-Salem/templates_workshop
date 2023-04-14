import LeftImageHoverd from '../modules/ImagesHoverd/LeftImageHoverd';
import RightImageHoverd from '../modules/ImagesHoverd/RightImageHoverd';

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
      <div className="flex h-auto w-full px-[80px] py-[60px]">
        <LeftImageHoverd />
        <RightImageHoverd />
      </div>
    </div>
  );
};

export default OurWork;
