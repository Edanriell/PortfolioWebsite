/* eslint-disable boundaries/element-types */
import type { PropsWithChildren } from 'react';

import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

export const BaseLayout = ({ children }: PropsWithChildren) => (
  <div>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);
