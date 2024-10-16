"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryHeading from "../../custom-ui/PrimaryHeading";
import Paragraph from "../../custom-ui/Paragraph";
import Icons from "../../common/Icons";
import { LIVE_FLIP } from "@/utils/constants";

const InvitePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleConfirmClick = () => {
    closePopup();
    router.push(`${LIVE_FLIP}?on=live-flip`);
  };

  return (
    <div
      className={`lg:p-8 sm:p-6 p-4 rounded-5 border border-black border-solid bg-white/15 max-w-[620px] fixed top-5 w-[90%] sm:w-full right-5 z-[99] backdrop-blur-md scale-90 sm:scale-100 common-transition duration-100 translate-x-0 ${
        !isVisible && "!translate-x-[150%]"
      }`}>
      <div className="flex justify-between">
        <div className="sm:p-1.5 p-1 sm:pr-8 pr-5 rounded-full inline-flex items-center gap-2 sm:gap-x-4 border border-solid border-white/15 bg-white/15">
          <Image
            className="object-cover rounded-full sm:size-[44px] size-8"
            height={44}
            width={44}
            sizes="100vw"
            src="/assets/images/profile/png/profile.png"
            alt="dummy"
          />
          <div>
            <PrimaryHeading minFontSize={14} maxFontSize={16}>
              Steve Rock
            </PrimaryHeading>
            <Paragraph
              className="!leading-[1.5]"
              maxFontSize={14}
              minFontSize={10}>
              @RockSteve
            </Paragraph>
          </div>
        </div>
        <div className="flex sm:gap-4 gap-2">
          <button
            aria-label="close button"
            className="sm:w-9 sm:h-9 w-6 h-6 bg-red-600 rounded-2 flex justify-center items-center hover:opacity-80 transition-all duration-300"
            onClick={closePopup}>
            <Icons icon="crossIconWhite" className="sm:w-6 sm:h-6 w-4 h-4" />
          </button>
          <button
            aria-label="confirm button"
            className="sm:w-9 sm:h-9 w-6 h-6 bg-[#2CB629] rounded-2 flex justify-center items-center hover:opacity-80 transition-all duration-300"
            onClick={handleConfirmClick}>
            <Icons icon="tickIcon" className="sm:w-5 sm:h-5 w-3 h-3" />
          </button>
        </div>
      </div>
      <Paragraph maxFontSize={20} minFontSize={14} className="mt-3">
        <span className="font-extrabold text-white">Steve Rock</span> is
        inviting you to a trade
      </Paragraph>
    </div>
  );
};

export default InvitePopup;
