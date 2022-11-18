import React from 'react';
import { useRouter } from 'next/router';
import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const NewsPage: PageWithLayout = () => {
  const router = useRouter();
  const { newsId } = router.query;

  return <InDevelopment />;
};

NewsPage.getLayout = getLayout;

export default NewsPage;
