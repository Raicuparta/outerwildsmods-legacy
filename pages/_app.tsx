import { AppProps } from 'next/app';

import '../styles/global.css';
import { Footer, Header } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
