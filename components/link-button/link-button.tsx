import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import { Wrapper, Content } from './link-button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'main-download';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant?: ButtonVariant;
  isExternal?: boolean;
}

export const LinkButton: React.FunctionComponent<Props> = ({
  variant = 'secondary',
  isExternal = false,
  children,
  href,
}) => (
  <Wrapper
    href={href}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    variant={variant}
  >
    <Content>{children}</Content>
  </Wrapper>
);
