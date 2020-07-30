import styles from './list-item-card.module.scss';

export type Props = {
  title: string;
  imageUrl: string;
  linkUrl: string;
  descriptionLines: string[];
};

export const ListItemCard: React.FunctionComponent<Props> = ({
  title,
  imageUrl,
  linkUrl,
  descriptionLines,
}) => (
  <a href={linkUrl} className={styles.listItemCard}>
    <div className={styles.nameImageWrapper}>
      <img
        className={styles.avatar}
        src={imageUrl}
      />
      <span className={styles.userName}>
        {title}
      </span>
    </div>
    <div className={styles.descriptionWrapper}>
      {descriptionLines.map(line => (
        <div key={line} className={styles.description}>
          <small>
            {line}
          </small>
        </div>
      ))}
    </div>
  </a>
);
