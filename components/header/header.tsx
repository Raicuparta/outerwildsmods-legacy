import { SmartLink } from '..';
import { GithubCorner } from '../github-corner';
import { Wrapper, PageTitle } from './header.styles';

export const Header = () => (
  <Wrapper>
    <GithubCorner />
    <PageTitle>
      <SmartLink href="/">Outer Wilds Mods</SmartLink>
    </PageTitle>
  </Wrapper>
);
