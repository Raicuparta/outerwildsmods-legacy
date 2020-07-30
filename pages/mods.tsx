import styles from '../styles/layout.module.scss';
import useModDatabase from '../hooks/useModDatabase';
import { ListItemCard } from '../components/list-item-card';
import { Link } from '../components/link';
import { DownloadButton } from '../components/download-button';
import { PageSection } from '../components/page-section';

const modManagerDefaultDownloadUrl = 'https://github.com/Raicuparta/ow-mod-manager/releases/latest';


const Mods: React.FunctionComponent = () => {
  const modDatabase = useModDatabase();

  const mods = modDatabase?.releases;
  const modManagerDownloadUrl = modDatabase?.modManager?.downloadUrl;

  return (
    <div className={styles.container}>
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
          <ListItemCard
            title={mod.manifest.name}
            description={[mod.manifest.description]}
            linkUrl={`/mods/${mod.manifest.uniqueName}`}
          />
        ))}
        {/* <table>
          <thead>
            <tr>
              <td>
                Name
              </td>
              <td>
                Author
              </td>
              <td>
                Downloads
              </td>
            </tr>
          </thead>
          <tbody>
            {mods?.map(mod => (
              <tr key={mod.repo}>
                <td>
                  <Link to={mod.downloadUrl}>
                    {mod.manifest.name}
                  </Link>
                </td>
                <td>
                  {mod.manifest.author}
                </td>
                <td>
                  {mod.downloadCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </PageSection>
    </div>
  )
}

export default Mods;
