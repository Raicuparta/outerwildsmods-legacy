import { SmartLink } from '..';

import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.pageTitle}>
      <SmartLink href="/">Outer Wilds Mods</SmartLink>
    </h1>
  </header>
);
