import { TitleWrapper, Title, Line } from './page-section.styles';

type Props = {
  id: string;
  spaced?: boolean;
};

export const PageSectionTitle: React.FunctionComponent<Props> = ({
  children,
  id,
  spaced = false,
}) => (
  <TitleWrapper>
    <Title spaced={spaced} id={id}>
      {children}
    </Title>
    <Line />
  </TitleWrapper>
);
