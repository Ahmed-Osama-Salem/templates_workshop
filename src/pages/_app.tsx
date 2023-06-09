import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '@/source/redux/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
