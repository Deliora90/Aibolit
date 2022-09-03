import React from "react";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return <div>BlogPage of blog {blogId}</div>;
};

export default BlogPage;
