import { GetStaticProps, PageConfig } from 'next';
import Head from 'next/head';

import {
  ListItemCard,
  PageSection,
  SmartLink,
  PageLayout,
} from '../../components';
import { CardGridItem } from '../../components/card-grid';
import { CardGrid } from '../../components/card-grid/card-grid';
import { ModDatabase, getModDatabase } from '../../services';

type Props = {
  modDatabase?: ModDatabase;
};

export const getModPathName = (modName: string) =>
  modName.replace(/ /g, '').toLowerCase();

const getModPath = (modName: string) => `/mods/${getModPathName(modName)}`;

const Mods: React.FunctionComponent<Props> = ({ modDatabase }) => {
  const mods = modDatabase?.releases;

  return (
    <PageLayout isWide>
      <Head>
        <title>Outer Wilds Mods - Find all mods for Outer Wilds</title>
        <meta
          name="description"
          content="Full list of mods for Outer Wilds. Including mods for VR, multiplayer, and cheats."
        />
      </Head>
      <PageSection id="mod-manager">
        Install these mods using the{' '}
        <SmartLink href="/mod-manager">Outer Wilds Mod Manager</SmartLink>
      </PageSection>
      <PageSection title="Available mods" id="mods">
        <CardGrid>
          {mods?.map((mod) => (
            <SmartLink
              key={mod.repo}
              href="/mods/[mod]"
              as={getModPath(mod.name)}
            >
              <CardGridItem
                title={mod.name}
                description={mod.description}
                imageUrl="/images/nomai-vr.png"
              />
            </SmartLink>
          ))}
        </CardGrid>
      </PageSection>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const modDatabase = await getModDatabase();

  return {
    props: { modDatabase },
  };
};

export const config: PageConfig = {
  amp: 'hybrid',
};

export default Mods;
