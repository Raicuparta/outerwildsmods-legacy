import { useState } from "react";

import { ModExpandable } from "../mod-expandable";
import { Mod } from '../mod-expandable';
import styles from './mod-list.module.scss';


const mods: Mod[] = [
  {
    title: 'OWML',
    description: 'Mod loader / framework. All available mods use this to interact and modify the game.',
    author: 'AmazingAlek',
    repo: 'https://github.com/amazingalek/owml',
  },
  {
    title: 'NomaiVR',
    description: 'VR Mod. Compatible with pretty much any VR headset. Most interactions have been modified for VR motion controls.',
    author: 'Raicuparta',
    repo: 'https://github.com/Raicuparta/nomai-vr',
  },
  {
    title: 'TAICheat',
    description: 'Collection of cheats that can be mapped to button / key combinations. Cheats include super jetpack, invincibility, and a lot more.',
    author: 'TAImatem',
    repo: 'https://github.com/TAImatem/OW_TAIcheat',
  },
  {
    title: 'Masrhmallow',
    description: 'Planet creator. Users can create planets from JSON files, and share them with others.',
    author: 'TAImatem',
    repo: 'https://github.com/TAImatem/OW_TAIcheat',
  },
];

export const ModList: React.FunctionComponent = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleModClick = (modTitle: string) => () => {
    setExpanded(modTitle === expanded ? null : modTitle);
  }

  return (
    <div className={styles.modList}>
      {mods.map(mod => (
        <ModExpandable
          mod={mod}
          onClick={handleModClick(mod.title)}
          isExpanded={expanded === mod.title}
        />
      ))}
    </div>
  );
}
