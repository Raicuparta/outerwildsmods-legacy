import Script from 'next/script';

const analyticsId = 'UA-171434021-1';

export const Analytics: React.FunctionComponent = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${analyticsId}');
      `}
    </Script>
  </>
);
