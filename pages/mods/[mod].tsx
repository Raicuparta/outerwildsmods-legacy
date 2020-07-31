import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import {
  TextLink,
  LinkButton,
  SmartLink,
  ListItemCard,
} from '../../components';
import { getModDatabase, Mod, getModReadme } from '../../services';

import styles from './mod-page.module.scss';
import { getModPathName } from '.';

const gitHubUrlBase = 'github';
const rawContentUrlBase = 'raw.githubusercontent';
const readmeNames = ['README.md', 'readme.md', 'Readme.md'];

type Props = {
  readme?: string;
  mod?: Mod;
};

const getRawContentUrl = (repo: string) =>
  `${repo.replace(gitHubUrlBase, rawContentUrlBase)}/master`;

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

const ModPage: React.FunctionComponent<Props> = ({ readme, mod }) => {
  if (!mod) {
    return <div className={styles.modPage}>Mod not found</div>;
  }

  return (
    <div className={styles.modPage}>
      <Head>
        <title>{mod.manifest.name} - Outer Wilds Mods</title>
        <meta name="Description" content={mod.manifest.description} />
      </Head>
      <TextLink href="/mods">{'< All mods'}</TextLink>
      <div className={styles.contentWrapper}>
        <div className={styles.markdownWrapper}>
          <div className={styles.box}>
            <h1>{mod.manifest.name}</h1>
            <p>{mod.manifest.description}</p>
          </div>
          {readme && mod && (
            <ReactMarkdown
              className={styles.markdown}
              skipHtml
              transformImageUri={(uri) =>
                uri.startsWith('http')
                  ? uri
                  : `${getRawContentUrl(mod.repo)}/${uri}`
              }
            >
              {readme}
            </ReactMarkdown>
          )}
        </div>
        <div className={styles.actions}>
          <LinkButton variant="primary">Install using Mod Manager</LinkButton>
          <ul>
            <li>
              <TextLink isExternal href={mod.downloadUrl}>
                Manual download
              </TextLink>
            </li>
            <li>
              <TextLink isExternal href={mod.repo}>
                Source code
              </TextLink>
            </li>
            <li>Author: {mod.manifest.author}</li>
            <li>Current version: {mod.manifest.version}</li>
            <li>{mod.downloadCount} downloads</li>
          </ul>
        </div>
      </div>
    </div>
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
    props: { readme, mod },
  };
};

export default ModPage;
