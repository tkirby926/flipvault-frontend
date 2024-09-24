"use client";
import Image from "next/image";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Icons from "../common/Icons";
import { useEffect, useState } from "react";
import PopUp from "./PopUp";
import { GOOD_EVE_DATA_LIST } from "@/src/utils/helper";

const ConnectWalletCards = () => {
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  useEffect(() => {
    if (popUpVisible === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popUpVisible]);

  return (
    <div className="relative">
      <div className="pb-3 lg:pb-6 container mx-auto mx-auto custom-2xl:max-w-[1600px]">
        <div className="py-4 sm:py-5 md:py-6 lg:pt-8 lg:pb-[26px] border-b border-white border-dashed border-opacity-20">
          <PrimaryHeading maxFontSize={24} minFontSize={18} reduceBelow={1200}>
            Happy Trading John
          </PrimaryHeading>
          <div className="mt-3 sm:mt-4 lg:mt-8 flex items-center gap-3 relative z-10 ">
            <div className="flex gap-3 overflow-x-scroll profile-scroll-bar pb-1.5">
              {GOOD_EVE_DATA_LIST.map((obj, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer gap-4 p-3 sm:p-4 rounded-5 border border-black bg-white bg-opacity-[0.12] min-w-[224px] h-20 duration-300 relative after:absolute after:bg-blueGradient after:left-0 after:top-0 after:h-full after:w-full after:opacity-0 after:-z-10 hover:after:opacity-100 after:duration-300 overflow-hidden"
                >
                  <Image
                    className="rounded-[12px]"
                    src={obj.image}
                    alt={obj.title}
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col">
                    <Paragraph
                      className="!font-extrabold"
                      maxFontSize={16}
                      minFontSize={14}
                      reduceBelow={640}
                    >
                      {obj.title}
                    </Paragraph>
                    <Paragraph
                      maxFontSize={14}
                      minFontSize={12}
                      reduceBelow={640}
                    >
                      {obj.price}
                    </Paragraph>
                  </div>
                  <button aria-label="nft menu icon">
                    <Icons icon="goodEveMenuIcon" />
                  </button>
                </div>
              ))}
            </div>
            <span className="absolute bg-blackGradient flex h-full right-16 sm:right-[143px] top-0 w-20 z-0"></span>
            <button
              aria-label="connect wallet popup button"
              onClick={() => setPopUpVisible(true)}
              className="p-4 rounded-5 border border-black bg-white bg-opacity-[0.12] max-sm:-mt-2 h-20 sm:min-w-[132px] flex flex-col items-center justify-center gap-1.5 -mt-[9px]"
            >
              <Icons icon="goodEvePlusIcon" />
              <Paragraph
                maxFontSize={14}
                minFontSize={12}
                reduceBelow={640}
                className="text-opacity-70 max-sm:hidden text-nowrap"
              >
                Connect Wallet
              </Paragraph>
            </button>
          </div>
        </div>
      </div>
      <PopUp popUpVisible={popUpVisible} setPopUpVisible={setPopUpVisible} />
      <span className="absolute bg-blue flex h-[300px] rounded-full blur-[130px] opacity-70 w-[300px] left-1/2 -translate-x-1/2 top-[-40%] -z-10 max-md:hidden pointer-events-none"></span>
      <span className="absolute bg-blue flex h-[110px] rounded-full blur-[70px] opacity-70 w-[150px] right-0 -top-1/2 -z-10 max-md:hidden"></span>
      <span className="absolute bg-blue flex h-[110px] rounded-full blur-[70px] opacity-70 w-[150px] left-0 top-0 -z-10 max-md:hidden"></span>
    </div>
  );
};

export default ConnectWalletCards;
