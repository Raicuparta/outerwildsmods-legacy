import styled from 'styled-components';
import { mediaDown } from '../../styles/mixins';

import { borderRadius, colors, spacing } from '../../styles/variables';

export const Wrapper = styled.section`
  padding: ${spacing.large} 0;
  &:first-child {
    padding-top: ${spacing.medium};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${spacing.large};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0;
`;

export const Line = styled.hr`
  flex: 1;
  margin-left: ${spacing.large};
  margin-bottom: 13px;
  background-color: ${colors.light};
  height: 1px;
  border: none;
  opacity: 0.5;
`;

export const PageSectionColumns = styled.div`
  display: flex;

  ${mediaDown('small')} {
    flex-direction: column;
  }
`;

export const SectionImageWrapper = styled.div`
  flex: 1;
  border-radius: ${borderRadius};
  border: 2px solid ${colors.dark};
  overflow: hidden;
  height: fit-content;
  &:first-child:not(:only-child) {
    margin-right: ${spacing.large};
    ${mediaDown('small')} {
      margin-right: 0;
      margin-bottom: ${spacing.large};
    }
  }
  &:not(:first-child) {
    margin-left: ${spacing.large};
    ${mediaDown('small')} {
      margin-left: 0;
      margin-top: ${spacing.large};
    }
  }
  img,
  amp-img {
    object-fit: cover;
  }
`;

export const SectionDescriptionWrapper = styled.div`
  flex: 1;
`;

export const SectionDescription = styled.p`
  margin-top: 0;
`;
