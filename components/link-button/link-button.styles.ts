import styled, { css } from 'styled-components'

import { colors, spacing, borderRadius } from '../../styles/variables';
import { ButtonVariant } from './link-button';

export const Content = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const variantColor: Record<ButtonVariant, string> = {
  primary: colors.cta,
  "main-download": colors.cta,
  secondary: colors.accent,
}

export const Wrapper = styled.a<{ variant: ButtonVariant }>(({ variant }) => css`
  display: block;
  border-radius: ${borderRadius};
  border: none;
  width: 100%;
  background-color: ${variantColor[variant]};
  color: ${colors.white};
  font-size: medium;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  outline: none;
  overflow: hidden;
  margin: 0 auto;
  margin-top: ${variant === "main-download" ? spacing.large : 0};

  &:active {
    box-shadow: none;
    ${Content} {
      backdrop-filter: brightness(75%);
    }
  }

  &:hover:not(.disabled):not(:active) {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    ${Content} {
      backdrop-filter: brightness(120%);
    }
  }
`);
