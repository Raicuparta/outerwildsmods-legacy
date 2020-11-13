import { ListItemCard, SmartLink } from '..';

type Author = {
  userName: string;
  description: string;
};

const authors: Author[] = [
  {
    userName: 'AmazingAlek',
    description:
      'Made OWML and Light Bramble. Contributor to the mod manager and QSB.',
  },
  {
    userName: 'clubby789',
    description: 'Made OWClock.',
  },
  {
    userName: 'MisterNebula',
    description: 'Made Marshmallow and StopTime. Contributor to QSB and OWML.',
  },
  {
    userName: 'Raicuparta',
    description:
      'Made NomaiVR, mod manager, and this page. Contributor to QSB and OWML.',
  },
  {
    userName: 'ShoosGun',
    description:
      'Made the mod installer for Outer Wilds Alpha. Also made a bunch of mods for the Alpha.',
  },
  {
    userName: 'TAImatem',
    description:
      'The first modder. Creator of TAICheat and contributor to OWML.',
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
