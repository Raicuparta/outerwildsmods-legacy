import { TextLink } from '..';

import styles from './link-list.module.scss';

type LinkItem = {
  text: string;
  href: string;
};

type Props = {
  links: LinkItem[];
};

export const LinkList: React.FunctionComponent<Props> = ({ links }) => (
  <div className={styles.linkList}>
    {links.map(({ href, text }) => (
      <TextLink href={href} isExternal>
        {text}
      </TextLink>
    ))}
  </div>
);
