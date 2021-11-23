import { GetStaticProps, PageConfig } from 'next';
import Head from 'next/head';

import { PageSection, SmartLink, PageLayout } from '../../components';
import { CardGridItem } from '../../components/card-grid';
import { CardGrid } from '../../components/card-grid/card-grid';
import {
  downloadAllImages,
  getAllMarkdownImages,
  getRawContentUrl,
} from '../../helpers';
import { getModDatabase, getModReadme, Mod } from '../../services';

type Props = {
  mods: ModWithImage[];
};

interface ModWithImage extends Mod {
  imageUrl: string | null;
}

export const getModPathName = (modName: string) =>
  modName.replace(/ /g, '').toLowerCase();

const getModPath = (modName: string) => `/mods/${getModPathName(modName)}`;

const Mods: React.FunctionComponent<Props> = ({ mods }) => (
  <PageLayout isWide>
    <Head>
      <title>Outer Wilds Mods - Find all mods for Outer Wilds</title>
      <meta
        name="description"
        content="Full list of mods for Outer Wilds. Including mods for VR, multiplayer, and cheats."
      />
    </Head>
    <PageSection title="Available mods" id="mods">
      <CardGrid>
        {mods?.map((mod, index) => (
          <SmartLink
            key={mod.repo}
            href="/mods/[mod]"
            as={getModPath(mod.name)}
          >
            <CardGridItem
              index={index}
              title={mod.name}
              description={mod.description}
              imageUrl={mod.imageUrl || undefined}
            />
          </SmartLink>
        ))}
      </CardGrid>
    </PageSection>
  </PageLayout>
);

// TODO dont repeat in [mod].tsx.
const readmeNames = ['README.md', 'readme.md', 'Readme.md'];

export const getStaticProps: GetStaticProps<Props> = async () => {
  const modDatabase = await getModDatabase();

  if (!modDatabase) {
    return { props: { mods: [] } };
  }

  const mods: ModWithImage[] = await Promise.all(
    modDatabase.releases.map(async (mod) => {
      const rawContentUrl = getRawContentUrl(mod.repo);
      const readmePaths = readmeNames.map(
        (readmeName) => `${rawContentUrl}/${readmeName}`
      );
      const readme = await getModReadme(readmePaths);

      const images = getAllMarkdownImages(readme);

      const externalImages =
        images.length > 0
          ? await downloadAllImages(rawContentUrl, mod.name, [images[0]])
          : {};

      return {
        ...mod,
        imageUrl: Object.values(externalImages)[0] || images[0] || null,
      };
    })
  );

  return {
    props: { mods },
  };
};

export default Mods;
