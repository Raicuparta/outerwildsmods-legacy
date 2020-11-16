import styled from 'styled-components'

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
`;

export const SectionImageWrapper = styled.div`
  flex: 1;
  &:first-child:not(:only-child) {
    margin-right: 1rem;
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
  .page-section-image {
    border-radius: ${borderRadius};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    max-width: 100%;
    display: block;
  }
`;

export const SectionDescriptionWrapper = styled.div`
  flex: 1;
`;

export const SectionDescription = styled.p`
  margin-top: 0;
`;

// TODO breakpoints
// @include media-breakpoint-down('small') {
//   .sectionColumns {
//     flex-direction: column;
//   }
//   .sectionImageWrapper:first-child:not(:only-child) {
//     margin-right: 0;
//     margin-bottom: 1rem;
//   }
//   .sectionImageWrapper:not(:first-child) {
//     margin-left: 0;
//     margin-top: 1rem;
//   }
//   .titleLink {
//     margin-left: 0;
//   }
// }
