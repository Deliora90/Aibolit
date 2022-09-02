import type { NextPage } from "next";
import { Layout } from "components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <div style={{ height: "1500px" }}>Home Content</div>
      </Layout>
    </div>
  );
};

export default Home;
