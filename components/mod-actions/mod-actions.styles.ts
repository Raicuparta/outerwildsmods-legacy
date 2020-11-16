import styled, { css } from 'styled-components';

import { colors, spacing } from '../../styles/variables';
import { mediaDown } from '../../styles/mixins';

export const Wrapper = styled.div<{ isFullWidth: boolean }>(
  ({ isFullWidth }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    flex: ${isFullWidth ? 1 : 0};
    margin-left: ${spacing.large};
    padding: ${spacing.large};
    background-color: ${colors.dark};

    ${mediaDown('medium')} {
      margin-left: 0;
      margin-bottom: ${spacing.large};
    }
  `
);

export const Content = styled.div`
  position: sticky;
  top: ${spacing.large};

  ${mediaDown('medium')} {
    display: flex;
    width: 100%;
    div {
      flex: 1;
    }
  }
  ${mediaDown('small')} {
    display: block;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: larger;
`;

export const Spacer = styled.div`
  height: ${spacing.large};
`;

export const ButtonsWrapper = styled.div`
  ${mediaDown('medium')} {
    padding: 0 ${spacing.large};
  }
`;
