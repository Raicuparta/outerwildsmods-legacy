import { SmartLink } from '..';

import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.pageTitle}>
      <SmartLink href="/">
        <a>Outer Wilds Mods</a>
      </SmartLink>
    </h1>
  </header>
);
