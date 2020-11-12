import { TextLink, LinkButton } from '..';
import { Mod } from '../../services';
import { WindowsIcon } from '../windows-icon';

import styles from './mod-actions.module.scss';

type Props = {
  mod: Mod;
  fullWidth?: boolean;
};

export const ModActions: React.FunctionComponent<Props> = ({
  mod,
  fullWidth,
}) => (
  <div className={`${styles.modActions} ${fullWidth ? styles.fullWidth : ''}`}>
    <div className={styles.content}>
      <h1 className={styles.title}>{mod.manifest.name}</h1>
        <TextLink isExternal href={mod.repo}>
        by {mod.manifest.author}
        </TextLink>
      <p>{mod.manifest.description}</p>
      <div>
        <small>
          Downloaded {mod.downloadCount} times
        </small>
      </div>
      <LinkButton
        href="/mod-manager"
        variant="primary"
        className={styles.managerButton}
      >
        Install mod using Mod Manager
      </LinkButton>
      <LinkButton href={mod.downloadUrl}>
        <small>
          <div>Download mod files</div>
          <div>Version {mod.manifest.version}</div>
        </small>
      </LinkButton>
    </div>
  </div>
);
