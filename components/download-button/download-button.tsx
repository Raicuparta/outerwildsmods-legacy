import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import styles from './download-button.module.scss';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const DownloadButton: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <a className={styles.downloadButton} {...props}>
    {children}
  </a>
);
