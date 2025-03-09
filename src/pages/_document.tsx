import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en" dir="ltr">
    <Head>
      <link rel="manifest" href="/manifest.json" />

      <link rel="icon" href="/pwa/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/pwa/favicon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="apple-touch-icon" href="/pwa/apple-touch-icon.png" sizes="180x180" />

      <meta property="og:site_name" content="Link Shortener" />
      <meta name="keywords" content="link shortener, custom links, online presence, link analytics" />
      <meta property="og:type" content="website" />
    </Head>
    <body className="antialiased">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
