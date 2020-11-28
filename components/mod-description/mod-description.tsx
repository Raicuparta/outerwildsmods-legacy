import gfm from 'remark-gfm';

import { getRawContentUrl, ImageMap } from '../../helpers';
import { TextLink } from '../smart-link';
import { HeadingRenderer } from './heading-renderer';
import { ImageRenderer } from './image-renderer';
import { Markdown, Wrapper } from './mod-description.styles';

type Props = {
  readme?: string;
  repo: string;
  externalImages?: ImageMap;
};

const plugins = [gfm];

export const ModDescription: React.FunctionComponent<Props> = ({
  readme,
  repo,
  externalImages = {},
}) => (
  <Wrapper>
    {readme && (
      <Markdown
        skipHtml
        // transformImageUri={(uri) =>
        //   uri.startsWith('http') ? uri : `${getRawContentUrl(repo)}/${uri}`
        // }
        renderers={{
          heading: HeadingRenderer,
          link: TextLink,
          image: ImageRenderer(externalImages),
        }}
        plugins={plugins}
      >
        {readme}
      </Markdown>
    )}
  </Wrapper>
);
