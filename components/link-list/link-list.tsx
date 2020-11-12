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
      <div className={styles.linkWrapper}>
        <TextLink
          href={href}
          isExternal
          key={href}
        >
          {text}
        </TextLink>
      </div>
    ))}
  </div>
);
