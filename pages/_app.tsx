import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Footer, Header, Navigation } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
