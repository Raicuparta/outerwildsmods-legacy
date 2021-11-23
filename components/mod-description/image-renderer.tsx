import Image from 'next/image';
import { ImageMap } from '../../helpers';

type Props = {
  src: string;
  alt: string;
  node: never;
};

export const ImageRenderer = (
  externalImages: ImageMap
): React.FunctionComponent<Props> => ({ src, alt, node, ...props }) => {
  return externalImages[src] ? (
    <Image
      alt={alt}
      src={externalImages[src] ?? src}
      height={15}
      width={60}
      layout="responsive"
      {...props}
    />
  ) : (
    <img src={src} />
  );
};
