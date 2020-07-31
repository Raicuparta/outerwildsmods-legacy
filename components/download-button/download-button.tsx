import styles from './download-button.module.scss';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

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
