import { AppProps } from 'next/app'

import ReactGA from 'react-ga';

import '../styles/global.css'
import styles from '../styles/layout.module.scss';
import { useEffect } from 'react';
import { ModDatabaseProvider } from '../hooks/useModDatabase';
import Link from 'next/link';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('UA-171434021-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <>
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>
        <Link href="/">
          <a>
            Outer Wilds Mods
          </a>
        </Link>
      </h1>
    </header>
    <ModDatabaseProvider>
      <Component {...pageProps} />
    </ModDatabaseProvider>
    <footer className={[styles.footer, styles.container].join(' ')}>
      <p>
        This page isn't official, nor affiliated with Mobius Digital, or anyone really.
      </p>
    </footer>
  </>
}
