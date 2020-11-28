import { ImageMap } from '../../helpers';
import { SmartImage } from '../smart-image';

type Props = {
  src: string;
  alt: string;
};

export const ImageRenderer = (
  externalImages: ImageMap
): React.FunctionComponent<Props> => ({ src, alt }) => (
  <SmartImage
    alt={alt}
    src={externalImages[src] ?? src}
    height={100}
    width={1000}
    layout="responsive"
  />
);
