import React from "react";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <div>User Page of User {pid}</div>;
};

export default UserPage;
