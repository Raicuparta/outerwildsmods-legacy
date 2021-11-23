import Head from 'next/head';
import { GetStaticProps, PageConfig } from 'next';

import {
  PageSection,
  PageSectionDescription,
  PageSectionImage,
  PageSectionColumns,
  LinkButton,
  PageLayout,
  LinkList,
  SmartLink,
  ListItemCard,
  TextLink,
} from '../components';

type AlphaMod = {
  name: string;
  description: string;
  href: string;
};

const alphaMods: AlphaMod[] = [
  {
    name: 'DIMOWA',
    description: 'Mod installer and debugger for Outer Wilds Alpha',
    href: 'https://github.com/ShoosGun/DIMOWA',
  },
  {
    name: 'OWBA',
    description:
      'Adds features from the final Outer Wilds release to the Alpha.',
    href: 'https://github.com/ShoosGun/OWBA',
  },
  {
    name: 'Free Cam Mod',
    description: 'Allows for free camera movement.',
    href: 'https://github.com/ShoosGun/FreeCamMod',
  },
  {
    name: 'Probe Grapple Mod',
    description: 'Adds a grappling hook mechanic.',
    href: 'https://github.com/ShoosGun/ProbeGrapleMod',
  },
];

const OuterWildsAlpha: React.FunctionComponent = () => (
  <PageLayout>
    <Head>
      <title>Outer Wilds Alpha - Outer Wilds Mods</title>
      <meta
        name="description"
        content="Download Outer Wilds Alpha. Find all of the available mods for the Alpha version of Outer Wilds."
      ></meta>
    </Head>
    <PageSection title="Outer Wilds Alpha" id="alpha">
      <PageSectionColumns>
        <PageSectionImage
          imageUrl="/images/alpha.jpg"
          title="Outer Wilds Alpha"
        />
        <PageSectionDescription description="While Outer Wilds was still in development, an Alpha release was made available for download. The files are no longer available on the official website, but can be obtained using the Wayback Machine." />
      </PageSectionColumns>
      <LinkButton
        href="https://web.archive.org/web/20150815180605/http://outerwilds.com:80/downloads/"
        isExternal
      >
        Download the Outer Wilds Alpha via Wayback Machine
      </LinkButton>
    </PageSection>
    <PageSection title="Mods for Outer Wilds Alpha" id="alpha-mods">
      <PageSectionDescription description="Using DIMOWA, it is possible to install some mods in the Alpha version of Outer Wilds." />
      {alphaMods.map((mod) => (
        <SmartLink key={mod.name} href={mod.href} isExternal>
          <ListItemCard title={mod.name} description={mod.description} />
        </SmartLink>
      ))}
    </PageSection>
  </PageLayout>
);

export default OuterWildsAlpha;
