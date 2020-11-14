import { PageConfig } from 'next';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { Analytics } from '../components';

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
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <CustomHead>
          <meta name="theme-color" content="#1f1f1f" />
          <Analytics id={process.env.analyticsId} />
        </CustomHead>
        <body>
          <Main />
          {!process.env.isProd && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
