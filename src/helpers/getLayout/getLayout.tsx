import React, { ReactElement } from 'react';
import { Layout } from 'components/Layout';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export function getLayout(page: ReactElement) {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      {page}
    </Layout>
  );
}
