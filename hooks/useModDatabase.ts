import { useEffect, useState } from "react";

const DATABASE_URL = 'https://raw.githubusercontent.com/Raicuparta/ow-mod-db/master/database.json';

type Manifest = {
  name: string;
  author: string;
  uniqueName: string;
  version: string;
  description: string;
};

type Mod = {
  repo: string;
  downloadUrl: string;
  downloadCount: number;
  manifest: Manifest;
  required?: boolean;
}

type ModDatabase = {
  modManager: {
    version: string;
    downloadUrl: string;
  };
  releases: Mod[];
};

const useModDatabase = () => {
  const [modDatabase, setModDatabase] = useState<ModDatabase>();

  useEffect(() => {
    async function getModDatabase () {
      const response = await fetch(DATABASE_URL);
      if (response.status !== 200) {
        console.error('Response not OK, status:', response.status, response.statusText);
        return;
      }
      
      const database = await response.json() as ModDatabase;
      setModDatabase(database);
    }
    getModDatabase();
  }, []);

  return modDatabase;
}

export default useModDatabase;
