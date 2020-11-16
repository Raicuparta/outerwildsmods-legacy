import { useAmp } from 'next/amp';
import gfm from 'remark-gfm';

import { getRawContentUrl } from '../../helpers';
import { HeadingRenderer } from './heading-renderer';
import { Markdown, Wrapper } from './mod-description.styles';

type Props = {
  readme?: string;
  repo: string;
};

const plugins = [gfm];

export const ModDescription: React.FunctionComponent<Props> = ({
  readme,
  repo,
}) => {
  const isAmp = useAmp();

  return (
    <Wrapper>
      {readme && (
        <Markdown
          skipHtml
          transformImageUri={(uri) =>
            uri.startsWith('http') ? uri : `${getRawContentUrl(repo)}/${uri}`
          }
          renderers={{
            heading: HeadingRenderer,
          }}
          disallowedTypes={isAmp ? ['image'] : undefined}
          plugins={plugins}
        >
          {readme}
        </Markdown>
      )}
    </Wrapper>
  );
};
