import { GetStaticProps, PageConfig } from 'next';
import Head from 'next/head';

import { PageSection, SmartLink, PageLayout } from '../../components';
import { CardGridItem } from '../../components/card-grid';
import { CardGrid } from '../../components/card-grid/card-grid';
import {
  getImageMap,
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
const supportedTypes = ['png', 'jpg', 'jpeg', 'gif', 'ico', 'bmp', 'webp'];

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
          ? await getImageMap(rawContentUrl, mod.name, images)
          : {};

      const firstExternalImage = Object.values(externalImages).filter(
        (image) => image && supportedTypes.includes(image.type)
      )[0];

      return {
        ...mod,
        imageUrl: firstExternalImage?.url || null,
      };
    })
  );

  return {
    props: { mods },
  };
};

export default Mods;
