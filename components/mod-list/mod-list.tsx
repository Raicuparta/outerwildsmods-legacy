import { ListItemCard, SmartLink } from '..';

import styles from './mod-list.module.scss';

export type Mod = {
  title: string;
  description: string[];
  path: string;
  author: string;
  image: string;
};

const mods: Mod[] = [
  {
    title: 'NomaiVR',
    description: [
      'Adds support for VR devices.',
      'Full motion control support.',
    ],
    author: 'Raicuparta',
    path: 'nomaivr',
    image: 'images/nomai-vr.png',
  },
  {
    title: 'Light Bramble',
    description: [
      'Makes the Dark Bramble less scary.',
      'Options to remove scary elements individually.',
    ],
    author: 'AmazingAlek',
    path: 'lightbramble',
    image: 'images/light-bramble.jpg',
  },
  {
    title: 'TAICheat',
    description: [
      'Collection of cheats.',
      'Super jetpack, invincibility, and a lot more.',
    ],
    author: 'TAImatem',
    path: 'taicheat',
    image: 'images/tai-cheat.png',
  },
  {
    title: 'Marshmallow',
    description: [
      'Planet creator.',
      'Create planets and share them with others.',
    ],
    author: 'misternebula',
    path: 'marshmallow',
    image: 'images/marshmallow.png',
  },
];

export const ModList: React.FunctionComponent = () => (
  <div>
    {mods.map((mod) => (
      <SmartLink key={mod.path} href={`/mods/${mod.path}`}>
        <ListItemCard
          title={mod.title}
          description={mod.description}
          imageUrl={mod.image}
        />
      </SmartLink>
    ))}
  </div>
);
