import Image from 'next/image';
import { ImageMap } from '../../helpers';

type Props = {
  src: string;
  alt: string;
  node: never;
};

export const ImageRenderer =
  (externalImages: ImageMap): React.FunctionComponent<Props> =>
  ({ src, alt, node, ...props }) => {
    return externalImages[src] ? (
      <Image
        alt={alt}
        src={externalImages[src]?.url ?? src}
        height={externalImages[src]?.height ?? 150}
        width={externalImages[src]?.width ?? 600}
        layout="intrinsic"
        quality={50}
        {...props}
      />
    ) : (
      <img src={src} />
    );
  };
