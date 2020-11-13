import styles from './page-layout.module.scss';

type Props = {
  size?: 'small' | 'medium';
  className?: string;
};

export const PageLayout: React.FunctionComponent<Props> = ({
  children,
  size = 'small',
  className = '',
}) => (
  <div className={`${styles.pageLayout} ${styles[size] ?? ''} ${className}`}>
    {children}
  </div>
);
