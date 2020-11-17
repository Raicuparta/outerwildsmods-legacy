import { SmartLink, Stars, Navigation, GithubCorner } from '..';
import { Wrapper, PageTitle } from './header.styles';

export const Header = () => (
  <Wrapper>
    <GithubCorner />
    <Stars />
    <PageTitle>
      <SmartLink href="/">Outer Wilds Mods</SmartLink>
    </PageTitle>
    <Navigation />
  </Wrapper>
);
