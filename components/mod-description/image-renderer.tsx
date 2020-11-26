import { SmartImage } from '../smart-image';

type Props = {
  src: string;
  alt: string;
};

export const ImageRenderer: React.FunctionComponent<Props> = ({ src, alt }) => (
  <SmartImage
    alt={alt}
    src={src}
    height={100}
    width={1000}
    layout="responsive"
  />
);
