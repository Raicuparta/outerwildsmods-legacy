import { AppProps } from 'next/app';

import '../styles/global.css';
import styles from '../styles/layout.module.scss';
import { SmartLink } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>
          <SmartLink href="/">
            <a>Outer Wilds Mods</a>
          </SmartLink>
        </h1>
      </header>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <p>
          This page isn't official, nor affiliated with Mobius Digital, or
          anyone really.
        </p>
      </footer>
    </>
  );
}
