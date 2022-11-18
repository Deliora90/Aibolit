import { InDevelopment } from 'components/InDevelopment';
import { getLayout } from 'helpers/getLayout/getLayout';
import type { PageWithLayout } from 'types/PageWithLayout';

const Blog: PageWithLayout = () => {
  return <InDevelopment />;
};

Blog.getLayout = getLayout;

export default Blog;
