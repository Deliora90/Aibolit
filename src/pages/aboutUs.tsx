import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const AboutUs: PageWithLayout = () => {
  return <InDevelopment />;
};

AboutUs.getLayout = getLayout;

export default AboutUs;
