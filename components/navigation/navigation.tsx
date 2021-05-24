import { PageLayout } from '../page-layout';
import { TextLink } from '../smart-link';
import { NavigationLink } from './navigation-link';

import { Wrapper, Layout, NavWrapper, HiddenInput, MenuButton } from './navigation.styles';

export const Navigation: React.FunctionComponent = () => (
  <Wrapper>
    <Layout>
      <MenuButton htmlFor="navigation-menu-button">☰</MenuButton>
      <HiddenInput type="checkbox" id="navigation-menu-button" />
      <NavWrapper>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/mod-manager">Manager</NavigationLink>
        <NavigationLink href="/mods">Mods</NavigationLink>
        <NavigationLink href="/outer-wilds-alpha">Alpha</NavigationLink>
      </NavWrapper>
    </Layout>
  </Wrapper>
);
