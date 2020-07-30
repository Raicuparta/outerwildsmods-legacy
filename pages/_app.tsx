import { AppProps } from 'next/app'

import ReactGA from 'react-ga';

import '../styles/global.css'
import styles from '../styles/layout.module.scss';
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('UA-171434021-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <>
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>
        <a href="/">
          Outer Wilds Mods
        </a>
      </h1>
    </header>
    <Component {...pageProps} />
    <footer className={[styles.footer, styles.container].join(' ')}>
      <p>
        This page isn't official, nor affiliated with Mobius Digital, or anyone really.
      </p>
    </footer>
  </>
}
