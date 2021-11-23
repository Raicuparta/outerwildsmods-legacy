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
  index: number;
  imageUrl?: string;
};

const stringToNumber = function (str: string, seed = 3) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)) % 360;
};

export const CardGridItem: React.FunctionComponent<CardGridItemProps> = ({
  title,
  imageUrl,
  description,
  index,
}) => (
  <ItemWrapper>
    <ImageWrapper hue={imageUrl ? 0 : stringToNumber(title)}>
      {!imageUrl && <PlaceholderText>{title}</PlaceholderText>}
      <Image
        layout="intrinsic"
        alt={title}
        src={imageUrl || '/images/placeholder.jpg'}
        height={200}
        width={560}
        objectFit="cover"
        priority={index <= 6}
        quality={50}
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
