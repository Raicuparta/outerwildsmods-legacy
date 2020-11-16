import { useAmp } from 'next/amp';

import { SectionImageWrapper } from './page-section.styles';

type Props = {
  imageUrl: string;
  title?: string;
};

export const PageSectionImage: React.FunctionComponent<Props> = ({
  imageUrl,
  title,
}) => {
  const isAmp = useAmp();
  return (
    <SectionImageWrapper>
      {isAmp ? (
        <amp-img
          src={imageUrl}
          alt={title}
          width={280}
          height={140}
          className="page-section-image"
        />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="page-section-image"
        />
      )}
    </SectionImageWrapper>
  );
};
