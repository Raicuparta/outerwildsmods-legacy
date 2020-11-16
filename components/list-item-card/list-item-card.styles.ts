import styled from 'styled-components';

import { colors, spacing, borderRadius } from '../../styles/variables';

const imageSize = '50px';
const bulletSize = '30px';

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  border-radius: ${borderRadius};
  padding: ${spacing.medium};
  &:hover {
    background-color: ${colors.dark};
  }
  &:not(:last-child) {
    margin-bottom: ${spacing.medium};
  }
  .list-item-card-image {
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  min-width: ${imageSize};
  min-height: ${imageSize};
  max-width: ${imageSize};
  max-height: ${imageSize};
`;

export const TextWrapper = styled.div`
  margin-left: ${spacing.large};
`;

export const Bullet = styled.span`
  min-width: ${bulletSize};
  min-height: ${bulletSize};
  max-width: ${bulletSize};
  max-height: ${bulletSize};
  border-radius: 100%;
  background-color: ${colors.dark};
  margin: ${spacing.medium} ${spacing.medium};
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
