import Link  from 'next/link';

import styles from './list-item-card.module.scss';

export type Props = {
  title: string;
  description: string[] | string;
  imageUrl?: string;
};

const ItemDescription: React.FunctionComponent = ({ children }) => (
  <div className={styles.description}>
    <small>
      {children}
    </small>
  </div>
);

export const ListItemCard: React.FunctionComponent<Props> = ({
  title,
  imageUrl,
  description,
}) => (
  <span className={styles.listItemCard}>
    <div className={styles.nameImageWrapper}>
      {imageUrl && (
        <img
          alt={title}
          className={styles.avatar}
          src={imageUrl}
        />
      )}
      <span className={styles.userName}>
        {title}
      </span>
    </div>
    {description && (
      <div className={styles.descriptionWrapper}>
        {typeof(description) === 'string' && (
          <ItemDescription>
            {description}
          </ItemDescription>
        )}
        {typeof(description) === 'object' && (description.map(line => (
          <ItemDescription key={line}>
            {line}
          </ItemDescription>
        )))}
      </div>
    )}
  </span>
);
