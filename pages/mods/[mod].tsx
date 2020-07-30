import { useRouter } from 'next/router'
import useModDatabase from '../../hooks/useModDatabase';
import { getModPathName } from '.';

import styles from './mod-page.module.scss';

import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { TextLink } from '../../components/smart-link/text-link';

const gitHubUrlBase = 'github';
const rawContentUrlBase = 'raw.githubusercontent';
const readmePath = 'master/README.md';

 //className={styles.markdown}

const ModPage: React.FunctionComponent = () => {
  const { query } = useRouter();
  const modDatabase = useModDatabase();
  const [readme, setReadme] = useState<string>();

  const mod = modDatabase.releases.find(mod => getModPathName(mod.manifest.name) === query.mod);

  useEffect(() => {
    async function getReadme (repo: string) {
      const readmeUrl = `${repo.replace(gitHubUrlBase, rawContentUrlBase)}/${readmePath}`;
      const response = await fetch(readmeUrl);
      if (response.status !== 200) {
        console.error('Response not OK, status:', response.status, response.statusText);
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
      <div>No readme (yet?)</div>
    )
  }

  return (
    <div className={styles.markdown}>
      <TextLink href="/mods">
        {'< All mods'}
      </TextLink>
      <ReactMarkdown skipHtml >
        {readme}
      </ReactMarkdown>
    </div>
  )


}

export default ModPage;
