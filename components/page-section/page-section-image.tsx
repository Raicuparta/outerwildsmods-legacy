import { useAmp } from 'next/amp';

import { SectionImageWrapper, SectionImage } from './page-section.styles';

type Props = {
  imageUrl: string;
  title?: string;
};

export const PageSectionImage: React.FunctionComponent<Props> = ({
  imageUrl,
  title,
}) => {
  const isAmp = useAmp();
  return isAmp ? null : (
    <SectionImageWrapper>
      <SectionImage src={imageUrl} alt={title} />
    </SectionImageWrapper>
  );
};
