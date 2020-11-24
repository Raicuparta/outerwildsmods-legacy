import { SmartImage } from '../smart-image';

type Props = Parameters<typeof SmartImage>[0];

export const ImageRenderer: React.FunctionComponent<Props> = (props) => (
  <SmartImage {...props} height={4} width={30} layout="responsive" />
);
