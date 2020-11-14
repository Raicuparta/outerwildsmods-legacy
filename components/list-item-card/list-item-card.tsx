import { useAmp } from 'next/amp';
import styles from './list-item-card.module.scss';

export type ListItemCardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
};

export const ListItemCard: React.FunctionComponent<ListItemCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  const isAmp = useAmp();

  return (
    <span className={styles.listItemCard}>
      {imageUrl && !isAmp && (
        <img alt={title} className={styles.avatar} src={imageUrl} />
      )}
      {!imageUrl && (
        <span className={styles.bullet} />
      )}
      <div>
        <span className={styles.userName}>{title}</span>
        {description && !isAmp && (
          <div className={styles.descriptionWrapper}>
            <span className={styles.description}>
              <small>{description} </small>
            </span>
          </div>
        )}
      </div>
    </span>
  );
};
