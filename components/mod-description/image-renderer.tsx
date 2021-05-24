import { useAmp } from 'next/amp';
import { ImageMap } from '../../helpers';
import { SmartImage } from '../smart-image';

type Props = {
  src: string;
  alt: string;
  node: never;
};

export const ImageRenderer = (
  externalImages: ImageMap
): React.FunctionComponent<Props> => ({ src, alt, node, ...props }) => {
  const isAmp = useAmp();

  return (!isAmp || externalImages[src]) ? (
    <SmartImage
      alt={alt}
      src={externalImages[src] ?? src}
      height={isAmp ? 100 : undefined}
      width={isAmp ? 1000 : undefined}
      layout="responsive"
      {...props}
    />
  ) : null;
};
