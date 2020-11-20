import { useAmp } from 'next/amp';

import { PageSectionDescription, PageSectionImage } from '..';
import { PageSectionTitle } from './page-section-title';
import {
  Wrapper,
  TitleWrapper,
  Title,
  Line,
  PageSectionColumns,
} from './page-section.styles';

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
    {title && <PageSectionTitle id={id}>{title}</PageSectionTitle>}
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
