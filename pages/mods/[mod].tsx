import { useRouter } from 'next/router'
import useModDatabase from '../../hooks/useModDatabase';

const ModPage: React.FunctionComponent = () => {
  const { query } = useRouter();
  const modDatabase = useModDatabase();

  const mod = modDatabase.releases.find(mod => mod.manifest.uniqueName === query.mod);

  return mod ? (
    <div>
      {mod.manifest.author}
      {mod.manifest.description}
    </div>
  ) : <div>Mod {query.mod} not found</div>
}

export default ModPage;
