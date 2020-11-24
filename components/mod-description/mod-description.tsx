import gfm from 'remark-gfm';

import { getRawContentUrl } from '../../helpers';
import { TextLink } from '../smart-link';
import { HeadingRenderer } from './heading-renderer';
import { ImageRenderer } from './image-renderer';
import { Markdown, Wrapper } from './mod-description.styles';

type Props = {
  readme?: string;
  repo: string;
};

const plugins = [gfm];

export const ModDescription: React.FunctionComponent<Props> = ({
  readme,
  repo,
}) => (
  <Wrapper>
    {readme && (
      <Markdown
        skipHtml
        transformImageUri={(uri) =>
          uri.startsWith('http') ? uri : `${getRawContentUrl(repo)}/${uri}`
        }
        renderers={{
          heading: HeadingRenderer,
          link: TextLink,
          image: ImageRenderer,
        }}
        plugins={plugins}
      >
        {readme}
      </Markdown>
    )}
  </Wrapper>
);
