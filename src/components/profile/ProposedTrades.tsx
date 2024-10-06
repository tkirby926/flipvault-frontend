"use client";
import { NFT_CARDS_LIST } from "@/src/utils/helper";
import React, { useState } from "react";
import NftCard from "../common/NftCard";
import Image from "next/image";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";

interface ChildComponentProps {
  reqs: any[];  // Define the expected type for profile (array of any type)
}

const ProposedTrades: React.FC<ChildComponentProps> = ({ reqs }) => {
  if (reqs.length == 0) {
    return null;
  }
  const [cards, setCards] = useState(NFT_CARDS_LIST);

  const REMOVE_CARD_HANDLER = (removeCardIndex: number) => {
    setCards(cards.filter((_, index) => index !== removeCardIndex));
  };
  const addCard = (removeCardIndex: any) => {
    setCards([...cards, removeCardIndex]);
  };

  return (
      <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] pb-6">
        <PrimaryHeading
          maxFontSize={22}
          minFontSize={16}
          reduceBelow={1200}
          className="ms-0 my-6 sm:mt-12">
          Proposed trades
        </PrimaryHeading>
        <div className="flex items-center overflow-auto gap-4 pb-2">
          {reqs.map((obj, index) => {
            return (
              <div
                className="min-w-[314px] relative rounded-5 overflow-hidden group/item"
                key={index}>
                <div className="bg-mate-black absolute h-full w-full opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto flex items-center justify-between z-40 p-5 flex-col common-transition">
                  <div>
                    <Paragraph
                      maxFontSize={20}
                      minFontSize={16}
                      reduceBelow={1440}
                      className="!font-extrabold">
                      {obj.purposedAmount}
                    </Paragraph>
                    <div className="flex items-center gap-3 pt-5">
                      {obj.purposedNft.map((item, i) => (
                        <Image
                          width={82}
                          height={82}
                          className="size-[82px] rounded-4"
                          src={item}
                          alt=""
                          key={i}
                        />
                      ))}
                    </div>
                    <Paragraph
                      maxFontSize={16}
                      minFontSize={14}
                      reduceBelow={1440}
                      className="pt-3">
                      Item name goes here
                    </Paragraph>
                  </div>
                  <div className="flex items-center pb-4 gap-4">
                    <Image
                      alt="tick"
                      height={36}
                      width={36}
                      src="/assets/images/profile/png/tick.png"
                      className="common-transition hover:scale-105 max-w-[36px] max-h-[36px] w-full h-full cursor-pointer"
                      onClick={() => addCard(obj)}
                    />
                    <Image
                      alt="cross"
                      height={36}
                      width={36}
                      src="/assets/images/profile/png/cross.png"
                      className="common-transition hover:scale-105 max-w-[36px] max-h-[36px] w-full h-full cursor-pointer"
                      onClick={() => REMOVE_CARD_HANDLER(index)}
                    />
                  </div>
                </div>
                <NftCard data={obj} index={index} />
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ProposedTrades;
