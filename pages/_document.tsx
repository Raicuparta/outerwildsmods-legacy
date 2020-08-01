import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

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

const googleAnalyticsId = process.env.analyticsId;
const isProd = process.env.isProd;

const Analytics: React.FunctionComponent<{ id?: string }> = ({ id }) => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `,
      }}
    />
  </>
);

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <CustomHead>
          <Analytics id={googleAnalyticsId} />
        </CustomHead>
        <body>
          <Main />
          {!isProd && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
