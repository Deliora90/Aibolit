import { InformationScrollingPanel } from 'modules/InformationScrollingPanel';
import { getLayoutWithoutFooter } from 'helpers/getLayout/getLayoutWithoutFooter';
import type { PageWithLayout } from 'types/PageWithLayout';

const Home: PageWithLayout = () => {

  return <InformationScrollingPanel />;
};

Home.getLayout = getLayoutWithoutFooter;

export default Home;
