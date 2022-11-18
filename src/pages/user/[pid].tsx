import React from 'react';
import { useRouter } from 'next/router';
import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const UserPage: PageWithLayout = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <InDevelopment />;
};

UserPage.getLayout = getLayout;

export default UserPage;
