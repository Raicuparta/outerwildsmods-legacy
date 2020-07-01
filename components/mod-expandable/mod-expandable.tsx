import styles from './mod-expandable.module.scss';

export type Mod = {
  title: string;
  description: string;
  repo: string;
  author: string;
}

type Props = {
  mod: Mod;
  onClick: () => void;
  isExpanded: boolean;
};

export const ModExpandable: React.FunctionComponent<Props> = ({
  mod,
  isExpanded,
  onClick,
}) => (
  <div className={styles.expandable} >
    <button className={styles.expandableButton} onClick={onClick}>
      {mod.title} <small className={styles.modAuthor}>by {mod.author}</small>
    </button>
    {isExpanded && (
      <div className={styles.expandableContent}>
        <p className={styles.modDescription}>{mod.description}</p>
        <a href={mod.repo}>Source code</a>
      </div>
    )}
  </div>
)
