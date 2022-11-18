import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const Contacts: PageWithLayout = () => {
  return <InDevelopment />;
};

Contacts.getLayout = getLayout;

export default Contacts;
