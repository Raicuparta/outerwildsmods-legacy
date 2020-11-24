import { SmartImage } from '../smart-image';
import { SectionImageWrapper } from './page-section.styles';

type Props = {
  imageUrl: string;
  title?: string;
  hideOnMobile?: boolean;
};

export const PageSectionImage: React.FunctionComponent<Props> = ({
  hideOnMobile = true,
  imageUrl,
  title,
}) => (
  <SectionImageWrapper hideOnMobile={hideOnMobile}>
    <SmartImage
      src={imageUrl}
      alt={title}
      width={280}
      height={150}
      layout="responsive"
    />
  </SectionImageWrapper>
);
