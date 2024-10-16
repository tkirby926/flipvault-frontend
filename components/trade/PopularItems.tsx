import React from "react";
import { NFT_CARDS_LIST } from "@/utils/helper";
import OverflowSliderLayout from "./common/OverflowSliderLayout";

const PopularItems = () => {
  return (
    <OverflowSliderLayout
      heading="Popular Items"
      data={NFT_CARDS_LIST}
      showTabs={true}
    />
  );
};

export default PopularItems;
