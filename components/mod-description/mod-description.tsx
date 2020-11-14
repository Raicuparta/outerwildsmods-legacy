import { useAmp } from 'next/amp';
import ReactMarkdown from 'react-markdown';

import { getRawContentUrl } from '../../helpers';
import { Manifest } from '../../services';
import { HeadingRenderer } from './heading-renderer';

import styles from './mod-description.module.scss';

type Props = {
  readme?: string;
  repo: string;
};

export const ModDescription: React.FunctionComponent<Props> = ({
  readme,
  repo,
}) => {
  const isAmp = useAmp();

  return (
    <div className={styles.modDescription}>
      {readme && (
        <ReactMarkdown
          className={styles.markdown}
          skipHtml
          transformImageUri={(uri) =>
            uri.startsWith('http') ? uri : `${getRawContentUrl(repo)}/${uri}`
          }
          renderers={{ heading: HeadingRenderer }}
          disallowedTypes={isAmp ? ['image'] : undefined}
        >
          {readme}
        </ReactMarkdown>
      )}
    </div>
  );
};
