"use client"
import Connect from "@/src/components/trade/Connect";
import { Suspense } from "react";
import Currency from "@/src/components/trade/Currency";
import PopularItems from "@/src/components/trade/PopularItems";
import RecentlyAdded from "@/src/components/trade/RecentlyAdded";
import TradeHero from "@/src/components/trade/TradeHero";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <TradeHero />
      <Currency />
      <Connect />
      <PopularItems />
      <RecentlyAdded />
    </div>
    </Suspense>
  );
};

export default page;
