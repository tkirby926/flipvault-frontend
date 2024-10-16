import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "../common/Icons";
import Image from "next/image";
import { CONNECT_WALLETS_LIST } from "@/utils/helper";

interface PopUpProps {
  popUpVisible: boolean;
  setPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<PopUpProps> = ({ popUpVisible, setPopUpVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen common-transition ${
        popUpVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative p-5 h-full w-full min-h-screen flex items-center justify-center">
        <div className="relative z-10 border border-white border-opacity-5 bg-white bg-opacity-15 md:rounded-10 rounded-5 md:p-6 p-4 max-w-[408px] w-full backdrop-blur-xl">
          <div className="flex items-start justify-between sm:mb-5 mb-3">
            <div>
              <PrimaryHeading
                maxFontSize={24}
                minFontSize={20}
                className="!leading-133 "
              >
                Connect Wallet
              </PrimaryHeading>
              <Paragraph
                maxFontSize={16}
                minFontSize={14}
                reduceBelow={992}
                className="!font-normal !text-opacity-80 !leading-160"
              >
                Choose a wallet you want to connect.
              </Paragraph>
            </div>
            <div
              onClick={() => setPopUpVisible(false)}
              className="size-6 p-1.5 cursor-pointer common-transition hover:scale-110"
            >
              <Icons icon="cross" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {CONNECT_WALLETS_LIST.map((obj, index) => (
              <div
                key={index}
                className="sm:p-3 p-1.5 sm:rounded-5 rounded-2.5 bg-white bg-opacity-10 flex items-center gap-4 group relative after:absolute after:top-0 after:left-0 after:right-0 after:h-full after:sm:rounded-5 after:rounded-2.5 after:common-transition after:z-0 after:bg-blueGradient after:translate-x-[-110%] hover:after:translate-x-0 overflow-hidden cursor-pointer shadow-[0px_0px_0px_1px_#ffffff0a_inset] hover:shadow-none common-transition"
              >
                <Image
                  className="sm:rounded-[12px] rounded-2 relative z-10 sm:size-8"
                  src={`${obj.image}`}
                  alt={`${obj.title}`}
                  width={28}
                  height={28}
                  sizes="100vw"
                />
                <Paragraph
                  maxFontSize={16}
                  minFontSize={14}
                  className="!font-extrabold relative z-10"
                >
                  {obj.title}
                </Paragraph>
                <Icons className="relative z-10" icon="rightArrow" />
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={() => setPopUpVisible(!popUpVisible)}
          className="absolute inset-0 bg-dark-black bg-opacity-65 z-0"
        ></div>
      </div>
    </div>
  );
};

export default PopUp;
