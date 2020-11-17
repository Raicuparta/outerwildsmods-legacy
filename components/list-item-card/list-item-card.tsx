import amp, { useAmp } from 'next/amp';

import {
  Wrapper,
  ImageWrapper,
  Bullet,
  UserName,
  DescriptionWrapper,
  Description,
  TextWrapper,
} from './list-item-card.styles';

export type ListItemCardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
};

export const ListItemCard: React.FunctionComponent<ListItemCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  const isAmp = useAmp();

  return (
    <Wrapper>
      {imageUrl && (
        <ImageWrapper>
          {isAmp ? (
            <amp-img
              className="list-item-card-image"
              alt={title}
              src={imageUrl}
              width="50"
              height="50"
            />
          ) : (
            <img
              className="list-item-card-image"
              alt={title}
              src={imageUrl}
              width="50"
              height="50"
            />
          )}
        </ImageWrapper>
      )}
      {!imageUrl && <Bullet />}
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
    </Wrapper>
  );
};
