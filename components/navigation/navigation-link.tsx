import { useRouter } from 'next/dist/client/router';

import styles from './navigation.module.scss';
import { SmartLink, SmartLinkProps } from '..';

export const NavigationLink: React.FunctionComponent<SmartLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const { pathname } = useRouter();
  const isDisabled = pathname === href;

  return (
    <a
      className={`${styles.navigationLink} ${
        isDisabled ? styles.disabledLink : ''
      }`}
      href={isDisabled ? undefined : href}
      {...props}
    >
      {children}
    </a>
  );
};
