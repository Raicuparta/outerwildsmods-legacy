import Head from 'next/head';
import { GetStaticProps } from 'next';

import {
  PageSection,
  PageSectionDescription,
  PageSectionImage,
  PageSectionColumns,
  TextLink,
  LinkButton,
  PageLayout,
  WindowsIcon,
} from '../components';
import { getModDatabase } from '../services';

const modManagerDefaultDownloadUrl =
  'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

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
          imageUrl="/images/mod-manager.png"
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
