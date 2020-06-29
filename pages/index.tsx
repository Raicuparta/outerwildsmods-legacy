import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css';
import { getSortedPostsData } from '../lib/posts'
import { DownloadButton } from '../components/download-button'

type Props = {
  allPostsData: any;
}

const Home: React.FunctionComponent<Props> = ({ allPostsData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Outer Wilds Mods</title>
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>Outer Wilds Mods</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <DownloadButton>
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </section>
    </div>
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
