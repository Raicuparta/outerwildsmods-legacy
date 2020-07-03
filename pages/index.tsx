import Head from 'next/head'

import styles from '../styles/layout.module.scss';
import { DownloadButton } from '../components/download-button'
import useModDatabase from '../hooks/useModDatabase';
import { Analytics } from '../components/analytics';
import { ModList } from '../components/mod-list';

const Home: React.FunctionComponent = () => {
  const modDatabase = useModDatabase();

  const modManagerDefaultDownloadUrl = 'https://github.com/Raicuparta/ow-mod-manager/releases/latest';
  const modManagerDownloadUrl = modDatabase?.modManager?.downloadUrl;

  return (
    <div className={styles.container}>
      <Head>
        <Analytics id="UA-171434021-1" />
        <title>Outer Wilds Mods</title>
        <meta name="Description" content="Find all the tools needed to mod Outer Wilds. Download and install mods with the Outer Wilds Mod Manager"></meta>
      </Head>
      <header className={styles.header}>
        <img
          className={styles.titleIcon}
          src="favicon.ico"
          alt="Outer Wilds Mods"
        />
        <h1 className={styles.pageTitle}>
          Outer Wilds Mods
        </h1>
      </header>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Outer Wilds Mod Manager</h2>
        <div className={styles.sectionColumns}>
          <div className={styles.sectionImageWrapper}>
            <img
              className={styles.sectionImage}
              src="images/mod-manager.png"
              alt="Outer Wilds Mod Manager"
            />
          </div>
          <div className={styles.sectionDescriptionWrapper}>
            <p className={styles.sectionDescription}>
              Use the Outer Wilds Mod Manager for downloading, installing, and managing mods.
            </p>
            <a href="https://github.com/Raicuparta/ow-mod-manager">
              Source code
            </a>
          </div>
        </div>
        <DownloadButton
          href={modManagerDownloadUrl ?? modManagerDefaultDownloadUrl}
          target={modManagerDownloadUrl ? undefined : '_blank' }
          rel="noopener noreferrer"
        >
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Some of the available mods</h2>
        <div className={styles.sectionColumns}>
          <ModList />
        </div>
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
                Steam
              </a>
              <a href="https://www.epicgames.com/store/en-US/product/outerwilds/">
                Epic
              </a>
              <a href="https://www.mobiusdigitalgames.com/outer-wilds.html">
                Official website
              </a>
            </div>
          </div>
          <div className={styles.sectionImageWrapper}>
            <img
              className={styles.sectionImage}
              src="images/outer-wilds.jpg"
              alt="Outer Wilds"
            />
          </div>
        </div>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Community</h2>
        <div className={styles.sectionColumns}>
          <div className={styles.sectionDescriptionWrapper}>
            <p className={styles.sectionDescription}>
              If you need support, or just wanna interact with other fans of the game, this is where you can find us:
            </p>
            <div className={styles.verticalList}>
              <a href="https://reddit.com/r/outerwilds">
                Reddit
              </a>
              <a href="https://discord.gg/qd3Zu5">
                Discord
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.sectionTitle}>Become a modder</h2>
        <div className={styles.sectionColumns}>
          <div className={styles.sectionDescriptionWrapper}>
            <p className={styles.sectionDescription}>
              If you want to make your own mods, the OWML documentation has most of the info you need to get started.
              The aforementioned Discord server also has a <code>#modding</code> channel.
            </p>
              <a href="https://github.com/amazingalek/owml/wiki/For-modders">
                Info for modders in OWML docs
              </a>
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
