import { useRouter } from 'next/router'
import useModDatabase from '../../hooks/useModDatabase';
import { getModPathName } from '.';

import styles from './mod-page.module.scss';

import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { TextLink } from '../../components/smart-link/text-link';

const gitHubUrlBase = 'github';
const rawContentUrlBase = 'raw.githubusercontent';
const readmeNames = ['README.md', 'readme.md', 'Readme.md'];

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

const ModPage: React.FunctionComponent = () => {
  const { query } = useRouter();
  const modDatabase = useModDatabase();
  const [readme, setReadme] = useState<string>();

  const mod = modDatabase.releases.find(mod => getModPathName(mod.manifest.name) === query.mod);

  useEffect(() => {
    async function getReadme (repo: string) {
      const rawContentUrl = getRawContentUrl(repo);
      const response = await multipleFetchAttempts(readmeNames.map(readmeName => `${rawContentUrl}/${readmeName}`));
      
      if (!response) {
        return;
      }

      const modReadme = await response.text();
      setReadme(modReadme);
    }
    if (mod?.repo) {
      getReadme(mod.repo);
    }
  }, [mod?.repo]);

  if (!mod) {
    return (
      <div>Mod {query.mod} not found</div>
    );
  }

  if (!readme) {
    return (
      <div className={styles.modPage}>No readme (yet?)</div>
    )
  }

  return (
    <div className={styles.modPage}>
      <TextLink href="/mods">
        {'< All mods'}
      </TextLink>
      <ReactMarkdown
        skipHtml
        transformImageUri={uri =>
          uri.startsWith("http") ? uri : `${getRawContentUrl(mod.repo)}/${uri}`
        }
      >
        {readme}
      </ReactMarkdown>
    </div>
  )


}

export default ModPage;
