import styles from './download-button.module.css';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

interface Props extends AnchorProps {
  disabled: boolean;
}

export const DownloadButton: React.FunctionComponent<Props> = ({
  children,
  disabled,
  ...props
}) => (
  <a
    className={`${styles.downloadButton} ${disabled ? styles.disabled : ''}`}
    {...props}
  >
    {children}
  </a>
)
