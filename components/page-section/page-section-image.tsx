import { useAmp } from 'next/amp';

import styles from './page-section.module.scss';

type Props = {
  imageUrl: string;
  title?: string;
};

export const PageSectionImage: React.FunctionComponent<Props> = ({
  imageUrl,
  title,
}) => {
  const isAmp = useAmp();
  return isAmp ? null : (
    <div className={styles.sectionImageWrapper}>
      <img className={styles.sectionImage} src={imageUrl} alt={title} />
    </div>
  );
};
