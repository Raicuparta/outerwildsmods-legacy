const DATABASE_URL =
  'https://raw.githubusercontent.com/Raicuparta/ow-mod-db/master/database.json';
import axios from 'axios';

export type Manifest = {
  name: string;
  author: string;
  uniqueName: string;
  version: string;
  description: string;
};

export type Mod = {
  repo: string;
  downloadUrl: string;
  downloadCount: number;
  manifest: Manifest;
  required?: boolean;
};

export type ModDatabase = {
  modManager: {
    version: string;
    downloadUrl: string;
    installerDownloadUrl: string;
    zipDownloadUrl: string;
  };
  releases: Mod[];
};

export async function getModDatabase() {
  const response = await axios.get<ModDatabase>(DATABASE_URL);
  if (response.status !== 200) {
    console.error(
      'Response not OK, status:',
      response.status,
      response.statusText
    );
    return;
  }

  return response.data;
}
