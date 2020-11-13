import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import {
  TextLink,
  ModActions,
  ModDescription,
  PageLayout,
  PageLayoutColumns,
} from '../../components';
import { getModDatabase, Mod, getModReadme } from '../../services';
import { getRawContentUrl } from '../../helpers';

import { getModPathName } from '.';

const readmeNames = ['README.md', 'readme.md', 'Readme.md'];

type Props = {
  readme?: string;
  mod?: Mod;
  modManagerDownloadUrl?: string;
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

const ModPage: React.FunctionComponent<Props> = ({
  readme,
  mod,
  modManagerDownloadUrl,
}) => {
  if (!mod) {
    return <h2>Mod not found</h2>;
  }

  return (
    <PageLayout size="medium">
      <Head>
        <title>{mod.manifest.name} - Outer Wilds Mods</title>
        <meta name="Description" content={mod.manifest.description} />
      </Head>
      <PageLayoutColumns>
        {readme && (
          <ModDescription
            manifest={mod.manifest}
            readme={readme}
            repo={mod.repo}
          />
        )}
        <ModActions mod={mod} fullWidth={!Boolean(readme)} />
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

  return {
    props: {
      ...(readme ? { readme } : undefined),
      mod,
      modManagerDownloadUrl: modDatabase.modManager.installerDownloadUrl,
    },
  };
};

export default ModPage;
