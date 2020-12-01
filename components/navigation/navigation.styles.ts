import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { mediaDown, textOutline } from '../../styles/mixins';
import { colors, spacing, borderRadius } from '../../styles/variables';
import { PageLayout } from '../page-layout';

export const Wrapper = styled.div`
  width: 100%;
`;

export const NavWrapper = styled.nav`
display: flex;
${mediaDown('small')} {
    display: none;
    flex-direction: column;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const MenuButton = styled.label`
  cursor: pointer;
  font-size: x-large;
  padding: ${spacing.medium};
  background: ${colors.background};
  line-height: ${spacing.large};
  border-radius: ${borderRadius};
  margin: ${spacing.medium};
  display: none;
  ${mediaDown('small')} {
    display: inline-block;
  }
`

export const Layout = styled(PageLayout)`
  padding: 0;
  ${HiddenInput}:checked + ${NavWrapper} {
    display: flex;
  }
`;

export const NavLinkWrapper = styled.a<{ isActive: boolean }>(
  ({ isActive }) => css`
    color: ${isActive ? colors.light : colors.accent};
    background-color: ${isActive ? colors.background : 'none'};
    flex: 1;
    padding: ${spacing.medium} 0;
    margin: 0px ${spacing.small};
    border-radius: ${borderRadius} ${borderRadius} 0 0;
    ${textOutline(colors.background)};
    -webkit-tap-highlight-color: ${transparentize(0.55)(colors.background)};
    @media (hover: hover) {
      &:hover {
        background-color: ${transparentize(0.55)(colors.background)};
      }
    }
  `
);

export const NavLinkAdWrapper = styled(NavLinkWrapper)(
  ({ isActive }) => css`
    color: ${isActive ? colors.light : colors.cta};
    font-weight: bold;
    background-color: ${isActive ? colors.background : 'none'};
  `
);
