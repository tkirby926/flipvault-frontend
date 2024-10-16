"use client";
import { PROFILE_DETAIL } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import PopUp from "./PopUp";

interface ChildComponentProps {
  profile: any[];  // Define the expected type for profile (array of any type)
}

interface SubObj {
  trades: string;
  live_transactions: string;
  assets: string,
  friends: string
  // Add other keys based on the structure of subObj
}

const ProfileDetails: React.FC<ChildComponentProps> = ({ profile }) => {
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  useEffect(() => {
    if (popUpVisible === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popUpVisible]);
  return (
    <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] pt-8 pb-6">
      <div className="w-full overflow-auto xl:overflow-hidden flex items-center md:gap-6 gap-4 pb-2">
        <div className="bg-white bg-opacity-[12%] border border-black rounded-5 p-6 !pe-12 w-full lg:min-h-[159px] sm:min-w-[780px] min-w-[600px]">
          {profile.map((obj, index) => {
            return (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-4">
                  <div className="xl:min-h-[105px] sm:min-w-20 min-w-10 xl:min-w-[106px] sm:min-h-20 min-h-10 rounded-[10px]">
                    <Image
                      src={obj.img}
                      alt="profile-image"
                      height={105}
                      width={105}
                      className="w-full xl:max-w-[105px] sm:max-w-20 max-w-10 xl:max-h-[105px] sm:max-h-20 max-h-10 h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-extrabold md:text-2xl text-xl text-white">
                      {obj.name}
                    </p>
                    <p className="font-normal md:text-sm text-xs text-white">
                      {obj.username}
                    </p>
                  </div>
                  <Image
                    src="/assets/images/profile/svg/line.svg"
                    height={105}
                    width={1}
                    alt="line"
                    className="h-full w-[1px] md:min-h-[100px] object-cover pointer-events-none sm:ms-8 mx-2 sm:me-9"
                  />
                </div>
                {obj.detail.map((subObj: SubObj, i: number) => {
                  return (
                    <div
                      className="flex items-center md:gap-8 sm:gap-6 gap-3 justify-between w-full"
                      key={i}>
                      <div className="flex flex-col">
                        <p className="font-extrabold md:text-xl text-lg text-white leading-120">
                          {subObj.trades}
                        </p>
                        <p className="font-normal md:text-sm text-xs text-white leading-120 mt-1 text-nowrap">
                          Trades completed
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-extrabold md:text-xl text-lg text-white leading-120">
                          {subObj.live_transactions}
                        </p>
                        <p className="font-normal md:text-sm text-xs text-white leading-120 mt-1 text-nowrap">
                          Live Trans Completed
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-extrabold md:text-xl text-lg text-white leading-120">
                          {subObj.assets}
                        </p>
                        <p className="font-normal md:text-sm text-xs text-white leading-120 mt-1 text-nowrap">
                          Assets
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-extrabold md:text-xl text-lg text-white leading-120">
                          {subObj.friends}
                        </p>
                        <p className="font-normal md:text-sm text-xs text-white leading-120 mt-1 text-nowrap">
                          Friends
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="bg-white bg-opacity-[12%] border border-black rounded-5 p-6 flex flex-col items-center justify-center w-full max-w-[450px] md:min-w-[245px] sm:min-h-[130px] min-w-20 min-h-[103px]">
          <Icons icon="depositIcon" />
          <Cta
            onClick={() => setPopUpVisible(true)}
            className=" mt-6 w-full md:block hidden">
            Deposit
          </Cta>
          <PopUp
            popUpVisible={popUpVisible}
            setPopUpVisible={setPopUpVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
