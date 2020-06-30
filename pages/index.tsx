import Head from 'next/head'

import styles from '../styles/layout.module.css';
import { DownloadButton } from '../components/download-button'
import useModDatabase from '../hooks/useModDatabase';

const Home: React.FunctionComponent = () => {
  const modDatabase = useModDatabase();

  const isDatabaseLoaded = modDatabase !== undefined;

  return (
    <div className={styles.container}>
      <Head>
        <title>Outer Wilds Mods</title>
      </Head>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Outer Wilds Mods</h1>
      </header>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Outer Wilds Mod Manager</h2>
        <div className={styles.sectionColumns}>
          <div className={styles.sectionImageWrapper}>
            <img className={styles.sectionImage} src="images/mod-manager.png" />
          </div>
          <div className={styles.sectionDescriptionWrapper}>
            <p className={styles.sectionDescription}>
              Use the Outer Wilds Mod Manager for downloading, installing, and managing mods.
            </p>
            <a href="https://github.com/Raicuparta/ow-mod-manager">
              Source code on GitHub
            </a>
          </div>
        </div>
        <DownloadButton
          href={isDatabaseLoaded ? modDatabase?.modManager.downloadUrl : '#'}
          disabled={!isDatabaseLoaded}
        >
          {isDatabaseLoaded ? (
            'Download Outer Wilds Mod Manager'
          ) : (
            'Getting latest version of Mod Manager...'
          )}
        </DownloadButton>
      </section>
    </div>
  )
}

export default Home;
