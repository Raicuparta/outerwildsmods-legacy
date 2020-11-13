import { PageLayout } from '../page-layout';
import { TextLink } from '../smart-link';
import { NavigationLink } from './navigation-link';
import styles from './navigation.module.scss';

export const Navigation: React.FunctionComponent = () => (
  <div className={styles.wrapper}>
    <PageLayout className={styles.layout}>
      <nav className={styles.navigation}>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/mod-manager">Manager</NavigationLink>
        <NavigationLink href="/mods">Mods</NavigationLink>
        <NavigationLink href="/outer-wilds-alpha">Alpha</NavigationLink>
      </nav>
    </PageLayout>
  </div>
);
