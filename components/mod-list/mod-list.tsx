import styles from './mod-list.module.scss';
import { ListItemCard } from "../list-item-card";
import { SmartLink } from '../smart-link';

export type Mod = {
  title: string;
  description: string[];
  repo: string;
  author: string;
  image: string;
}

const mods: Mod[] = [
  {
    title: 'NomaiVR',
    description: ['Adds support for VR devices.', 'Full motion control support.'],
    author: 'Raicuparta',
    repo: 'https://github.com/Raicuparta/nomai-vr',
    image: 'images/nomai-vr.png',
  },
  {
    title: 'Light Bramble',
    description: ['Makes the Dark Bramble less scary.', 'Options to remove scary elements individually.'],
    author: 'AmazingAlek',
    repo: 'https://github.com/amazingalek/owml-light-bramble',
    image: 'images/light-bramble.jpg',
  },
  {
    title: 'TAICheat',
    description: ['Collection of cheats.', 'Super jetpack, invincibility, and a lot more.'],
    author: 'TAImatem',
    repo: 'https://github.com/TAImatem/OW_TAIcheat',
    image: 'images/tai-cheat.png',
  },
  {
    title: 'Marshmallow',
    description: ['Planet creator.', 'Create planets and share them with others.'],
    author: 'misternebula',
    repo: 'https://github.com/misternebula/Marshmallow',
    image: 'images/marshmallow.png',
  },
];

export const ModList: React.FunctionComponent = () => (
  <div>
    {mods.map(mod => (
      <SmartLink
        key={mod.repo}
        href={mod.repo}
        isExternal
      >
        <ListItemCard
          title={mod.title}
          description={mod.description}
          imageUrl={mod.image}
        />
      </SmartLink>
    ))}
  </div>
);
