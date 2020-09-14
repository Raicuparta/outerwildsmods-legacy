import { AppProps } from 'next/app';

import '../styles/global.css';
import styles from '../styles/layout.module.scss';
import { Header } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
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
