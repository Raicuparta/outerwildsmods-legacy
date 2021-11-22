import { SmartImage } from '../smart-image';

import {
  ItemWrapper,
  ImageWrapper,
  UserName,
  DescriptionWrapper,
  Description,
  TextWrapper,
  PlaceholderText,
} from './card-grid.styles';

export type CardGridItemProps = {
  title: string;
  description?: string;
  imageUrl?: string;
};

export const CardGridItem: React.FunctionComponent<CardGridItemProps> = ({
  title,
  imageUrl,
  description,
}) => (
  <ItemWrapper>
    <ImageWrapper hue={imageUrl ? 0 : Math.random()}>
      {!imageUrl && <PlaceholderText>{title}</PlaceholderText>}
      <SmartImage
        layout="fixed"
        alt={title}
        src={imageUrl || '/images/placeholder.jpg'}
        height="100px"
        width="280px"
      />
    </ImageWrapper>
    <TextWrapper>
      <UserName>{title}</UserName>
      {description && (
        <DescriptionWrapper>
          <Description>
            <small>{description} </small>
          </Description>
        </DescriptionWrapper>
      )}
    </TextWrapper>
  </ItemWrapper>
);
