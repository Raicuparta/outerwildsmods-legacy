import { SmartImage } from '../smart-image';

type Props = {
  src: string;
  alt: string;
};

export const ImageRenderer: React.FunctionComponent<Props> = ({ src, alt }) => (
  <SmartImage alt={alt} src={src} height={4} width={30} layout="responsive" />
);
