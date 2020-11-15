import styled from 'styled-components'

import { colors } from '../../styles/variables';
import { SmartLink } from '../smart-link';

export const Wrapper = styled(SmartLink)`
  position: absolute;
  top: 0;
  right: 0;
  fill: ${colors.accent};
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`
