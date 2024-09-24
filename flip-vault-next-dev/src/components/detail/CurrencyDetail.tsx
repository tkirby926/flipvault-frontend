import { CURRENCY_LIST } from "@/src/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Currency {
  title: string;
  image: string;
}

// Define the type for the props of CurrencyDetail
interface CurrencyDetailProps {
  activeButton: string;
  HANDLE_BUTTON: (title: string) => void;
}

const CurrencyDetail: React.FC<CurrencyDetailProps> = ({
  activeButton,
  HANDLE_BUTTON,
}) => {
  return (
    <div className="flex mt-4 sm:mt-8 gap-3 overflow-x-auto justify-start lg:justify-center mx-auto w-full mb-16">
      <div className="flex flex-nowrap xl:mb-0 lg:ps-36 xl:ps-0 mb-1.5 sm:mb-4 gap-3">
        {CURRENCY_LIST.map((obj: Currency, index: number) => (
          <Link
            scroll={false}
            href={`?on=marketplace&?type=${obj.title.toLowerCase()}`}
            key={index}
            className={`hover:border-white text-sm text-white tab flex gap-3 duration-300 border border-tuna-gray rounded-10 py-3 sm:py-[15px] px-4 items-center leading-140 ${
              activeButton === obj.title
                ? "bg-white !text-dark-black"
                : "!text-white"
            }`}
            onClick={() => HANDLE_BUTTON(obj.title)}>
            <Image
              width={20}
              height={20}
              className="max-w-5"
              src={obj.image}
              alt={obj.title}
              sizes="100vw"
            />
            <span className="mt-0.5">{obj.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CurrencyDetail;
