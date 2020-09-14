import styles from './page-layout.module.scss';

type Props = {
  size?: 'small' | 'medium';
};

export const PageLayout: React.FunctionComponent<Props> = ({
  children,
  size = 'small',
}) => (
  <div className={`${styles.pageLayout} ${styles[size] ?? ''}`}>{children}</div>
);
