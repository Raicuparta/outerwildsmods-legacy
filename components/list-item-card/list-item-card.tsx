import styles from './list-item-card.module.scss';

export type Props = {
  title: string;
  linkUrl: string;
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
  linkUrl,
  description,
}) => (
  <a href={linkUrl} className={styles.listItemCard}>
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
    <div className={styles.descriptionWrapper}>
      {typeof(description) === 'string' && (
        <ItemDescription>
          {description}
        </ItemDescription>
      )}
      {typeof(description) === 'object' && (description.map(line => (
        <ItemDescription>
        {line}
        </ItemDescription>
      )))}

    </div>
  </a>
);
