import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import styles from './link-button.module.scss';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const LinkButton: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <a className={styles.linkButton} {...props}>
    {children}
  </a>
);
