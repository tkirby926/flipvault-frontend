import Image from "next/image";
import React from "react";
import Cta from "../custom-ui/Cta";

interface CurrencyCardProps {
  data: any;
  showCards: number;
  setPopUpVisible: (visible: boolean) => void;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  data,
  showCards,
  setPopUpVisible,
}) => {
  return (
    <div className="flex flex-wrap w-full gap-y-4 mt-20">
      {data.slice(0, showCards).map((obj: any, index: number) => (
        <div
          key={index}
          className="flex items-center justify-center xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full sm:max-w-full px-2"
        >
          <div className="rounded-5 group overflow-hidden w-full">
            <div className="h-[220px] w-full overflow-hidden">
              <Image
                alt="mike-smith"
                src={obj.image}
                height={220}
                width={278}
                className="h-[220px] group-hover:scale-[1.05] common-transition object-cover w-full"
              />
            </div>
            <div className="bg-baltic-sea p-4">
              <p className="mb-2 font-extrabold text-white text-xl leading-120">
                {obj.heading}
              </p>
              <p className="text-white text-base mb-4 font-normal leading-150">
                {obj.description}
              </p>
              <Cta
                className="font-extrabold text-base !px-6 !h-10 sm:!h-[51px] !py-1 sm:!py-2 w-full border-0 bg-ship-gray"
                transparent
                onClick={() => setPopUpVisible(true)}
              >
                Add Friend
              </Cta>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrencyCard;
