import { useAmp } from 'next/amp';

import { PageSectionDescription, PageSectionImage } from '..';
import { Wrapper, TitleWrapper, Title, Line, PageSectionColumns } from './page-section.styles';

type Props = {
  id: string;
  title?: string;
  description?: string;
  imageUrl?: string;
};

export const PageSection: React.FunctionComponent<Props> = ({
  children,
  title,
  id,
  description,
  imageUrl,
}) => (
  <Wrapper>
    {title && (
      <TitleWrapper>
        <Title id={id}>
          {title}
        </Title>
        <Line />
      </TitleWrapper>
    )}
    {imageUrl || description ? (
      <PageSectionColumns>
        {description && (
          <PageSectionDescription description={description}>
            {children}
          </PageSectionDescription>
        )}
        {imageUrl && <PageSectionImage imageUrl={imageUrl} title={title} />}
      </PageSectionColumns>
    ) : (
      children
    )}
  </Wrapper>
);
