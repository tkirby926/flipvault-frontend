import { useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import Image from "next/image";
import { MY_NFT_LIST } from "@/utils/helper";
interface PopUpProps {
  popUpVisible: any;
  setPopUpVisible: React.Dispatch<React.SetStateAction<any>>;
}

const ProposeTradePopup: React.FC<PopUpProps> = ({
  popUpVisible,
  setPopUpVisible,
}) => {
  const [amount, setAmount] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSubmit = () => {
    setAmount("");
  };

  const handleAddItem = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item: string) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen common-transition ${
        popUpVisible.visible
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
                Propose Trade
              </PrimaryHeading>
            </div>
            <div
              onClick={() => {
                setPopUpVisible({ visible: false, obj: null });
                setAmount("");
              }}
              className="size-6 cursor-pointer common-transition hover:scale-110 absolute end-3 top-3 flex items-center justify-center">
              <Icons className="w-full" icon="cross" />
            </div>
          </div>
          <div className="flex px-3 items-center border border-charcoal-gray relative z-10 h-[44px] rounded-2 bg-transparent">
            <Icons className="me-2.5" icon="solanaLogo" />
            <input
              placeholder="Enter amount in SOL"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-white ps-[10px] w-full placeholder:opacity-40 rounded-2 bg-transparent outline-none border-0"
              type="number"
            />
          </div>
          <div className="flex items-center gap-3 pt-6 md:pt-8 mb-5 md:mb-7 pb-0.5 overflow-auto">
            {MY_NFT_LIST.map((item: string, i: number) => (
              <span key={i} className="relative inline-block group">
                <Image
                  width={82}
                  height={82}
                  className=" min-w-14 min-h-14 sm:min-w-[82px] sm:min-h-[82px] rounded-4 max-w-14 max-h-14 sm:max-w-[82px] sm:max-h-[82px] cursor-pointer"
                  src={`${item}`}
                  alt="my nft"
                />
                {selectedItems.includes(item + i) && (
                  <span className="absolute top-0 right-0 size-5 rounded-full bg-green-500 -translate-y-1.5 translate-x-1.5 flex items-center justify-center cursor-pointer z-0">
                    <Icons className="size-3" icon="tickIcon" />
                  </span>
                )}
                <span
                  onClick={() => {
                    if (selectedItems.includes(item + i)) {
                      handleRemoveItem(item + i);
                    } else {
                      handleAddItem(item + i);
                    }
                  }}
                  className="absolute top-0 right-0 size-5 rounded-full bg-white -translate-y-1.5 translate-x-1.5 flex items-center justify-center cursor-pointer z-10 opacity-0 common-transition group-hover:opacity-100">
                  <Icons
                    icon={
                      selectedItems.includes(item + i)
                        ? "blueRemoveIcon"
                        : "blueAddIcon"
                    }
                  />
                </span>
              </span>
            ))}
          </div>
          <Cta className="w-full" onClick={handleSubmit}>
            Submit
          </Cta>
        </div>
        <div
          onClick={() => {
            setPopUpVisible({ visible: false, obj: null });
            setAmount("");
          }}
          className="absolute inset-0 bg-dark-black bg-opacity-65 z-0"></div>
      </div>
    </div>
  );
};

export default ProposeTradePopup;
