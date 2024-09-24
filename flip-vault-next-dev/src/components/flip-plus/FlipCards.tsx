"use client";
import Icons from "../common/Icons";
import Paragraph from "../custom-ui/Paragraph";
import Cta from "../custom-ui/Cta";
import { STAKING_CARD_LIST } from "@/src/utils/helper";
import CardInfo from "./popups/CardInfo";
import { useEffect, useState } from "react";
import Image from "next/image";

const FlipCards = () => {
  type stake = {
    title: string;
    image: string;
    badge?: string;
  };
  const [isCardInfoVisible, setIsCardInfoVisible] = useState<boolean>(false);
  useEffect(() => {
    if (isCardInfoVisible) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isCardInfoVisible, setIsCardInfoVisible]);

  return (
    <div className="container relative z-10 mx-auto custom-2xl:max-w-[1600px]">
      <CardInfo
        isCardInfoVisible={isCardInfoVisible}
        setIsCardInfoVisible={setIsCardInfoVisible}
      />

      <div className="lg:pt-6 pb-5 flex mx-[-7px] flex-wrap gap-y-2.5 md:gap-y-3.5 justify-center">
        {STAKING_CARD_LIST.map((obj: stake, index) => (
          <div
            key={index}
            className="lg:w-2/6 md:w-1/2 sm:w-4/6 w-full px-[7px]">
            <div className="lg:rounded-5 rounded-2.5 border border-black bg-white bg-opacity-10 group hover:bg-opacity-20 common-transition relative overflow-hidden ">
              {obj.badge && (
                <div className="inline-flex items-center gap-1.5 bg-white rounded-25 py-1.5 px-3 absolute top-2 right-2 xl:top-4 xl:right-4">
                  <Icons icon="fire" />
                  <Paragraph
                    maxFontSize={12}
                    minFontSize={11}
                    className="!text-transparent bg-orangeGradient bg-clip-text !font-extrabold !leading-130">
                    Popular
                  </Paragraph>
                </div>
              )}
              <div className="lg:p-5 p-3 md:p-4 relative z-10 flex items-center gap-5">
                <Image
                  width={94}
                  height={95}
                  src={obj.image}
                  alt="image-status"
                  className="size-16 sm:size-[94px]"
                />
                <Paragraph
                  maxFontSize={24}
                  minFontSize={22}
                  reduceBelow={1100}
                  className="!leading-130">
                  ${obj.title}
                </Paragraph>
              </div>
              <div className="lg:p-5 md:p-4 p-3 border-t border-dashed border-white/20">
                <Cta
                  onClick={() => setIsCardInfoVisible(true)}
                  transparent
                  className="w-full !font-extrabold lg:!py-3 !py-2.5 !border-none bg-white bg-opacity-15 group-hover:before:!translate-y-0 before:!translate-y-[110%]">
                  Subscribe
                </Cta>
              </div>
              <div className="size-[234px] rounded-14 absolute bg-blueGradient opacity-50 pointer-events-none z-0 top-0 left-0 -translate-y-1/2 -translate-x-1/2 blur-[80px] common-transition"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCards;
