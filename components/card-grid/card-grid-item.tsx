import Image from 'next/image';

import {
  ItemWrapper,
  ImageWrapper,
  Title,
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
      <Image
        layout="responsive"
        alt={title}
        src={imageUrl || '/images/placeholder.jpg'}
        height={100}
        width={280}
      />
    </ImageWrapper>
    <TextWrapper>
      <Title>{title}</Title>
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
