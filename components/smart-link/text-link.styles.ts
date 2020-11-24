import { lighten } from 'polished';
import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const TextLink = styled.a`
  color: ${colors.accent};

  &:hover {
    color: ${lighten(0.2)(colors.accent)};
  }
`;
