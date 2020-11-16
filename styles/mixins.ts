import { breakpoints } from './variables';

type Breakpoint = keyof typeof breakpoints;

export const mediaDown = (breakpoint: Breakpoint) =>
  `@media (max-width: ${breakpoints[breakpoint]})`;
