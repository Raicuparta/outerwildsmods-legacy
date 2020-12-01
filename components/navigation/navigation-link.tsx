import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { SmartLinkProps } from '..';
import { NavLinkWrapper, NavLinkAdWrapper, WishlistLabel } from './navigation.styles';

type Props = SmartLinkProps & {
  isAd?: boolean;
};

export const NavigationLink: React.FunctionComponent<Props> = ({
  children,
  href,
  isAd = false,
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  const Wrapper = isAd ? NavLinkAdWrapper : NavLinkWrapper;

  return (
    <Link href={href}>
      <Wrapper
        isActive={isActive}
        href={href}
        target={isAd ? '_blank' : undefined}
        rel={isAd ? 'noopener noreferrer' : undefined}
      >
        {children}
        {isAd && (<WishlistLabel>
          Wishlist now!
        </WishlistLabel>)}
      </Wrapper>
    </Link>
  );
};
