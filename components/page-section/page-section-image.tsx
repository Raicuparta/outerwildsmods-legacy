import { SmartImage } from '../smart-image';
import { SectionImageWrapper } from './page-section.styles';

type Props = {
  imageUrl: string;
  title?: string;
};

export const PageSectionImage: React.FunctionComponent<Props> = ({
  imageUrl,
  title,
}) => (
  <SectionImageWrapper>
    <SmartImage
      src={imageUrl}
      alt={title}
      width={280}
      height={150}
      layout="responsive"
    />
  </SectionImageWrapper>
);
