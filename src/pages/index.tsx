import { InformationScrollingPanel } from 'modules/InformationScrollingPanel';
import { getLayoutWithoutFooter } from 'helpers/getLayout/getLayoutWithoutFooter';
import type { PageWithLayout } from 'types/PageWithLayout';
import { useGetCitiesQuery } from 'services/catalog';

const Home: PageWithLayout = () => {
  const { isLoading, error, data } = useGetCitiesQuery();

  return <InformationScrollingPanel />;
};

Home.getLayout = getLayoutWithoutFooter;

export default Home;
