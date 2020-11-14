import styles from './text-link.module.scss';
import { SmartLink, SmartLinkProps } from '..';

export const TextLink: React.FunctionComponent<SmartLinkProps> = ({
  children,
  className,
  ...props
}) => (
  <SmartLink {...props} className={`${className} ${styles.textLink}`}>
    {children}
  </SmartLink>
);
