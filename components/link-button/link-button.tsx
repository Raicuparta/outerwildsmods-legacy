import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import styles from './link-button.module.scss';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant?: 'primary' | 'secondary' | 'main-download';
  isExternal?: boolean;
}

export const LinkButton: React.FunctionComponent<Props> = ({
  variant = 'secondary',
  isExternal = false,
  className,
  children,
  ...props
}) => (
  <a
    className={`${className} ${styles.linkButton} ${styles[variant]}`}
    {...props}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
  >
    <div className={styles.content}>{children}</div>
  </a>
);
