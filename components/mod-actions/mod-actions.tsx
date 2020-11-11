import { TextLink, LinkButton } from '..';
import { Mod } from '../../services';
import { WindowsIcon } from '../windows-icon';

import styles from './mod-actions.module.scss';

type Props = {
  mod: Mod;
  modManagerDownloadUrl?: string;
  fullWidth?: boolean;
};

export const ModActions: React.FunctionComponent<Props> = ({
  modManagerDownloadUrl,
  mod,
  fullWidth,
}) => (
  <div className={`${styles.modActions} ${fullWidth ? styles.fullWidth : ''}`}>
    <div className={styles.content}>
      <h1 className={styles.title}>{mod.manifest.name}</h1>
      <ul>
        <li>
          <TextLink isExternal href={mod.repo}>
            Source code
          </TextLink>
        </li>
        <li>By {mod.manifest.author}</li>
        <li>{mod.downloadCount} downloads</li>
        <li>Version {mod.manifest.version}</li>
      </ul>
      <p>{mod.manifest.description}</p>
      <LinkButton
        href={modManagerDownloadUrl}
        variant="primary"
        className={styles.managerButton}
      >
        <WindowsIcon />
        Install mod using Mod Manager
      </LinkButton>
      <LinkButton href={mod.downloadUrl}><small>Download mod files</small></LinkButton>
    </div>
  </div>
);
