"use client";
import Image from "next/image";
import Cta from "../custom-ui/Cta";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import { useState } from "react";
import { MY_FRIENDS } from "@/src/utils/helper";

interface ChildComponentProps {
  friends: any[];  // Define the expected type for profile (array of any type)
}

const MyFriend: React.FC<ChildComponentProps> = ({ friends }) => {
  if (friends == undefined || friends.length == 0) {
    return (<div></div>);
  }
  const [cards, setCards] = useState(MY_FRIENDS);
  const REMOVE_CARD_HANDLER = (removeCardIndex: number) => {
    setCards(cards.filter((_, index) => index !== removeCardIndex));
  };
  return (
      <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] pb-10 sm:pb-20">
        <PrimaryHeading
          maxFontSize={22}
          minFontSize={16}
          reduceBelow={1200}
          className="ms-0 mt-2 mb-6">
          My Friends
        </PrimaryHeading>
        <div className="overflow-auto flex flex-wrap gap-y-3 max-h-[360px] pb-2 pe-2 -mx-3">
          {friends.map((obj, index) => {
            return (
              <div key={index} className="w-full md:w-6/12 xl:w-4/12 px-3">
                <div
                  className="bg-white bg-opacity-[12%] rounded-5 px-4 py-[14px] min-h-[87px] flex items-center justify-between "
                  key={index}>
                  <div className="flex items-center gap-x-4 md:gap-x-6">
                    <Image
                      src={
                        // obj[0]
                        ''
                      }
                      className="rounded-full max-w-[60px] max-h-[60px] w-full object-cover min-h-[60px]"
                      alt="profile"
                      height={60}
                      width={60}
                    />
                    <div className="flex flex-col">
                      {" "}
                      <PrimaryHeading
                        maxFontSize={18}
                        minFontSize={16}
                        center
                        className="text-white max-w-[800px] leading-110 !mx-0">
                        {obj[1]}
                      </PrimaryHeading>
                      <p className=" font-normal text-sm sm:text-base text-white">
                        {obj[2]}
                      </p>
                    </div>
                  </div>
                  <Cta
                    disableDefaultSpacing
                    className="py-3 px-[22px] !font-extrabold"
                    onClick={() => REMOVE_CARD_HANDLER(index)}>
                    Remove
                  </Cta>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default MyFriend;
