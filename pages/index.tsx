import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { DownloadButton } from '../components/download-button'

type Props = {
  allPostsData: any;
}

const Home: React.FunctionComponent<Props> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Outer Wilds Mods</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <DownloadButton>
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </section>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
