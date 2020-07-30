import Head from 'next/head'

import styles from '../styles/layout.module.scss';
import { DownloadButton } from '../components/download-button'
import useModDatabase from '../hooks/useModDatabase';
import { ModList } from '../components/mod-list';
import { AuthorList } from '../components/author-list';
import { Link } from '../components/link';
import { PageSection, PageSectionDescription, PageSectionImage, PageSectionColumns } from '../components/page-section';

const modManagerDefaultDownloadUrl = 'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

const Home: React.FunctionComponent = () => {
  const modDatabase = useModDatabase();
  
  const modManagerDownloadUrl = modDatabase?.modManager?.downloadUrl;

  return (
    <div className={styles.container}>
      <Head>
        <title>Outer Wilds Mods</title>
        <meta name="Description" content="Find all the tools needed to mod Outer Wilds. Download and install mods with the Outer Wilds Mod Manager"></meta>
        <link rel="canonical" href="https://outerwildsmods.com" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>
          Outer Wilds Mods
        </h1>
      </header>
      <PageSection
        title="Outer Wilds Mod Manager"
        id="mod-manager"
      >
        <PageSectionColumns>
          <PageSectionImage imageUrl="images/mod-manager.png" title="Outer Wilds Mod Manager" />
          <PageSectionDescription
            description="Use the Outer Wilds Mod Manager for downloading, installing, and managing mods."
          >
            <Link to="https://github.com/Raicuparta/ow-mod-manager">
              Source code
            </Link>
          </PageSectionDescription>
        </PageSectionColumns>
        <DownloadButton
          href={modManagerDownloadUrl ?? modManagerDefaultDownloadUrl}
          target={modManagerDownloadUrl ? undefined : '_blank' }
          rel="noopener noreferrer"
        >
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </PageSection>
      <PageSection
        title="Some of the available mods"
        id="mods"
      >
        <ModList />
      </PageSection>
      <PageSection
        title="Outer Wilds?"
        id="outer-wilds"
        description="Outer Wilds is a neat game. Check it out and buy it or whatever."
        imageUrl="images/outer-wilds.jpg"
      >
        <div className={styles.verticalList}>
          <Link to="https://store.steampowered.com/app/753640/Outer_Wilds/">
            Steam
          </Link>
          <Link to="https://www.epicgames.com/store/en-US/product/outerwilds/">
            Epic
          </Link>
          <Link to="https://www.mobiusdigitalgames.com/outer-wilds.html">
            Official website
          </Link>
        </div>
      </PageSection>
      <PageSection
        title="Community"
        id="community"
        description="If you need support, or just wanna interact with other fans of the game, this is where you can find us:"
      >
        <div className={styles.verticalList}>
          <Link to="https://reddit.com/r/outerwilds">
            Reddit
          </Link>
          <Link to="https://discord.gg/RaSjRbm">
            Discord
          </Link>
        </div>
      </PageSection>
      <PageSection
        title="Become a modder"
        id="become-a-modder"
        description="If you want to make your own mods, the OWML documentation has most of the info you need to get started. The aforementioned Discord server also has a modding channel."
      >
        <Link to="https://github.com/amazingalek/owml/wiki/For-modders">
          Info for modders in OWML docs
        </Link>
      </PageSection>
      <PageSection
        title="Authors"
        id="authors"
      >
        <AuthorList />
      </PageSection>
      <footer className={styles.footer}>
        <p>
          This page isn't official, nor affiliated with Mobius Digital, or anyone really.
        </p>
      </footer>
    </div>
  )
}

export default Home;
