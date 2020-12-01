import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { Analytics, AmpAnalytics } from '../components';

function isPreloadLink(node: JSX.Element) {
  return (
    node && node.type === 'link' && node.props && node.props.rel === 'preload'
  );
}

class CustomHead extends Head {
  render() {
    const res = super.render();

    function transform(node: JSX.Element): JSX.Element {
      if (isPreloadLink(node)) {
        return <></>;
      }
      if (node && node.props && node.props.children) {
        return {
          ...node,
          props: {
            ...node.props,
            children: Array.isArray(node.props.children)
              ? node.props.children.map(transform)
              : transform(node.props.children),
          },
        };
      }
      if (Array.isArray(node)) {
        return <>{node.map(transform)}</>;
      }

      return node;
    }

    return transform(res);
  }
}

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
        <CustomHead>
          <meta name="theme-color" content="#1f1f1f" />
          <Analytics id={id} />
        </CustomHead>
        <body>
          <Main />
          {!process.env.isProd && <NextScript />}
          <AmpAnalytics id={id} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
