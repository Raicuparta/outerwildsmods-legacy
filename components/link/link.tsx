import styles from './link.module.scss';

type Props = {
  to: string;
}

export const Link: React.FunctionComponent<Props> = ({
  children,
  to,
}) => (
  <a
    className={styles.link}
    href={to}
    //target='_blank'
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
