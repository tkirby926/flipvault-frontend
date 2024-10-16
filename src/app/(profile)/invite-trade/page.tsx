"use client"
import InviteTradeHero from "@/src/components/invite-trade/InviteTradeHero";
import { Suspense } from "react";

const page = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
      <InviteTradeHero/>;
  </Suspense>
  );
};

export default page;
