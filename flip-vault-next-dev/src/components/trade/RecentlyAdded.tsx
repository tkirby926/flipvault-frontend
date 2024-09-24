import React from "react";
import Image from "next/image";
import { NFT_CARDS_LIST } from "@/src/utils/helper";
import OverflowSliderLayout from "./common/OverflowSliderLayout";

const RecentlyAdded = () => {
  return (
    <div className="relative mb-5">
      <Image
        alt="ellipse"
        src="/assets/images/trade/webp/blur-right-ellipse.webp"
        height={452}
        width={677}
        className="absolute left-[-27%] pointer-events-none hidden custom-xl:block top-[-18%]"
      />
      <OverflowSliderLayout
        heading="Recently Added"
        data={NFT_CARDS_LIST}
        showTabs={false}
      />
    </div>
  );
};

export default RecentlyAdded;
