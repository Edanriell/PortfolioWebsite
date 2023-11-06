import { Html, Head, Main, NextScript } from 'next/document';

import { Modal } from 'shared/ui/modal';

const Document = () => (
  <Html className="page" lang="en" data-theme="emerald">
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
      <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
      <link href="https://cdn.jsdelivr.net/npm/daisyui@3.9.4/dist/full.css" rel="stylesheet" type="text/css" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
    </Head>
    <body className="page__body">
      <Main />
      <NextScript />
      <Modal />
      <script src="https://cdn.tailwindcss.com" defer />
    </body>
  </Html>
);

export default Document;
