import Head from 'next/head';
import { GetStaticProps } from 'next';

import {
  ModList,
  AuthorList,
  PageSection,
  PageSectionDescription,
  PageSectionImage,
  PageSectionColumns,
  TextLink,
  LinkButton,
  PageLayout,
  LinkList,
  WindowsIcon,
} from '../components';
import { getModDatabase } from '../services';

const modManagerDefaultDownloadUrl =
  'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

const infoLinks = [
  {
    text: 'Steam',
    href: 'https://store.steampowered.com/app/753640/Outer_Wilds',
  },
  {
    text: 'Epic',
    href: 'https://www.epicgames.com/store/en-US/product/outerwilds',
  },
  {
    text: 'Official website',
    href: 'https://www.mobiusdigitalgames.com/outer-wilds.html',
  },
];

const communityLinks = [
  { text: 'Reddit', href: 'https://reddit.com/r/outerwilds' },
  { text: 'Discord', href: 'https://discord.gg/RaSjRbm' },
];

type Props = {
  modManagerDownloadUrl?: string;
};

const Home: React.FunctionComponent<Props> = ({ modManagerDownloadUrl }) => (
  <PageLayout>
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
        variant="main-download"
      >
        <WindowsIcon />
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
      <LinkList links={infoLinks} />
    </PageSection>
    <PageSection
      title="Community"
      id="community"
      description="If you need support, or just wanna interact with other fans of the game, this is where you can find us:"
    >
      <LinkList links={communityLinks} />
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
  </PageLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const modDatabase = await getModDatabase();

  const downloadUrl = modDatabase?.modManager?.installerDownloadUrl;

  if (!downloadUrl) {
    throw new Error(
      `Could not retrieve mod manager installer download URL from database. \n${JSON.stringify(
        modDatabase?.modManager
      )}\n`
    );
  }

  return {
    props: {
      modManagerDownloadUrl: modDatabase?.modManager.installerDownloadUrl,
    },
  };
};

export default Home;
