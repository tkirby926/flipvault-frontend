"use client";
import { LIVE_FLIP } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cta from "../custom-ui/Cta";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import FriendPopUp from "./FriendPopUp";
import Input from "../custom-ui/Input";

const TradeHero = () => {
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  useEffect(() => {
    if (popUpVisible === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popUpVisible]);
  return (
    <>
      <FriendPopUp
        popUpVisible={popUpVisible}
        setPopUpVisible={setPopUpVisible}
      />
      <Image
        className="w-full absolute top-0 z-10 pointer-events-none"
        src="/assets/images/trade/png/header-ellipse.png"
        width={1920}
        height={272}
        alt="vector"
      />
      <div className="py-16 sm:mt-12 relative">
        <Image
          className="absolute z-10 sm:block hidden sm:start-[-67%] pointer-events-none md:start-[-55%] lg:start-[-43%] min-h-[700px] xl:-start-[32%] custom-2xl:start-[-25%] top-[-50%]"
          width={845}
          height={690}
          src="/assets/images/trade/webp/blur-right-ellipse.webp"
          alt="ellipse"
        />
        <Image
          className="absolute z-10 sm:block w-[426px] h-[317px] bottom-[-52%] hidden pointer-events-none end-[-14%] custom-2xl:end-[-11%]"
          width={326}
          height={217}
          src="/assets/images/trade/webp/blue-ellips.webp"
          alt="ellipse"
        />
        <Image
          className="absolute z-0 sm:block w-[406px] h-[374px] scale-75 md:scale-100 right-0 translate-x-1/2 lg:translate-x-0 lg:right-10 top-10 sm:top-[20%]"
          width={326}
          height={217}
          src="/assets/images/trade/webp/palm-tree-right.webp"
          alt="ellipse"
        />
        <Image
          className="absolute z-0 sm:block w-[406px] h-[374px] scale-75 md:scale-100  left-0 -translate-x-1/2 lg:translate-x-0 lg:left-10 top-10 sm:top-[20%]"
          width={326}
          height={217}
          src="/assets/images/trade/webp/palm-tree-left.webp"
          alt="ellipse"
        />

        <div className="container relative z-20">
          <div className="flex flex-col justify-center items-center">
            <PrimaryHeading
              maxFontSize={56}
              minFontSize={28}
              center
              className="text-white max-w-[800px] leading-110 capitalize">
              Trade with peers
            </PrimaryHeading>
            <Paragraph
              maxFontSize={14}
              minFontSize={16}
              center
              className="text-white max-w-[400px] sm:max-w-[489px] leading-160 opacity-80 pt-3">
              Browse through an assortment of NFTs as well as people you are
              interested in trading with{" "}
            </Paragraph>
            <div className="flex gap-4 pt-6 sm:pt-10">
              <div className="text-center whitespace-nowrap">
                <Cta
                  url={`${LIVE_FLIP}?on=live-flip`}
                  className="flex justify-center items-center font-extrabold sm:text-base text-sm h-[46px] whitespace-nowrap px-4 sm:px-6 py-3 bg-blueGradient border-0"
                  disableDefaultSpacing
                  target="_self">
                  Start Live Trade
                </Cta>
              </div>
              <Cta
                className="font-extrabold sm:text-base !text-sm !px-6 sm:!px-10 !py-3 !h-[46px]"
                transparent
                onClick={() => setPopUpVisible(true)}>
                Add Friends
              </Cta>
            </div>
            <Input
              className=""
              placeholder="search for NFTs"
              border="border-white/35"
              rotateHover="w-full max-w-[292px] sm:max-w-[356px] mx-auto mt-12 -mb-20 md:-mb-24"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeHero;
