import styled from 'styled-components'

import { colors, spacing } from '../../styles/variables';

export const Wrapper = styled.header`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: calc(100vw - 100%);
  background-color: ${colors.dark};
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
  }
`;

  /* TODO breakpoints */
// @include media-breakpoint-down('small') {
//   .pageTitle a {
//     font-size: 2rem;
//   }
// }
