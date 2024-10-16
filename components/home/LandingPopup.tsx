"use client";
import React, { useEffect, useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Input from "../custom-ui/Input";
import Cta from "../custom-ui/Cta";
import Icons from "../common/Icons";
import Paragraph from "../custom-ui/Paragraph";

const LandingPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState<any>("");
  useEffect(() => {
    if (isPopupVisible) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isPopupVisible]);
  const HANDLE_SUBMIT = (e: any) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(isFormSubmitted)) {
      return;
    }
    const body = JSON.stringify({  
      email: isFormSubmitted
    })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include' as RequestCredentials,
      body: body
      }
    
    fetch('http://localhost:5000/api/v1/emails/signup', requestOptions)
    .then(response => response.json())
    .then((data) => {
      if (data.error == '') {
        setIsPopupVisible(false);
        setIsFormSubmitted("");
      }
      else {
        return;
      }
  });
  };
  return (
    <>
      {isPopupVisible && (
        <div
          onClick={() => setIsPopupVisible(false)}
          className="fixed top-0 left-0 h-screen w-screen backdrop-blur-[4px] bg-black/50 z-[9998]"></div>
      )}
      <div
        className={`fixed bg-white/20 backdrop-blur-md z-[9999] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4 p-6 md:p-8 max-w-[620px] w-11/12 sm:w-full border border-solid border-black md:scale-[1.2] xl:scale-150 ${
          !isPopupVisible && "pointer-events-none opacity-0"
        }`}>
        <div
          onClick={() => setIsPopupVisible(false)}
          className="absolute top-3 right-3 group cursor-pointer">
          <Icons
            icon="crossIcon"
            className="size-6 sm:size-8 group-hover:scale-105"
          />
        </div>
        <div className="relative h-full flex items-center flex-col justify-center sm:px-4 mt-5 mt:sm-0">
          <PrimaryHeading
            className="!font-extrabold !leading-100"
            maxFontSize={24}
            minFontSize={18}
            reduceBelow={1440}
            center>
            FlipVault Beta launching soon…
          </PrimaryHeading>
          <Paragraph center maxFontSize={14} minFontSize={14} className="pt-2">
            Enter your email address to stay in the loop
          </Paragraph>
          <div className="flex flex-col items-center gap-4 sm:gap-8 pt-3 md:pt-6 w-full">
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-white font-normal text-xs sm:text-sm mb-2 pl-0.5">
                Email Address
              </label>
              <Input
                id="email"
                onChange={(e) => setIsFormSubmitted(e.target.value)}
                placeholder="xyz@example.com"
                rotateHover="w-full flex-grow flex h-full !p-[1px]"
                border="w-full h-full"
                className="w-full h-[43px] !text-xs sm:!text-base"
              />
            </div>
            <Cta
              onClick={HANDLE_SUBMIT}
              type="submit"
              className="w-full max-[640px]:py-3">
              Submit
            </Cta>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPopup;
