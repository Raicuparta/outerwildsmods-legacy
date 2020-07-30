import styles from './mod-list.module.scss';
import { ListItemCard } from "../list-item-card";

export type Mod = {
  title: string;
  description: string[];
  repo: string;
  author: string;
  image: string;
}

const mods: Mod[] = [
  {
    title: 'OWML',
    description: ['Mod loader / framework. All available mods use this to interact and modify the game.'],
    author: 'AmazingAlek',
    repo: 'https://github.com/amazingalek/owml',
    image: 'images/owml.jpg',
  },
  {
    title: 'NomaiVR',
    description: ['VR Mod. Compatible with pretty much any VR headset. Most interactions have been modified for VR motion controls.'],
    author: 'Raicuparta',
    repo: 'https://github.com/Raicuparta/nomai-vr',
    image: 'images/nomai-vr.jpg',
  },
  {
    title: 'TAICheat',
    description: ['Collection of cheats that can be mapped to button / key combinations. Cheats include super jetpack, invincibility, and a lot more.'],
    author: 'TAImatem',
    repo: 'https://github.com/TAImatem/OW_TAIcheat',
    image: 'images/tai-cheat.png',
  },
  {
    title: 'Marshmallow',
    description: ['Planet creator. Users can create planets from JSON files, and share them with others.'],
    author: 'misternebula',
    repo: 'https://github.com/misternebula/Marshmallow',
    image: 'images/marshmallow.jpg',
  },
];

export const ModList: React.FunctionComponent = () => (
  <div>
    {mods.map(mod => (
      <ListItemCard
        title={mod.title}
        descriptionLines={mod.description}
        linkUrl={mod.repo}
        imageUrl={mod.image}
      />
    ))}
  </div>
);
