import { SmartImage } from '../smart-image';

type Props = {
  src: string;
};

export const ImageRenderer: React.FunctionComponent<Props> = ({ src }) => (
  <SmartImage src={src} height={4} width={30} layout="responsive" />
);
