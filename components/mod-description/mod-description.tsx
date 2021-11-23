import gfm from 'remark-gfm';
import { TextLink } from '..';

import { ImageMap } from '../../helpers';
import { HeadingRenderer } from './heading-renderer';
import { ImageRenderer } from './image-renderer';
import { Markdown, Wrapper } from './mod-description.styles';

type Props = {
  readme?: string;
  externalImages?: ImageMap;
};

const plugins = [gfm];

export const ModDescription: React.FunctionComponent<Props> = ({
  readme,
  externalImages = {},
}) => (
  <Wrapper>
    {readme && (
      <Markdown
        skipHtml
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
