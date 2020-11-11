import ReactMarkdown from 'react-markdown';

import { getRawContentUrl } from '../../helpers';
import { Manifest } from '../../services';
import { HeadingRenderer } from './heading-renderer';

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
    {readme && (
      <ReactMarkdown
        className={styles.markdown}
        skipHtml
        transformImageUri={(uri) =>
          uri.startsWith('http') ? uri : `${getRawContentUrl(repo)}/${uri}`
        }
        renderers={{heading: HeadingRenderer}}
      >
        {readme}
      </ReactMarkdown>
    )}
  </div>
);
