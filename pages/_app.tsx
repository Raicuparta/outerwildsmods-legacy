import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

import '../styles/global.css';
import styles from '../styles/layout.module.scss';
import { SmartLink } from '../components';

const googleAnalyticsId = process.env.analyticsId;

const Analytics: React.FunctionComponent<{ id?: string }> = ({ id }) => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `,
      }}
    />
  </>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics id={googleAnalyticsId} />
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
