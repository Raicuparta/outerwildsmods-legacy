import { AppProps } from 'next/app'

import ReactGA from 'react-ga';

import '../styles/global.css'
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('UA-171434021-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />
}
