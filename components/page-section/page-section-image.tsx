import styles from './page-section.module.scss';

type Props = {
  imageUrl: string;
  title?: string;
}

export const PageSectionImage: React.FunctionComponent<Props> = ({
  imageUrl,
  title,
}) => (
  <div className={styles.sectionImageWrapper}>
    <img
      className={styles.sectionImage}
      src={imageUrl}
      alt={title}
    />
  </div>
);
