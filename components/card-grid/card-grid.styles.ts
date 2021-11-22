import styled, { css } from 'styled-components';

import { colors, spacing, borderRadius } from '../../styles/variables';

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: calc(100% - 2 * ${spacing.small});
  border-radius: ${borderRadius.medium};
  margin: ${spacing.small};
  background-color: ${colors.dark};
  overflow: hidden;
  border: ${spacing.small} solid;
  border-color: ${colors.background};
  &:hover {
    border-color: ${colors.dark};
    background-color: transparent;
  }
`;

export const ImageWrapper = styled.div<{ hue?: number }>(
  ({ hue = 0 }) => css`
    width: 100%;
    height: 100px;
    position: relative;
    filter: hue-rotate(${hue}turn);
    img,
    amp-img {
      width: 100%;
      height: 100px;
      object-fit: cover;
    }
  `
);

export const PlaceholderText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  opacity: 0.2;
  color: ${colors.white};
  font-size: 1.5em;
  line-height: 1em;
  text-align: center;
  overflow: hidden;
  padding: ${spacing.medium};
  z-index: 1;
`;

export const TextWrapper = styled.div`
  padding: ${spacing.medium};
`;

export const Title = styled.span`
  color: ${colors.accent};
`;

export const DescriptionWrapper = styled.div`
  line-height: normal;
`;

export const Description = styled.span`
  color: ${colors.light};
`;
