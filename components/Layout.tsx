import React, { ReactNode } from 'react';

import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <HeadSEO></HeadSEO>
    {children}
  </div>
);

const HeadSEO = () => {
  return (
    <DefaultSeo
      title="JDIYIELD | One stop SAFU service for yield farmers"
      additionalLinkTags={[{ rel: 'icon', href: `/images/logo.svg` }]}
    />
  );
};

export default Layout;
