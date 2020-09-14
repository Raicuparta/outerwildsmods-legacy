import ReactMarkdown from 'react-markdown';

import { getRawContentUrl } from '../../helpers';
import { Mod } from '../../services';

import styles from './mod-description.module.scss';

type Props = {
  mod: Mod;
  readme?: string;
};

export const ModDescription: React.FunctionComponent<Props> = ({
  mod,
  readme,
}) => (
  <div className={styles.modDescription}>
    <div className={styles.box}>
      <h1>{mod.manifest.name}</h1>
      <p>{mod.manifest.description}</p>
    </div>
    {readme && mod && (
      <ReactMarkdown
        className={styles.markdown}
        skipHtml
        transformImageUri={(uri) =>
          uri.startsWith('http') ? uri : `${getRawContentUrl(mod.repo)}/${uri}`
        }
      >
        {readme}
      </ReactMarkdown>
    )}
  </div>
);
