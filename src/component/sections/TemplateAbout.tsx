import { scrollCardDB } from '@/source/db/scrollCard';

import ContantCardScroll from '../modules/cards/ContantCardScroll';
import CatchyHeader from '../modules/headers/CatchyHeader';

const TemplateAbout = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[80px] px-[100px]">
      <CatchyHeader />
      <div className="flex flex-col gap-[140px]">
        {scrollCardDB.map((card, i) => {
          return (
            <ContantCardScroll
              key={i}
              image={card.image}
              flexRow={card.flexDir}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TemplateAbout;
