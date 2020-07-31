import styles from './text-link.module.scss';
import { SmartLink, SmartLinkProps } from '..';

export const TextLink: React.FunctionComponent<SmartLinkProps> = ({
  children,
  ...props
}) => (
  <SmartLink {...props} className={styles.textLink}>
    {children}
  </SmartLink>
);
