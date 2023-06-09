import { Meta } from '@/component/layouts/Meta';
import ThemeLayout from '@/component/layouts/ThemeLayout';
import OurWork from '@/component/sections/OurWork';
import TemplateAbout from '@/component/sections/TemplateAbout';
import { Main } from '@/component/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title=""
          description=" Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <ThemeLayout>
        <OurWork />
        <TemplateAbout />
      </ThemeLayout>
    </Main>
  );
};

export default Index;
