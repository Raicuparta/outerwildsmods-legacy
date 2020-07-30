import { ListItemCard } from "../list-item-card";
import { SmartLink } from "../smart-link";

type Author = {
  userName: string;
  description: string[];
};

const authors: Author[] = [
  {
    userName: 'AmazingAlek',
    description: ['Creator of OWML and Light Bramble.', 'Contributor to the mod manager and QSB.'],
  },
  {
    userName: 'MisterNebula',
    description: ['Creator of Marshmallow and StopTime.', 'Contributor to QSB.'],
  },
  {
    userName: 'Raicuparta',
    description: ['Creator of NomaiVR and the mod manager.', 'Contributor to QSB and OWML'],
  },
  {
    userName: 'TAImatem',
    description: ['The first modder.', 'Creator of TAICheat and contributor to OWML'],
  },
];

const URL_BASE = 'https://github.com';

const getGitHubUrl = (userName: string) => `${URL_BASE}/${userName}`;

const getImageUrl = (userName: string, size: number) =>
  `${getGitHubUrl(userName)}.png?size=${size}`;

export const AuthorList: React.FunctionComponent = () => (
  <>
    {authors.map((author) => (
      <SmartLink
        key={author.userName}
        href={getGitHubUrl(author.userName)}
        isExternal
      >
        <ListItemCard
          title={author.userName}
          description={author.description}
          imageUrl={getImageUrl(author.userName, 100)}
        />
      </SmartLink>
    ))}
  </>
);
