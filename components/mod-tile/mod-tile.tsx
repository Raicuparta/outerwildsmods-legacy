import styles from './mod-tile.module.scss';

export type Mod = {
  title: string;
  description: string;
  repo: string;
  author: string;
  image: string;
}

type Props = {
  mod: Mod;
};

export const ModTile: React.FunctionComponent<Props> = ({
  mod,
}) => (
  <div className={styles.modTile}>
    <img className={styles.modImage} src={mod.image} />
    <strong>{mod.title}</strong>
    <small className={styles.modAuthor}>by {mod.author}</small>
    <div className={styles.modContent}>
      <small className={styles.modDescription}>{mod.description}</small>
    </div>
  </div>
)
