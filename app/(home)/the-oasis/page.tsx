"use client"
import Connect from "@/components/trade/Connect";
import Currency from "@/components/trade/Currency";
import PopularItems from "@/components/trade/PopularItems";
import RecentlyAdded from "@/components/trade/RecentlyAdded";
import TradeHero from "@/components/trade/TradeHero";

const page = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <TradeHero />
      <Currency />
      <Connect />
      <PopularItems />
      <RecentlyAdded />
    </div>
  );
};

export default page;
