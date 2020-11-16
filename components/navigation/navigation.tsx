import { PageLayout } from '../page-layout';
import { TextLink } from '../smart-link';
import { NavigationLink } from './navigation-link';

import { Wrapper, Layout, NavWrapper } from './navigation.styles';

export const Navigation: React.FunctionComponent = () => (
  <Wrapper>
    <Layout>
      <NavWrapper>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/mod-manager">Manager</NavigationLink>
        <NavigationLink href="/mods">Mods</NavigationLink>
        <NavigationLink href="/outer-wilds-alpha">Alpha</NavigationLink>
      </NavWrapper>
    </Layout>
  </Wrapper>
);
