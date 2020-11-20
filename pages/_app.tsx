import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { Footer, Header, PageContent } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageContent>
        <Component {...pageProps} />
      </PageContent>
      <Footer />
    </>
  );
}
