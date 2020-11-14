import { useAmp } from 'next/amp';

import styles from './footer.module.scss';

export const Footer = () => {
  const isAmp = useAmp();

  return isAmp ? null : (
    <footer className={styles.footer}>
      <p>
        This page isn't official, nor affiliated with Mobius Digital, or anyone
        really.
      </p>
      <p>Page last updated on {new Date().toUTCString()}</p>
    </footer>
  );
}
