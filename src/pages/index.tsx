import { Meta } from '@/component/layouts/Meta';
import ThemeLayout from '@/component/layouts/ThemeLayout';
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
        <h1 className="font-Nanum-Myeongjo text-4xl">LOVELY HOMEPAGES</h1>
        <p className="font-Satisfy">
          Solene comes with 12 alluring homepages carefully created to help you
          present every aspect of your business.
        </p>
      </ThemeLayout>
    </Main>
  );
};

export default Index;
