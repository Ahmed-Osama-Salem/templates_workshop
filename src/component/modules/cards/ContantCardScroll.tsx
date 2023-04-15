const ContantCardScroll = () => {
  return (
    <div className="flex justify-center gap-[60px] ">
      <div className=" h-full scale-[1] cursor-pointer overflow-hidden rounded-lg bg-slate-300 transition-all duration-[400ms] ease-linear hover:scale-[0.94]">
        <img
          src="https://assets.website-files.com/60df9bbc248f30e7b966b47e/60df9ccce80d803f7fa78b2f_main_1.jpg"
          alt="img"
          className="w-[750px] scale-[1] rounded-lg transition-all duration-[400ms] ease-linear hover:scale-[1.2]"
        />
      </div>
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
