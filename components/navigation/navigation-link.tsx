import { useRouter } from 'next/dist/client/router';

import { SmartLinkProps } from '..';
import { NavLinkWrapper } from './navigation.styles';

export const NavigationLink: React.FunctionComponent<SmartLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <NavLinkWrapper
      isActive={isActive}
      href={isActive ? undefined : href}
    >
      {children}
    </NavLinkWrapper>
  );
};
