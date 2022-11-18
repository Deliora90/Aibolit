import React from 'react';
import { useRouter } from 'next/router';
import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const BlogPage: PageWithLayout = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return <InDevelopment />;
};

BlogPage.getLayout = getLayout;

export default BlogPage;
