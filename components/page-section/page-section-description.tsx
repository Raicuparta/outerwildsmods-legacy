import styles from './page-section.module.scss';

type Props = {
  description: string;
}

export const PageSectionDescription: React.FunctionComponent<Props> = ({
  description,
  children,
}) => (
  <div className={styles.sectionDescriptionWrapper}>
    {description && (
      <p className={styles.sectionDescription}>
        {description}
      </p>
    )}
    {children}
  </div>
);
