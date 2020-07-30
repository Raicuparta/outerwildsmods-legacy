import Link from 'next/link';

export type Props = {
  href: string;
  as?: string;
  isExternal?: boolean;
  className?: string;
}

const LinkWrapper: React.FunctionComponent<Props> = ({
  children,
  href,
  as,
  isExternal,
}) => isExternal ? (
  <>{children}</>
) :(
  <Link href={href} as={as}>
    {children}
  </Link>
);

export const SmartLink: React.FunctionComponent<Props> = ({
  children,
  href,
  as,
  isExternal,
  className,
}) => {
  return (
    <LinkWrapper href={href} as={as} isExternal={isExternal} >
      <a
        href={as || href}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    </LinkWrapper>
  )
}
