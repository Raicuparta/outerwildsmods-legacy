import styles from './page-section.module.scss';
import { PageSectionDescription } from './page-section-description';
import { PageSectionImage } from './page-section-image';

type Props = {
  title: string;
  id: string;
  description?: string;
  imageUrl?: string;
};

export const PageSectionColumns: React.FunctionComponent = ({ children }) => (
  <div className={styles.sectionColumns}>
    {children}
  </div>
)

export const PageSection: React.FunctionComponent<Props> = ({
  children,
  title,
  id,
  description,
  imageUrl,
  }) => (
  <section id={id} className={styles.pageSection}>
    <h2 className={styles.sectionTitle}>
      <a href={`#${id}`}>
        {title}
      </a>
    </h2>
    {(imageUrl || description) ? (
      <PageSectionColumns>
        {description && (
          <PageSectionDescription description={description}>
            {children}
          </PageSectionDescription>
        )}
        {imageUrl && (
          <PageSectionImage
            imageUrl={imageUrl}
            title={title}
          />
        )}
      </PageSectionColumns>
    ) : (
      children
    )}
  </section>
);
