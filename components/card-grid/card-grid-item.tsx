import { SmartImage } from '../smart-image';

import {
  ItemWrapper,
  ImageWrapper,
  UserName,
  DescriptionWrapper,
  Description,
  TextWrapper,
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
    <ImageWrapper>
      <SmartImage
        layout="fixed"
        alt={title}
        src={imageUrl}
        width="50"
        height="50"
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
