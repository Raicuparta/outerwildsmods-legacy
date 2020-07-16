import { Mod, ModTile } from '../mod-tile'
import styles from '../mod-list/mod-list.module.scss';

const authors: Mod[] = [
  {
    title: 'AmazingAlek',
    author: 'AmazingAlek',
    description: 'The creator of OWML and Light Bramble, and contributor to the mod manager and QSB.',
    repo: 'https://github.com/amazingalek',
    image: 'https://avatars1.githubusercontent.com/u/3322367?s=460&u=dfe93d65b1e5a1811d504d2e0a2ae85e68b8e21c&v=4',
  },
  {
    title: 'Raicuparta',
    author: 'Raicuparta',
    description: 'The creator of NomaiVR, QSB and the mod manager, and contributor to OWML.',
    repo: 'https://github.com/Raicuparta',
    image: 'https://avatars1.githubusercontent.com/u/3955124?s=400&u=d61b83c4ac5c9e98b7d83f49ad72ed5dbd1308a1&v=4',
  },
  {
    title: 'TAImatem',
    author: 'TAImatem',
    description: 'The first modder. Creator of TAICheat and contributor to OWML.',
    repo: 'https://github.com/TAImatem',
    image: 'https://avatars3.githubusercontent.com/u/5870358?s=400&v=4',
  },
  {
    title: 'misternebula',
    author: 'misternebula',
    description: 'The creator of Marshmallow, ObjectSpawner and StopTime, and contributor to OWML.',
    repo: 'https://github.com/misternebula',
    image: 'https://avatars2.githubusercontent.com/u/41904486?s=400&u=05bf53d0ac9a57c456fbd64f103a0eb3e0f40252&v=4',
  },
];

export const AuthorList: React.FunctionComponent = () => (
  <div className={styles.modList}>
    {authors.map(author => (
      <ModTile key={author.title} mod={author} />
    ))}
  </div>
);
