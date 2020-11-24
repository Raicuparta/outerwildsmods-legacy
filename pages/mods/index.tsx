import { GetStaticProps, PageConfig } from 'next';
import Head from 'next/head';

import {
  ListItemCard,
  PageSection,
  SmartLink,
  PageLayout,
} from '../../components';
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
    <PageLayout>
      <Head>
        <title>Outer Wilds Mods</title>
        <meta name="description" content="Full list of mods for Outer Wilds" />
      </Head>
      <PageSection id="mod-manager">
        Install these mods using the{' '}
        <SmartLink href="/mod-manager">Outer Wilds Mod Manager</SmartLink>
      </PageSection>
      <PageSection title="Available mods" id="mods">
        {mods?.map((mod) => (
          <SmartLink
            key={mod.repo}
            href="/mods/[mod]"
            as={getModPath(mod.manifest.name)}
          >
            <ListItemCard
              title={mod.manifest.name}
              description={mod.manifest.description}
            />
          </SmartLink>
        ))}
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
