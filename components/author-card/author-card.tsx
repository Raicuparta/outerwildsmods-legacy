import styles from './author-card.module.scss';

export type Author = {
  userName: string;
  description: string[];
};

const URL_BASE = 'http://github.com';

const getGitHubUrl = (userName: string) => `${URL_BASE}/${userName}`;

const getImageUrl = (userName: string, size: number) =>
  `${getGitHubUrl(userName)}.png?size=${size}`;

export const AuthorCard: React.FunctionComponent<Author> = ({
  userName,
  description,
}) => (
  <a href={getGitHubUrl(userName)} className={styles.author}>
    <div className={styles.nameImageWrapper}>
      <img
        className={styles.avatar}
        src={getImageUrl(userName, 100)}
      />
      <span>
        {userName}
      </span>
    </div>
    <div className={styles.descriptionWrapper}>
      {description.map(line => (
        <div className={styles.description}>
          <small>
            {line}
          </small>
        </div>
      ))}
    </div>
  </a>
);
