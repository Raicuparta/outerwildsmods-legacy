import { AuthorCard, Author } from "../author-card";

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

export const AuthorList: React.FunctionComponent = () => (
  <div>
    {authors.map((author) =>
      <AuthorCard {...author} />
    )}
  </div>
);
