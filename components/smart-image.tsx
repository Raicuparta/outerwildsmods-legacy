import { useAmp } from 'next/amp';
import Image from 'next/image';

type Props = Parameters<typeof Image>[0];

export const SmartImage: React.FunctionComponent<Props> = (props) => {
  const isAmp = useAmp();

  return isAmp ? <amp-img {...props} /> : <Image {...props} />;
};
