import Image from "next/image";
import Paragraph from "../custom-ui/Paragraph";
import { CRYPTOCURRENCIES_DATA_LIST } from "@/src/utils/helper";
import PrimaryHeading from "../custom-ui/PrimaryHeading";

const CryptoCurrencies = () => {
  return (
    <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] py-3 sm:py-4 lg:pt-6 lg:pb-[18px]">
      <PrimaryHeading
        maxFontSize={22}
        minFontSize={16}
        reduceBelow={1200}
      >
        Cryptocurrencies
      </PrimaryHeading>
      <div className="pt-3 sm:pt-4 lg:pt-6 overflow-x-scroll w-full flex gap-3 profile-scroll-bar pb-1.5">
        {CRYPTOCURRENCIES_DATA_LIST.map((item, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer w-full min-w-[220px] md:min-w-[252px] p-3 sm:p-4 overflow-hidden border border-black bg-white bg-opacity-10 duration-300 rounded-5 hover:bg-opacity-30 relative"
          >
            <div className="flex items-center gap-2">
              <Image
                className="w-5 h-5 rounded-full"
                src={item.image}
                alt={item.name}
                width={20}
                height={20}
              />
              <Paragraph maxFontSize={16} minFontSize={14}>
                {item.name}
              </Paragraph>
            </div>
            <Paragraph
              maxFontSize={24}
              minFontSize={20}
              className="mt-2 sm:mt-3 leading-133"
            >
              {item.price} <span className="opacity-30">{item.symbol}</span>
            </Paragraph>
            <p className="text-xs text-white opacity-30 mt-1 font-normal">
              ${item.total}
            </p>
            <button className="p-[9px] rounded-2.5 bg-white duration-300 text-white font-normal bg-opacity-10 hover:bg-opacity-25 mt-2 md:mt-3 text-sm ml-auto pb-1.5">
              Withdraw
            </button>
            <span
              className={`absolute w-16 md:w-[86px] h-16 md:h-[86px] flex -top-5 -left-5 blur-[32px] opacity-70 -z-10 rounded-full ${index % 2 === 0 ? "bg-gray-pink !blur-[20px]" : "bg-blue"
                } ${item.name.toLowerCase() === "bitcoin" && "!bg-yellow-orange"
                }`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
