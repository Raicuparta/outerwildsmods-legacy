import { lighten } from 'polished';
import styled from 'styled-components';

import { SmartLink } from '.';
import { colors } from '../../styles/variables';

export const TextLink = styled(SmartLink)`
  color: ${colors.accent};

  &:hover {
    color: ${lighten(0.2)(colors.accent)};
  }
`;
