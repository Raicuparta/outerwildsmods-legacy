import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { Analytics, AmpAnalytics } from '../components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const id = process.env.analyticsId ?? '';
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#1f1f1f" />
          <Analytics id={id} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <AmpAnalytics id={id} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
