import styled from 'styled-components';

import { colors, spacing, borderRadius } from '../../styles/variables';

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: calc(100% - 2 * ${spacing.medium});
  border-radius: ${borderRadius};
  padding: ${spacing.medium};
  margin: ${spacing.medium};
  background-color: ${colors.dark};
  &:hover {
    background-color: ${colors.black};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  margin-bottom: ${spacing.medium};
  img,
  amp-img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;

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
`;

export const TextWrapper = styled.div`
  /* margin-left: ${spacing.large}; */
`;

export const UserName = styled.span`
  color: ${colors.accent};
`;

export const DescriptionWrapper = styled.div`
  line-height: normal;
`;

export const Description = styled.span`
  color: ${colors.light};
`;
