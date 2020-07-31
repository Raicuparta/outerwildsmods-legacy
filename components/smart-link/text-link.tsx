import styles from './text-link.module.scss';
import { SmartLink, Props as SmartLinkProps } from './smart-link';

export const TextLink: React.FunctionComponent<SmartLinkProps> = ({
  children,
  ...props
}) => (
  <SmartLink {...props} className={styles.textLink}>
    {children}
  </SmartLink>
);
