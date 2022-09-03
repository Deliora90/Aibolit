import React from "react";
import { useRouter } from "next/router";

const SpecialistPage = () => {
  const router = useRouter();
  const { specialistId } = router.query;

  return <div>SpecialistPage of specialist {specialistId}</div>;
};

export default SpecialistPage;
