import styled from 'styled-components'
import { SmartLink } from '.';

import { colors, spacing, borderRadius } from '../../styles/variables';

export const TextLink = styled(SmartLink)`
  color: ${colors.accent};
  text-decoration: none;
  font-weight: normal;
  padding: 0 ${spacing.small};
  border-radius: ${borderRadius};

  &:hover {
    background-color: ${colors.dark};
  }
`
