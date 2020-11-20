import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { textOutline } from '../../styles/mixins';
import { colors, spacing, borderRadius } from '../../styles/variables';
import { PageLayout } from '../page-layout';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Layout = styled(PageLayout)`
  padding: 0;
`;

export const NavWrapper = styled.nav`
  display: flex;
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
    &:hover {
      background-color: ${transparentize(0.55)(colors.background)};
    }
  `
);
