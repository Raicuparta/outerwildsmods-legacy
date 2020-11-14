import { ListItemCard, SmartLink } from '..';

import styles from './mod-list.module.scss';

export type Mod = {
  title: string;
  description?: string;
  path: string;
  image?: string;
};

const mods: Mod[] = [
  {
    title: 'NomaiVR',
    description: 'Adds support for VR devices. Full motion control support.',
    path: 'nomaivr',
    image: 'images/nomai-vr.png',
  },
  {
    title: 'QSB',
    description: 'Quantum Space Buddies. Adds online multiplayer to the game.',
    path: 'quantumspacebuddies',
    image: 'images/qsb.jpg',
  },
  {
    title: 'Light Bramble',
    description:
      'Makes the Dark Bramble less scary. Options to remove scary elements individually.',
    path: 'lightbramble',
    image: 'images/light-bramble.jpg',
  },
  {
    title: 'TAICheat',
    description:
      'Collection of cheats. Super jetpack, invincibility, and a lot more.',
    path: 'taicheat',
    image: 'images/tai-cheat.png',
  },
  {
    title: 'More mods',
    path: '',
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
