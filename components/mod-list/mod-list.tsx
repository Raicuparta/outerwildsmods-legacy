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
    description: 'VR Mod. Compatible with pretty much any VR headset. Most interactions have been modified for VR gesture controls.',
    author: 'Raicuparta',
    repo: 'https://github.com/Raicuparta/nomai-vr',
  },
  {
    title: 'TAICheat',
    description: 'Collection of cheats that can be mapped to button / key combinations.',
    author: 'TAImatem',
    repo: 'https://github.com/TAImatem/OW_TAIcheat',
  },
  {
    title: 'Masrhmallow',
    description: 'Allows for creating new planets from JSON files.',
    author: 'TAImatem',
    repo: 'https://github.com/TAImatem/OW_TAIcheat',
  },
];

export const ModList: React.FunctionComponent = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={styles.modList}>
      {mods.map(mod => (
        <ModExpandable
          mod={mod}
          onClick={() => setExpanded(mod.title)}
          isExpanded={expanded === mod.title}
        />
      ))}
    </div>
  );
}
