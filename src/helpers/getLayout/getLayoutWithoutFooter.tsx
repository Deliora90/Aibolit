import React, { ReactElement } from 'react';
import { Layout } from 'components/Layout';
import { Header } from 'components/Header';

export function getLayoutWithoutFooter(page: ReactElement) {
  return <Layout header={<Header />}>{page}</Layout>;
}
