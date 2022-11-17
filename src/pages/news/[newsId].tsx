import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'components/Layout';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { InDevelopment } from 'components/InDevelopment';

const NewsPage = () => {
  const router = useRouter();
  const { newsId } = router.query;

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <InDevelopment />
    </Layout>
  );
};

export default NewsPage;
