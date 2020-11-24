import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { SmartLinkProps } from '..';
import { NavLinkWrapper } from './navigation.styles';

export const NavigationLink: React.FunctionComponent<SmartLinkProps> = ({
  children,
  href,
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <NavLinkWrapper isActive={isActive} href={href}>
        {children}
      </NavLinkWrapper>
    </Link>
  );
};
