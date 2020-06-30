import Head from 'next/head'

import styles from '../styles/layout.module.css';
import { DownloadButton } from '../components/download-button'
import useModDatabase from '../hooks/useModDatabase';

const Home: React.FunctionComponent = () => {
  const modDatabase = useModDatabase();

  const modManagerDefaultDownloadUrl = 'https://github.com/Raicuparta/ow-mod-manager/releases/latest';
  const modManagerDownloadUrl = modDatabase?.modManager?.downloadUrl ?? modManagerDefaultDownloadUrl;

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
        <DownloadButton href={modManagerDownloadUrl}>
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Outer Wilds?</h2>
        <div className={styles.sectionColumns}>

          <div className={styles.sectionDescriptionWrapper}>
            <p className={styles.sectionDescription}>
              Outer Wilds is a neat game. Check it out and buy it or whatever.
            </p>
            <div className={styles.verticalList}>
              <a href="https://store.steampowered.com/app/753640/Outer_Wilds/">
                Outer Wilds on Steam
              </a>
              <a href="https://www.epicgames.com/store/en-US/product/outerwilds/">
                Outer Wilds on Epic
              </a>
              <a href="https://www.mobiusdigitalgames.com/outer-wilds.html">
                Official website
              </a>
            </div>
          </div>
          <div className={styles.sectionImageWrapper}>
            <img className={styles.sectionImage} src="images/outer-wilds.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Community</h2>
        <div className={styles.sectionColumns}>
          <div className={styles.sectionDescriptionWrapper}>
            <p className={styles.sectionDescription}>
              Here is where you can find the people responsible for all these mods and tools.
            </p>
            <div className={styles.verticalList}>
              <a href="https://reddit.com/r/outerwilds">
                Outer Wilds on Reddit
              </a>
              <a href="https://discord.gg/qd3Zu5">
                Outer Wilds Discord
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>
          This page isn't official, nor affiliated with Mobius Digital, or anyone really.
        </p>
      </footer>
    </div>
  )
}

export default Home;
