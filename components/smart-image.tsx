import { useAmp } from 'next/amp';
import Image from 'next/image';

type Props = Partial<Parameters<typeof Image>[0]>;

export const SmartImage: React.FunctionComponent<Props> = (props) => {
  const isAmp = useAmp();

  return isAmp ? <amp-img {...props} /> : <img {...props} />;
};
