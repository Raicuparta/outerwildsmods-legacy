import styles from '../../styles/layout.module.scss';
import useModDatabase from '../../hooks/useModDatabase';
import { ListItemCard } from '../../components/list-item-card';
import { DownloadButton } from '../../components/download-button';
import { PageSection } from '../../components/page-section';
import { SmartLink } from '../../components/smart-link';
import { TextLink } from '../../components/smart-link/text-link';

const modManagerDefaultDownloadUrl = 'https://github.com/Raicuparta/ow-mod-manager/releases/latest';


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
          <SmartLink as={`/mods/${mod.manifest.uniqueName}`} href="/mods/[mod]">
            <ListItemCard
              key={mod.repo}
              title={mod.manifest.name}
              description={mod.manifest.description}
              linkAs={`/mods/${mod.manifest.uniqueName}`}
              linkUrl="/mods/[mod]"
            />
          </SmartLink>
        ))}
      </PageSection>
    </div>
  )
}

export default Mods;
