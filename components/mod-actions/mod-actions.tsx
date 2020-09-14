import { TextLink, LinkButton } from '..';
import { Mod } from '../../services';

import styles from './mod-actions.module.scss';

type Props = {
  mod: Mod;
  modManagerDownloadUrl?: string;
};

export const ModActions: React.FunctionComponent<Props> = ({
  modManagerDownloadUrl,
  mod,
}) => (
  <div className={styles.modActions}>
    <div className={styles.content}>
      <LinkButton href={modManagerDownloadUrl} variant="primary">
        <div>Download mod using</div>
        <div>Mod Manager</div>
      </LinkButton>
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
      <LinkButton href={mod.downloadUrl}>Download mod files</LinkButton>
    </div>
  </div>
);
