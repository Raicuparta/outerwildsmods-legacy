import { SmartLink } from '..';
import { GithubCorner } from '../github-corner';

import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <GithubCorner />
    <h1 className={styles.pageTitle}>
      <SmartLink href="/">Outer Wilds Mods</SmartLink>
    </h1>
  </header>
);
