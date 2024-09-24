import React from "react";
import PrimaryHeading from "../../custom-ui/PrimaryHeading";
import Input from "../../custom-ui/Input";
import Cta from "../../custom-ui/Cta";
import Icons from "../../common/Icons";
type CARDS_INFO = {
  isCardInfoVisible: boolean;
  setIsCardInfoVisible: (value: boolean) => void;
};
const CardInfo = ({ isCardInfoVisible, setIsCardInfoVisible }: CARDS_INFO) => {
  return (
    <div
      className={`fixed z-50 w-screen h-screen p-3 sm:p-5 flex items-center justify-center top-0 left-0 bg-black/30 backdrop-blur-md common-transition ${
        !isCardInfoVisible && " scale-0 pointer-events-none"
      }`}>
      <div
        onClick={() => setIsCardInfoVisible(false)}
        className="absolute h-full w-full top-0 left-0"
      />
      <div className="bg-white/15 border border-solid border-black p-8 rounded-5 backdrop-blur-md w-full max-w-[620px] relative">
        <span
          onClick={() => setIsCardInfoVisible(false)}
          className="absolute top-3 right-3 sm:right-6 sm:top-6 cursor-pointer hover:scale-110 common-transition inline-block">
          <Icons icon="crossIconWhite" className="size-6" />
        </span>
        <PrimaryHeading
          className="pt-2"
          maxFontSize={24}
          minFontSize={20}
          center>
          Subscribe for $7.99/month
        </PrimaryHeading>
        <form className="flex flex-col gap-4 sm:gap-y-8 pt-7">
          <Input placeholder="Card holder name" />
          <Input placeholder="Credit/ debit card number" type="number" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
            <Input rotateHover="w-full" placeholder="CVC" />
            <Input rotateHover="w-full" placeholder="Exp date" />
          </div>
          <Cta className=" !font-extrabold !text-base w-full !py-[11px]">
            Confirm
          </Cta>
        </form>
      </div>
    </div>
  );
};

export default CardInfo;
