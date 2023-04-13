import { Meta } from '@/component/layouts/Meta';
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
      <h1>helloz</h1>
    </Main>
  );
};

export default Index;
