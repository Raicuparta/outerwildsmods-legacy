import Head from 'next/head';
import { GetStaticProps, PageConfig } from 'next';

import {
  PageSection,
  PageSectionImage,
  TextLink,
  LinkButton,
  PageLayout,
  WindowsIcon,
  SmartLink,
} from '../components';
import { getModDatabase, ModManager } from '../services';

const modManagerDefaultDownloadUrl =
  'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

type Props = {
  modManager?: ModManager;
};

const Home: React.FunctionComponent<Props> = ({ modManager }) => (
  <PageLayout>
    <Head>
      <title>Outer Wilds Mod Manager - Download Windows app</title>
      <meta
        name="description"
        content="Download, install, and manage Outer Wilds mods using the Outer Wilds Mod Manager for Windows."
      ></meta>
    </Head>
    <PageSection title="Outer Wilds Mod Manager" id="mod-manager">
      <div>
        <PageSectionImage
          imageUrl="/images/mod-manager.png"
          title="Outer Wilds Mod Manager"
          hideOnMobile={false}
          height={200}
        />
      </div>
      <LinkButton
        href={modManager?.installerDownloadUrl ?? modManagerDefaultDownloadUrl}
        target={modManager?.installerDownloadUrl ? undefined : '_blank'}
        rel="noopener noreferrer"
        variant="main-download"
      >
        <WindowsIcon />
        Download the Outer Wilds Mod Manager for Windows
      </LinkButton>
      {modManager?.zipDownloadUrl && (
        <p>
          or
          {' '}
          <TextLink href={modManager.zipDownloadUrl}>
            download the portable version instead
          </TextLink>
        </p>
      )}
      {modManager?.downloadCount && (
        <p>
          The Mod Manager has been downloaded <strong>{modManager.downloadCount}</strong> times.
        </p>
      )}
      <p>For all your modding needs! With access to features such as:</p>
      <ul>
        <li>Downloading mods;</li>
        <li>Updating mods;</li>
        <li>Enabling / disabling mods;</li>
        <li>Looking at all the great mods you have;</li>
        <li>Running the game with mods enabled.</li>
      </ul>
      <p>
        It also lets you install / update the{' '}
        <SmartLink href="/mods/owml">Outer Wilds Mod Loader</SmartLink> from
        within the app, so you don't need to deal with that yourself.
      </p>
    </PageSection>
    <PageSection title="How do I use this?" id="how-to-use">
      <ul>
        <li>Download the Outer Wilds Mod Manager installer;</li>
        <li>
          Run the downloaded .exe (you might need to ignore some Chrome /
          Windows warnings);
        </li>
        <li>The Mod Manager should start automatically;</li>
        <li>
          Shortcuts are added to desktop and start menu, use them next time you
          want to run the manager;
        </li>
        <li>Install OWML;</li>
        <li>Install any mods you want;</li>
        <li>Press the big green button that says "Start Game";</li>
        <li>You won't believe what happens next.</li>
      </ul>
    </PageSection>
    <PageSection title="How do I uninstall it?" id="uninstall">
      <p>
        First, remember that uninstalling the Mod Manager won't uninstall your
        mods. Make sure to remove all mods and run the game once before
        uninstalling.
      </p>
      <p>
        You can uninstall the Mod Manager by searching for "Add or remove
        programs" in the start menu (or in the control panel), and then finding
        Outer Wilds Mod Manager in the list.
      </p>
    </PageSection>
    <PageSection title="More information" id="more-info">
      <p>
        For more information, check the{' '}
        <TextLink href="https://github.com/Raicuparta/ow-mod-manager#outer-wilds-mod-manager">
          readme on GitHub
        </TextLink>
      </p>
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
      modManager: modDatabase?.modManager,
    },
  };
};

export const config: PageConfig = {
  amp: 'hybrid',
};

export default Home;
