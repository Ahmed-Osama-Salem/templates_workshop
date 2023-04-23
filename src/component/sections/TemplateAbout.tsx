import ContantCardScroll from '../modules/cards/ContantCardScroll';
import CatchyHeader from '../modules/headers/CatchyHeader';

const TemplateAbout = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[80px] px-[100px]">
      <CatchyHeader />
      <div className="flex flex-col gap-[140px]">
        <ContantCardScroll
          image="https://assets.website-files.com/60df9bbc248f30e7b966b47e/60df9ccce80d803f7fa78b2f_main_1.jpg"
          flexRow="row"
        />
        <ContantCardScroll
          image="https://assets.website-files.com/60df9bbc248f30e7b966b47e/60df9cad43b07d574230ba02_main_2-p-1080.jpeg"
          flexRow="row-reverse"
        />
        <ContantCardScroll
          image="https://assets.website-files.com/60df9bbc248f30e7b966b47e/60df9c7ede1b8cc0919a6325_main_3-p-1080.jpeg"
          flexRow="row"
        />
        <ContantCardScroll
          image="https://assets.website-files.com/60df9bbc248f30e7b966b47e/60df9c5aa411a46a6ebe21f3_main_4-p-1080.jpeg"
          flexRow="row-reverse"
        />
        <ContantCardScroll
          image="https://assets.website-files.com/60df9bbc248f30e7b966b47e/60df9c24787a006cce6d9458_main_5-p-1080.jpeg"
          flexRow="row"
        />
      </div>
    </div>
  );
};

export default TemplateAbout;
