import React from 'react';
import { Layout } from 'components/Layout';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { InDevelopment } from 'components/InDevelopment';

const AboutUs = () => {
  return (
    <Layout header={<Header />}>
      <InDevelopment />
    </Layout>
  );
};

export default AboutUs;
