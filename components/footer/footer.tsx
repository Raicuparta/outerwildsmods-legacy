import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <p>
      This page isn't official, nor affiliated with Mobius Digital, or anyone
      really.
    </p>
    <p>Page last updated on {new Date().toUTCString()}</p>
  </footer>
);
