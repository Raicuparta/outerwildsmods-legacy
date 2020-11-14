import { TextLink } from '..';

import styles from './page-section.module.scss';
import { PageSectionDescription, PageSectionImage } from '..';

type Props = {
  id: string;
  title?: string;
  description?: string;
  imageUrl?: string;
};

export const PageSectionColumns: React.FunctionComponent = ({ children }) => (
  <div className={styles.sectionColumns}>{children}</div>
);

export const PageSection: React.FunctionComponent<Props> = ({
  children,
  title,
  id,
  description,
  imageUrl,
}) => (
  <section id={id} className={styles.pageSection}>
    {title && (
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>
          <a href={`#${id}`}>{title}</a>
        </h2>
        <hr className={styles.line} />
      </div>
    )}
    {imageUrl || description ? (
      <PageSectionColumns>
        {description && (
          <PageSectionDescription description={description}>
            {children}
          </PageSectionDescription>
        )}
        {imageUrl && <PageSectionImage imageUrl={imageUrl} title={title} />}
      </PageSectionColumns>
    ) : (
      children
    )}
  </section>
);
