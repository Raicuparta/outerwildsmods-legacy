import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { Footer, Header, PageContent, Analytics } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <GlobalStyle />
      <Header />
      <PageContent>
        <Component {...pageProps} />
      </PageContent>
      <Footer />
    </>
  );
}
