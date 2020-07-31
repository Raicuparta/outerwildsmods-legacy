import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

import '../styles/global.css';
import styles from '../styles/layout.module.scss';

const googleAnalyticsId = process.env.analyticsId;

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  useEffect(() => {
    if (googleAnalyticsId) {
      ReactGA.initialize(googleAnalyticsId);
    }
  }, []);

  useEffect(() => {
    if (googleAnalyticsId) {
      ReactGA.pageview(asPath);
    }
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
