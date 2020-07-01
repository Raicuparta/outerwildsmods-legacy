import { useState } from "react";

import { ModExpandable } from "../mod-expandable";
import { Props as Mod } from '../mod-expandable';
import styles from './mod-list.module.scss';


const mods: Mod[] = [
  {
    title: 'NomaiVR',
    description: 'VR Mod. Compatible with pretty much any VR headset. Most interactions have been modified for VR gesture controls.',
    author: 'Raicuparta',
    repo: 'https://github.com/Raicuparta/nomai-vr',
  },
  {
    title: 'NomaiVR2',
    description: 'VR Mod. Compatible with pretty much any VR headset. Most interactions have been modified for VR gesture controls.',
    author: 'Raicuparta',
    repo: 'https://github.com/Raicuparta/nomai-vr',
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
