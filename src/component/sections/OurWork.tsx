import { useState } from 'react';

const OurWork = () => {
  const [isImageHoverd, setIsImageHoverd] = useState(false);
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
          <div
            style={{
              backgroundImage:
                'url(https://solene.qodeinteractive.com/wp-content/uploads/2020/01/home-1-1-768x2978.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: `${isImageHoverd ? 'bottom' : 'top'}`,
            }}
            onMouseEnter={() => {
              setIsImageHoverd(true);
            }}
            onMouseLeave={() => {
              setIsImageHoverd(false);
            }}
            className="h-[700px] w-[70%] overflow-hidden bg-white shadow-sm shadow-gray-light-100/30 transition-all duration-[5000ms] ease-in-out"
          ></div>
        </div>
        <div className="flex w-[50%] flex-col items-center ">
          <div className="h-[800px]  overflow-hidden ">
            <img
              className="h-[300px] w-full "
              src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/home-2-1.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
