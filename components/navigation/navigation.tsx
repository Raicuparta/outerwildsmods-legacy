import { PageLayout } from '../page-layout';
import { TextLink } from '../smart-link';
import styles from './navigation.module.scss';

export const Navigation: React.FunctionComponent = () => (
  <div className={styles.wrapper}>
    <PageLayout className={styles.layout}>
      <nav className={styles.navigation}>
        <TextLink href="/">
          Home
        </TextLink>
        <TextLink href="/mod-manager">
          Manager
        </TextLink>
        <TextLink href="/mods">
          Mods
        </TextLink>
        <TextLink href="/outer-wilds-alpha">
          Alpha
        </TextLink>
      </nav>
    </PageLayout>
  </div>
);
