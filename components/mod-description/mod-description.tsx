import ReactMarkdown from 'react-markdown';

import { getRawContentUrl } from '../../helpers';
import { Manifest } from '../../services';

import styles from './mod-description.module.scss';

type Props = {
  manifest: Manifest;
  readme?: string;
  repo: string;
};

export const ModDescription: React.FunctionComponent<Props> = ({
  manifest,
  readme,
  repo,
}) => (
  <div className={styles.modDescription}>
    <div className={styles.box}>
      <h1>{manifest.name}</h1>
      <p>{manifest.description}</p>
    </div>
    {readme && (
      <ReactMarkdown
        className={styles.markdown}
        skipHtml
        transformImageUri={(uri) =>
          uri.startsWith('http') ? uri : `${getRawContentUrl(repo)}/${uri}`
        }
      >
        {readme}
      </ReactMarkdown>
    )}
  </div>
);
