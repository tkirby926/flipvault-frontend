"use client";
import React, { useEffect, useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Cta from "../custom-ui/Cta";
import Image from "next/image";
import InviteTradePopup from "./InviteTradePopup";
import WaitingPopup from "./WaitingPopup";

const InviteTradeHero = () => {
  // INVITE TRADE POPUP CODE
  const [invitePopUpVisible, setInvitePopUpVisible] = useState<boolean>(false);
  const [inviteFriendValue, setInviteFriendValue] = useState<String>("");
  useEffect(() => {
    
    if (invitePopUpVisible === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [invitePopUpVisible]);

  // WAITING POPUP CODE
  const [inviteWaitingPopup, setInviteWaitingPopup] = useState<boolean>(false);
  return (
    <>
      <Image
        className="w-full absolute top-[-20%] z-0 pointer-events-none"
        src="/assets/images/trade/png/header-ellipse.png"
        width={1920}
        height={272}
        alt="vector"
      />
      <div className="container min-h-[calc(100vh-112px)] flex justify-center items-center flex-col">
        <PrimaryHeading
          className=""
          center
          maxFontSize={32}
          minFontSize={24}
          reduceBelow={1200}>
          Welcome to FlipVault Trade
        </PrimaryHeading>
        <div className="pt-7 flex gap-3 sm:gap-5 justify-center">
          <Cta
            onClick={() => setInvitePopUpVisible(true)}
            className="!text-sm sm:w-[212px] !py-2 sm:!py-3 !font-extrabold">
            Invite
          </Cta>
          <Cta
            onClick={() => setInviteWaitingPopup(true)}
            className="!text-sm sm:w-[212px] !py-2 sm:!py-3 !font-extrabold">
            Random
          </Cta>
        </div>
        <InviteTradePopup
          setInviteFriendValue={setInviteFriendValue}
          invitePopUpVisible={invitePopUpVisible}
          setInvitePopUpVisible={setInvitePopUpVisible}
          setInviteWaitingPopup={setInviteWaitingPopup}
        />
        <WaitingPopup
          inviteWaitingPopup={inviteWaitingPopup}
          setInviteWaitingPopup={setInviteWaitingPopup}>
          {inviteFriendValue ? (
            <>
              {" "}
              Waiting for <b>{inviteFriendValue}</b> to join
            </>
          ) : (
            <> Waiting to connect you with another user</>
          )}
        </WaitingPopup>
      </div>
    </>
  );
};

export default InviteTradeHero;
