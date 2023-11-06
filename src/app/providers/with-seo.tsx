import { NextSeo } from 'next-seo';
import { ComponentType } from 'react';

export const withSeo =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => (
    <>
      <NextSeo
        nofollow
        noindex
        title="Personal portfolio website"
        description="My portfolio"
        openGraph={{
          title: 'My portfolio',
          description: 'My portfolio',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'portfolio',
          },
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      <Component {...props} />
    </>
  );
