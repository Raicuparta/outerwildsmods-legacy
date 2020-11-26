import { SmartImage } from '../smart-image';
import { SectionImageWrapper } from './page-section.styles';

type Props = {
  imageUrl: string;
  title?: string;
  hideOnMobile?: boolean;
  height?: number;
};

export const PageSectionImage: React.FunctionComponent<Props> = ({
  hideOnMobile = true,
  imageUrl,
  title,
  height = 140,
}) => (
  <SectionImageWrapper hideOnMobile={hideOnMobile}>
    <SmartImage
      src={imageUrl}
      alt={title}
      height={height}
      width={280}
      layout="responsive"
    />
  </SectionImageWrapper>
);
