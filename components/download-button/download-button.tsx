import styles from './download-button.module.css';

export const DownloadButton: React.FunctionComponent = ({ children }) => (
  <button className={styles.downloadButton}>{children}</button>
)
