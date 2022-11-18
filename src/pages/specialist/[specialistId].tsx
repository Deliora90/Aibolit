import React from 'react';
import { useRouter } from 'next/router';
import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const SpecialistPage: PageWithLayout = () => {
  const router = useRouter();
  const { specialistId } = router.query;

  return <InDevelopment />;
};

SpecialistPage.getLayout = getLayout;

export default SpecialistPage;
