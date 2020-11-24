import Head from 'next/head';
import { PageConfig } from 'next';

import {
  ModList,
  AuthorList,
  PageSection,
  PageSectionDescription,
  PageSectionImage,
  PageSectionColumns,
  LinkButton,
  PageLayout,
  LinkList,
} from '../components';

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

const forModdersLinks = [
  {
    text: 'Info for modders in OWML docs',
    href: 'https://github.com/amazingalek/owml/wiki/For-modders',
  },
  {
    text: 'Outer Wilds mod template',
    href: 'https://github.com/Raicuparta/ow-mod-template',
  },
];

const communityLinks = [
  { text: 'Reddit', href: 'https://reddit.com/r/outerwilds' },
  { text: 'Discord', href: 'https://discord.gg/RaSjRbm' },
];

const Home: React.FunctionComponent = () => (
  <PageLayout>
    <Head>
      <title>Outer Wilds Mods</title>
      <meta
        name="description"
        content="Find all the tools needed to mod Outer Wilds. Download and install mods with the Outer Wilds Mod Manager"
      ></meta>
      <link rel="canonical" href="https://outerwildsmods.com" />
    </Head>
    <PageSection title="Outer Wilds Mod Manager" id="mod-manager">
      <PageSectionColumns>
        <PageSectionImage
          imageUrl="/images/mod-manager.png"
          title="Outer Wilds Mod Manager"
        />
        <PageSectionDescription description="Use the Outer Wilds Mod Manager for downloading, installing, and managing mods."></PageSectionDescription>
      </PageSectionColumns>
      <LinkButton href="/mod-manager" variant="main-download">
        Outer Wilds Mod Manager
      </LinkButton>
    </PageSection>
    <PageSection title="Some of the available mods" id="mods">
      <ModList />
    </PageSection>
    <PageSection
      title="Outer Wilds?"
      id="outer-wilds"
      description="Outer Wilds is a neat game. Check it out and buy it or whatever."
      imageUrl="/images/outer-wilds.jpg"
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
      description="If you want to make your own mods, the OWML documentation has most of the info you need to get started. The easiest way to start is by cloning the mod template project and following the instructions there. The aforementioned Discord server also has a modding channel."
    >
      <LinkList links={forModdersLinks} />
    </PageSection>
    <PageSection title="The Modders" id="authors">
      <AuthorList />
    </PageSection>
  </PageLayout>
);

export const config: PageConfig = {
  amp: 'hybrid',
};

export default Home;
