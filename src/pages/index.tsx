import type { NextPage } from 'next';
import { Layout } from 'components/Layout';
import { Header } from 'components/Header';
import { InformationScrollingPanel } from 'modules/InformationScrollingPanel';

const Home: NextPage = () => {
  return (
    <Layout header={<Header />}>
      <InformationScrollingPanel />
    </Layout>
  );
};

export default Home;
