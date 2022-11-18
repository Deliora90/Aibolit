import React from 'react';
import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const News: PageWithLayout = () => {
  return <InDevelopment />;
};

News.getLayout = getLayout;

export default News;
