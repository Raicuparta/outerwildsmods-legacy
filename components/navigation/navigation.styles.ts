import styled, { css } from 'styled-components';

import { colors, spacing, borderRadius } from '../../styles/variables';
import { PageLayout } from '../page-layout';

export const Wrapper = styled.div`
  background-color: ${colors.dark};
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
    text-decoration: none;
    font-weight: normal;
    padding: ${spacing.small} ${spacing.medium};
    flex: 1;
    text-align: center;
    padding: ${spacing.medium} 0;
    margin: 0px ${spacing.small};
    border-radius: ${borderRadius} ${borderRadius} 0 0;
    background-color: ${isActive ? colors.background : colors.dark};
    ${!isActive
      ? css`
          &:hover {
            filter: brightness(115%);
          }
        `
      : ''}
  `
);
