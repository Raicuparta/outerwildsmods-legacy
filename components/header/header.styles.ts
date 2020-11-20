import styled from 'styled-components';
import { mediaDown, textOutline } from '../../styles/mixins';

import { colors, spacing } from '../../styles/variables';

export const Wrapper = styled.header`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const PageTitle = styled.h1`
  padding: 0 ${spacing.medium};

  a {
    font-size: 3rem;
    line-height: 1.2;
    letter-spacing: -0.05rem;
    width: 100%;
    padding-bottom: 1.2rem;
    color: ${colors.white};
    font-weight: 100;
    ${textOutline(colors.background)};

    ${mediaDown('small')} {
      font-size: 2rem;
    }
  }
`;
