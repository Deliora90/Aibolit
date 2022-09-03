import React from "react";
import { useRouter } from "next/router";

const NewsPage = () => {
  const router = useRouter();
  const { newsId } = router.query;

  return <div>NewsPage of news {newsId}</div>;
};

export default NewsPage;
