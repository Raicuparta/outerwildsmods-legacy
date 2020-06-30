import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css';
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
        <h1 className={utilStyles.heading2Xl}>Outer Wilds Mods</h1>
      </header>
      <h2 className={utilStyles.headingLg}>Outer Wilds Mod Manager</h2>
      <section className={styles.modManagerSection}>
        <div className={styles.modManagerImageWrapper}>
          <img className={styles.modManagerImage} src="images/mod-manager.png" />
        </div>
        <div className={styles.modManagerDescriptionWrapper}>
          <p className={styles.modManagerDescription}>
            Use the Outer Wilds Mod Manager for downloading, installing, and managing mods.
          </p>
          <a href="https://github.com/Raicuparta/ow-mod-manager">
            Source code on GitHub
          </a>
        </div>
      </section>
      <section>
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
