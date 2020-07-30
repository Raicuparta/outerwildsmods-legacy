import styles from '../../styles/layout.module.scss';
import useModDatabase from '../../hooks/useModDatabase';
import { ListItemCard } from '../../components/list-item-card';
import { DownloadButton } from '../../components/download-button';
import { PageSection } from '../../components/page-section';
import { SmartLink } from '../../components/smart-link';
import { TextLink } from '../../components/smart-link/text-link';

const modManagerDefaultDownloadUrl = 'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

export const getModPathName = (modName: string) => (
  modName.replace(/ /g, '').toLowerCase()
);

const getModPath = (modName: string) => (
  `mods/${getModPathName(modName)}`
);

const Mods: React.FunctionComponent = () => {
  const modDatabase = useModDatabase();

  const mods = modDatabase?.releases;
  const modManagerDownloadUrl = modDatabase?.modManager?.downloadUrl;

  return (
    <div className={styles.container}>
      <TextLink href="/">
        {'< Home page'}
      </TextLink>
      <PageSection id="mod-manager" description="All of the following mods can be downloaded and installed using the Outer Wilds Mod Manager.">
        <DownloadButton
          href={modManagerDownloadUrl ?? modManagerDefaultDownloadUrl}
          target={modManagerDownloadUrl ? undefined : '_blank' }
          rel="noopener noreferrer"
        >
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </PageSection>
      <PageSection title="Available mods" id="mods">
        {mods?.map(mod => (
          <SmartLink
            key={mod.repo}
            href="/mods/[mod]"
            as={getModPath(mod.manifest.name)}
          >
            <ListItemCard
              title={mod.manifest.name}
              description={mod.manifest.description}
            />
          </SmartLink>
        ))}
      </PageSection>
    </div>
  )
}

export default Mods;
