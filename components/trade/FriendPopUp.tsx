import React, { useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "../common/Icons";
import Image from "next/image";
import Cta from "../custom-ui/Cta";
import { ADD_FRIENDS_LIST } from "@/utils/helper";

interface PopUpProps {
  popUpVisible: boolean;
  setPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FriendPopUp: React.FC<PopUpProps> = ({
  popUpVisible,
  setPopUpVisible,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const FILTERED_FRIEND_LIST = ADD_FRIENDS_LIST.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen common-transition ${
        popUpVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <div className="relative p-5 h-full w-full min-h-screen flex items-center justify-center">
        <div className="relative z-10 border border-black border-opacity-5 bg-white bg-opacity-15 rounded-5 md:p-8 p-4 max-w-[620px] w-full backdrop-blur-xl">
          <div className="flex items-start justify-center sm:mb-8 mb-4">
            <div>
              <PrimaryHeading
                maxFontSize={24}
                minFontSize={20}
                className="!leading-133 text-center">
                Add Friend
              </PrimaryHeading>
              <Paragraph
                maxFontSize={16}
                minFontSize={14}
                reduceBelow={992}
                className="!font-normal !text-opacity-80 !leading-160 text-center">
                Search to add friends to your profile.
              </Paragraph>
            </div>
            <div
              onClick={() => {
                setPopUpVisible(false);
                setSearchTerm("");
              }}
              className="size-6 cursor-pointer common-transition hover:scale-110 absolute end-3 top-3 flex items-center justify-center">
              <Icons className="w-full" icon="cross" />
            </div>
          </div>
          <div className="flex px-3 items-center border border-charcoal-gray relative z-10 h-[44px] rounded-2 bg-transparent mb-8">
            <Icons className="me-2.5" icon="search" />
            <input
              placeholder="Search..."
              className="text-white ps-[10px] w-full placeholder:opacity-40 rounded-2 bg-transparent outline-none border-0"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            {FILTERED_FRIEND_LIST.map((obj, index) => (
              <div
                className="flex justify-between sm:items-center sm:flex-row flex-col rounded-5 bg-white bg-opacity-15 py-3 px-4 w-full"
                key={index}>
                <div className="flex items-center justify-start sm:gap-[34px] gap-5">
                  <Image
                    width={60}
                    height={60}
                    alt="title"
                    src={obj.image}
                    className="sm:max-w-[60px] max-w-12 sm:max-h-[60px] max-h-12 min-h-12 sm:min-h-[60px] w-full rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-extrabold text-lg text-white leading-130 sm:mb-1">
                      {obj.name}
                    </p>
                    <p className="font-normal text-base text-white">
                      {obj.username}
                    </p>
                  </div>
                </div>
                <Cta className="max-h-11 flex items-center justify-center sm:mt-0 mt-5 sm:w-auto w-full">
                  Add
                </Cta>
              </div>
            ))}
            {FILTERED_FRIEND_LIST.length === 0 && (
              <div className="min-h-20 flex items-center justify-center">
                <PrimaryHeading
                  maxFontSize={24}
                  minFontSize={20}
                  className="!leading-133 text-center !mr-0">
                  Friend&apos;s not Found
                </PrimaryHeading>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setPopUpVisible(false);
            setSearchTerm("");
          }}
          className="absolute inset-0 bg-dark-black bg-opacity-65 z-0"></div>
      </div>
    </div>
  );
};

export default FriendPopUp;
