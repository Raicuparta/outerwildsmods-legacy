import { TextLink } from '..';

import { LinkWrapper } from './link-list.styles';

type LinkItem = {
  text: string;
  href: string;
};

type Props = {
  links: LinkItem[];
};

export const LinkList: React.FunctionComponent<Props> = ({ links }) => (
  <div>
    {links.map(({ href, text }) => (
      <LinkWrapper key={href}>
        <TextLink href={href} isExternal>
          {text}
        </TextLink>
      </LinkWrapper>
    ))}
  </div>
);
