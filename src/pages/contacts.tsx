import React from 'react';
import { Layout } from 'components/Layout';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { InDevelopment } from 'components/InDevelopment';

const Contacts = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <InDevelopment />
    </Layout>
  );
};

export default Contacts;
