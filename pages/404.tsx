
import Head from 'next/head';

import { PageLayout } from '../components';

const ErrorPage = () => (
  <PageLayout>
    <Head>
      <meta httpEquiv="refresh" content="3; URL=/" />
    </Head>
    <h1>
      Page not found.
    </h1>
    <small>
      You should be redirected to the home page now.
      If you don't, please stay calm and use the navigation buttons to find your way around with website.
    </small>
  </PageLayout>
);

export default ErrorPage;
