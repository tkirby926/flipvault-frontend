"use client"
import ViewVault from "@/src/components/connect-wallet/ViewVault";
import { Suspense } from "react";

const page = () => {
  
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <ViewVault />
  </Suspense>
  );
};

export default page;
