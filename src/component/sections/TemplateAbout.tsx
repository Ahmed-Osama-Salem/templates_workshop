import ContantCardScroll from '../modules/cards/ContantCardScroll';
import CatchyHeader from '../modules/headers/CatchyHeader';

const TemplateAbout = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[80px] px-[100px]">
      <CatchyHeader />
      <ContantCardScroll />
    </div>
  );
};

export default TemplateAbout;
