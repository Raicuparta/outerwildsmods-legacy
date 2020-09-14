import styles from './page-layout.module.scss';

export const PageLayoutColumns: React.FunctionComponent = ({ children }) => (
  <div className={styles.pageLayoutColumns}>{children}</div>
);
