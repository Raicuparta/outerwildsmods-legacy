import { SectionDescription, SectionDescriptionWrapper } from './page-section.styles';

type Props = {
  description: string;
};

export const PageSectionDescription: React.FunctionComponent<Props> = ({
  description,
  children,
}) => (
  <SectionDescriptionWrapper>
    {description && <SectionDescription>{description}</SectionDescription>}
    {children}
  </SectionDescriptionWrapper>
);
