import Head from 'next/head';
import { GetStaticProps } from 'next';

import styles from '../styles/layout.module.scss';
import {
  DownloadButton,
  ModList,
  AuthorList,
  PageSection,
  PageSectionDescription,
  PageSectionImage,
  PageSectionColumns,
  TextLink,
  LinkButton,
} from '../components';
import { getModDatabase } from '../services';

const modManagerDefaultDownloadUrl =
  'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

type Props = {
  modManagerDownloadUrl?: string;
};

const Home: React.FunctionComponent<Props> = ({ modManagerDownloadUrl }) => (
  <div className={styles.container}>
    <Head>
      <title>Outer Wilds Mods</title>
      <meta
        name="Description"
        content="Find all the tools needed to mod Outer Wilds. Download and install mods with the Outer Wilds Mod Manager"
      ></meta>
      <link rel="canonical" href="https://outerwildsmods.com" />
    </Head>
    <PageSection title="Outer Wilds Mod Manager" id="mod-manager">
      <PageSectionColumns>
        <PageSectionImage
          imageUrl="images/mod-manager.png"
          title="Outer Wilds Mod Manager"
        />
        <PageSectionDescription description="Use the Outer Wilds Mod Manager for downloading, installing, and managing mods.">
          <TextLink
            href="https://github.com/Raicuparta/ow-mod-manager"
            isExternal
          >
            Source code
          </TextLink>
        </PageSectionDescription>
      </PageSectionColumns>
      <LinkButton
        href={modManagerDownloadUrl ?? modManagerDefaultDownloadUrl}
        target={modManagerDownloadUrl ? undefined : '_blank'}
        rel="noopener noreferrer"
        variant="primary"
      >
        Download Outer Wilds Mod Manager
      </LinkButton>
    </PageSection>
    <PageSection
      title="Some of the available mods"
      id="mods"
      titleLinkText="All mods >"
      titleLinkUrl="/mods"
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
        <TextLink
          href="https://store.steampowered.com/app/753640/Outer_Wilds/"
          isExternal
        >
          Steam
        </TextLink>
        <TextLink
          href="https://www.epicgames.com/store/en-US/product/outerwilds/"
          isExternal
        >
          Epic
        </TextLink>
        <TextLink
          href="https://www.mobiusdigitalgames.com/outer-wilds.html"
          isExternal
        >
          Official website
        </TextLink>
      </div>
    </PageSection>
    <PageSection
      title="Community"
      id="community"
      description="If you need support, or just wanna interact with other fans of the game, this is where you can find us:"
    >
      <div className={styles.verticalList}>
        <TextLink href="https://reddit.com/r/outerwilds" isExternal>
          Reddit
        </TextLink>
        <TextLink href="https://discord.gg/RaSjRbm" isExternal>
          Discord
        </TextLink>
      </div>
    </PageSection>
    <PageSection
      title="Become a modder"
      id="become-a-modder"
      description="If you want to make your own mods, the OWML documentation has most of the info you need to get started. The aforementioned Discord server also has a modding channel."
    >
      <TextLink
        href="https://github.com/amazingalek/owml/wiki/For-modders"
        isExternal
      >
        Info for modders in OWML docs
      </TextLink>
    </PageSection>
    <PageSection title="Authors" id="authors">
      <AuthorList />
    </PageSection>
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const modDatabase = await getModDatabase();

  return {
    props: { modManagerDownloadUrl: modDatabase?.modManager.downloadUrl },
  };
};

export default Home;
