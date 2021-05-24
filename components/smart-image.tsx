import { useAmp } from 'next/amp';
import Image from 'next/image';

type ImageProps = Partial<Parameters<typeof Image>[0]> & {
  ampHeight?: number;
  ampWidth?: number;
};

export const SmartImage: React.FunctionComponent<ImageProps> = ({
  ampHeight,
  ampWidth,
  ...props
}) => {
  const isAmp = useAmp();

  return isAmp ? (
    <amp-img
      {...props}
      height={ampHeight || props.height}
      width={ampWidth || props.width}
    />
  ) : (
    <img
      {...props}
      loading="lazy"
    />
  );
};
