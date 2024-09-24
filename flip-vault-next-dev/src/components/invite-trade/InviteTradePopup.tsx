"use client";
import { useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";

interface PopUpProps {
  invitePopUpVisible: boolean;
  setInvitePopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setInviteFriendValue: React.Dispatch<React.SetStateAction<String>>;
  setInviteWaitingPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const InviteTradePopup: React.FC<PopUpProps> = ({
  invitePopUpVisible,
  setInvitePopUpVisible,
  setInviteFriendValue,
  setInviteWaitingPopup,
}) => {
  const [invite, setInvite] = useState("");

  const handleSubmit = () => {
    setInvitePopUpVisible(false);
    setInviteWaitingPopup(true);
    setInviteFriendValue(invite);
    setInvite("");
  };

  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen common-transition ${
        invitePopUpVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <div className="relative p-5 h-full w-full flex items-center justify-center">
        <div className="relative z-10 border border-black border-opacity-5 bg-white bg-opacity-15 rounded-5 md:p-8 p-4 max-w-[620px] w-full backdrop-blur-xl">
          <div className="flex items-start justify-center sm:mb-8 mb-4">
            <div>
              <PrimaryHeading
                maxFontSize={24}
                minFontSize={20}
                className="!leading-133 text-center">
                Invite friends you know
              </PrimaryHeading>
            </div>
            <div
              onClick={() => {
                setInvitePopUpVisible(false);
                setInviteWaitingPopup(true);
                setInviteFriendValue(invite);
                setInvite("");
              }}
              className="size-6 cursor-pointer common-transition hover:scale-110 absolute end-3 top-3 flex items-center justify-center">
              <Icons className="w-full" icon="cross" />
            </div>
          </div>
          <div className="flex px-3 items-center border border-charcoal-gray relative z-10 h-[44px] rounded-2 bg-transparent mb-8">
            <input
              placeholder="Enter username"
              value={invite}
              onChange={(e) => setInvite(e.target.value)}
              className="text-white w-full placeholder:opacity-40 rounded-2 bg-transparent outline-none border-0"
              type="text"
            />
          </div>
          <Cta className="w-full" onClick={handleSubmit}>
            Submit
          </Cta>
        </div>
        <div
          onClick={() => {
            setInvitePopUpVisible(false);
            setInvite("");
          }}
          className="absolute inset-0 bg-dark-black bg-opacity-65 z-0"></div>
      </div>
    </div>
  );
};

export default InviteTradePopup;
