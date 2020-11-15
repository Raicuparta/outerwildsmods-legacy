import amp, { useAmp } from 'next/amp';

import {
  Wrapper,
  Avatar,
  Bullet,
  UserName,
  DescriptionWrapper,
  Description,
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
      {imageUrl && (isAmp ? (
        <amp-img
          className="list-item-card-image"
          alt={title}
          src={imageUrl}
          width="50"
          height="50"
          layout="fixed"
        />
      ) : (
        <img
          className="list-item-card-image"
          alt={title}
          src={imageUrl}
          width="50"
          height="50"
        />
      ))}
      {/* {imageUrl && <Avatar alt={title} src={imageUrl} />} */}
      {!imageUrl && <Bullet />}
      <div>
        <UserName>{title}</UserName>
        {description && (
          <DescriptionWrapper>
            <Description>
              <small>{description} </small>
            </Description>
          </DescriptionWrapper>
        )}
      </div>
    </Wrapper>
  );
};
