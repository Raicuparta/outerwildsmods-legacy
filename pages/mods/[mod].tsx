import ReactMarkdown from 'react-markdown';

import { TextLink } from '../../components/smart-link/text-link';

import { getModPathName } from '.';
import styles from './mod-page.module.scss';

import { GetStaticPaths, GetStaticProps } from 'next';
import { getModDatabase, Mod, getModReadme } from '../../services';

const gitHubUrlBase = 'github';
const rawContentUrlBase = 'raw.githubusercontent';
const readmeNames = ['README.md', 'readme.md', 'Readme.md'];

type Props = {
  readme?: string;
  mod?: Mod;
};

const getRawContentUrl = (repo: string) => (
  `${repo.replace(gitHubUrlBase, rawContentUrlBase)}/master`
);

const multipleFetchAttempts = async (urls: string[]): Promise<Response | null> => {
  const response = await fetch(urls[0]);
  if (response.status !== 200) {
    console.warn('Response not OK, status:', response.status, response.statusText);
    if (urls.length > 1) {
      return multipleFetchAttempts(urls.slice(1, urls.length));
    } else {
      console.error('Could not find readme for this mod');
      return null;
    }
  }
  return response;
}

const ModPage: React.FunctionComponent<Props> = ({
  readme,
  mod,
}) => {
  return (
    <div className={styles.modPage}>
      <TextLink href="/mods">
        {'< All mods'}
      </TextLink>
      {(readme && mod) ? (
        <ReactMarkdown
          skipHtml
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${getRawContentUrl(mod.repo)}/${uri}`
          }
        >
          {readme}
        </ReactMarkdown>
      ) : (
        <h4>
          Readme not found
        </h4>
      )}

    </div>
  )
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
    params: { mod: getModPathName(manifest.name) }
  }))
  
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const modDatabase = await getModDatabase();

  if (!modDatabase) {
    return { props: {} };
  }

  if (!params) {
    return { props: {} };
  }

  const mod = modDatabase.releases.find(mod => getModPathName(mod.manifest.name) === params.mod);

  if (!mod) {
    return { props: {} };
  };

  const rawContentUrl = getRawContentUrl(mod.repo);
  const readmePaths = readmeNames.map(readmeName => `${rawContentUrl}/${readmeName}`);
  const readme = await getModReadme(readmePaths);
  
  if (!readme) {
    return { props: {} };
  }

  return {
    props: { readme, mod },
  };
}

export default ModPage;
