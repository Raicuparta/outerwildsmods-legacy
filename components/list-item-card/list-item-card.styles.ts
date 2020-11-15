import styled from 'styled-components'

import { colors, spacing, borderRadius } from '../../styles/variables';

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
    margin-right: ${spacing.large};
    width: 50px;
    height: 50px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: ${spacing.large};
`;

export const Bullet = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${colors.dark};
  margin-right: ${spacing.large};
`;

export const UserName = styled.span`
  color: ${colors.accent};
`;

export const DescriptionWrapper = styled.div`
  line-height: normal;
`;

export const Description= styled.span`
  color: ${colors.light};
`;
