import styled, { css } from 'styled-components';
import { mediaDown } from '../../styles/mixins';

import { spacing, breakpoints } from '../../styles/variables';

export const PageLayout = styled.div<{ isWide?: boolean }>(
  ({ isWide }) => css`
    padding: ${spacing.large};
    margin: 0 auto;
    max-width: ${isWide ? breakpoints.medium : breakpoints.small};
    h1 {
      margin-top: 0;
    }
  `
);

export const PageLayoutColumns = styled.div`
  display: flex;
  ${mediaDown('medium')} {
    flex-direction: column-reverse;
  }
`;
