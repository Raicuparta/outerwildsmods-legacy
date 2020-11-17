import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { Footer, Header, Navigation } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
