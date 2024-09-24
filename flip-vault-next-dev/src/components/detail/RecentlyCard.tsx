import Image from "next/image";
import React from "react";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";

interface Item {
  category: string;
  image: string;
  heading: string;
  currency: string;
  profileImage: string;
  owner: string;
}

interface RecentlyCardProps {
  data: Item[];
  showCards: number;
  setHoverIndex: (index: number | null) => void;
  hoverIndex: number | null;
}

const RecentlyCard: React.FC<RecentlyCardProps> = ({
  data,
  showCards,
  setHoverIndex,
  hoverIndex,
}) => {
  return (
    <div className="flex flex-wrap xl:mt-20 lg:mt-16 md:mt-10 mt-20 gap-y-4 justify-center sm:justify-start">
      {data.slice(0, showCards).map((item, index) => (
        <div
          key={index}
          className="flex xl:h-[328px] xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full sm:max-w-full max-w-[317px] items-center rounded-5 sm:px-2 currency_card group common-transition sm:justify-center relative"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div className="rounded-5 border border-black w-full">
            <div className="rounded-5 relative h-[328px]">
              <div className="h-[220px] w-full relative">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {(index === 1 || index === 9) && <Icons icon="fireEllipse" />}
                  <p className="text-dark-black max-w-[76px] h-[26px] rounded-full flex items-center justify-centers w-full text-xs font-normal px-3.5 py-1.5 leading-100 bg-white">
                    {item.category}
                  </p>
                </div>
                <Image
                  alt="mike-smith"
                  src={item.image}
                  height={220}
                  width={314}
                  className="!h-[250px] rounded-t-5 object-cover duration-300 max-h-[250px] w-full"
                />
              </div>
              <div
                className={`bg-baltic-sea absolute bottom-0 border-b-black border-b rounded-b-5 left-0 max-h-[155px] right-0 w-full z-20 grey-car duration-300 p-4 ${
                  hoverIndex === index ? "-mb-12" : "-mb-0"
                }`}
              >
                <p className="mb-3 font-extrabold text-white text-xl leading-120">
                  {item.heading} {item.currency}
                </p>

                <div className="flex items-center gap-2">
                  <Image
                    alt="john doe"
                    src={item.profileImage}
                    height={16}
                    width={16}
                  />
                  <p className="text-french-gray text-xs font-normal leading-140">
                    Owned by {item.owner}
                  </p>
                </div>
                <div
                  className={`text-center whitespace-nowrap common-transition ${
                    hoverIndex === index
                      ? "h-[44px] z-40 opacity-100"
                      : "!-z-0 h-0 relative opacity-0"
                  }`}
                >
                  <Cta
                    className="font-extrabold w-full mt-5 sm:text-base text-sm min-h-[44px] whitespace-nowrap flex items-center justify-center px-2 py-2.5 sm:pb-2 bg-blueGradient border-0"
                    disableDefaultSpacing
                  >
                    Withdraw
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyCard;
