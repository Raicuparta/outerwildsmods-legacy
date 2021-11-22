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
  img,
  amp-img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
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
