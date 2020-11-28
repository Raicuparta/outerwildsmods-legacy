import { GetStaticPaths, GetStaticProps, PageConfig } from 'next';
import Head from 'next/head';

import {
  ModActions,
  ModDescription,
  PageLayout,
  PageLayoutColumns,
} from '../../components';
import { getModDatabase, Mod, getModReadme } from '../../services';
import {
  downloadImage,
  getAllMarkdownImages,
  getRawContentUrl,
} from '../../helpers';

import { getModPathName } from '.';

const readmeNames = ['README.md', 'readme.md', 'Readme.md'];

type Props = {
  readme?: string;
  mod?: Mod;
};

const multipleFetchAttempts = async (
  urls: string[]
): Promise<Response | null> => {
  const response = await fetch(urls[0]);
  if (response.status !== 200) {
    console.warn(
      'Response not OK, status:',
      response.status,
      response.statusText
    );
    if (urls.length > 1) {
      return multipleFetchAttempts(urls.slice(1, urls.length));
    } else {
      console.error('Could not find readme for this mod');
      return null;
    }
  }
  return response;
};

const getDescriptionTerminator = (modDescription: string) => {
  if (modDescription === '') {
    return '';
  }
  if (modDescription.endsWith('.')) {
    return ' ';
  }
  return '.';
};

const getPageDescription = (modDescription = '', modName: string) =>
  `${modDescription}${getDescriptionTerminator(
    modDescription
  )}Download and install ${modName} mod for Outer Wilds using the Mod Manager.`;

const ModPage: React.FunctionComponent<Props> = ({ readme, mod }) => {
  if (!mod) {
    return <h2>Mod not found</h2>;
  }

  return (
    <PageLayout isWide>
      <Head>
        <title>
          {mod.manifest.name} - Download and install Outer Wilds mods
        </title>
        <meta
          name="description"
          content={getPageDescription(
            mod.manifest.description,
            mod.manifest.name
          )}
        />
      </Head>
      <PageLayoutColumns>
        {readme && <ModDescription readme={readme} repo={mod.repo} />}
        <ModActions mod={mod} isFullWidth={!Boolean(readme)} />
      </PageLayoutColumns>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const modDatabase = await getModDatabase();

  if (!modDatabase) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = modDatabase.releases.map(({ manifest }) => ({
    params: { mod: getModPathName(manifest.name) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const modDatabase = await getModDatabase();

  if (!modDatabase) {
    return { props: {} };
  }

  if (!params) {
    return { props: {} };
  }

  const mod = modDatabase.releases.find(
    (mod) => getModPathName(mod.manifest.name) === params.mod
  );

  if (!mod) {
    return { props: {} };
  }

  const rawContentUrl = getRawContentUrl(mod.repo);
  const readmePaths = readmeNames.map(
    (readmeName) => `${rawContentUrl}/${readmeName}`
  );
  const readme = await getModReadme(readmePaths);

  const images = getAllMarkdownImages(readme);
  console.log('images', images);

  try {
    downloadImage(rawContentUrl, images[0], mod.manifest.name);
  } catch {
    console.log('couldnt download image');
  }

  return {
    props: {
      ...(readme ? { readme } : undefined),
      mod,
    },
  };
};

export const config: PageConfig = {
  amp: 'hybrid',
};

export default ModPage;
