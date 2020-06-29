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
      <section className={utilStyles.headingMd}>
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
