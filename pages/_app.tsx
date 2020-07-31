import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ReactGA from 'react-ga';

import '../styles/global.css';
import styles from '../styles/layout.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  useEffect(() => {
    ReactGA.initialize('UA-171434021-1');
  }, []);

  useEffect(() => {
    console.log('this is happening');
    ReactGA.pageview(asPath);
  }, [asPath]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>
          <Link href="/">
            <a>Outer Wilds Mods</a>
          </Link>
        </h1>
      </header>
      <Component {...pageProps} />
      <footer className={[styles.footer, styles.container].join(' ')}>
        <p>
          This page isn't official, nor affiliated with Mobius Digital, or
          anyone really.
        </p>
      </footer>
    </>
  );
}
