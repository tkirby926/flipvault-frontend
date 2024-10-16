"use client";
import PrimaryHeading from "@/components/custom-ui/PrimaryHeading";
import { CURRENCY_DETAIL } from "@/utils/constants";
import { CURRENCY_LIST, NFT_CARDS_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NftCard from "../common/NftCard";
import Cta from "../custom-ui/Cta";
import ProposeTradePopup from "./ProposeTradePopup";

const Currency = () => {
  type Popular = {
    heading: string;
    owner: string;
    category: string;
    currency: string;
    image: string;
    profileImage: string;
  };

  interface CurrencyList {
    title: string;
    image: string;
  }

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<string>("XRP");

  useEffect(() => {
    const savedActiveButton = localStorage.getItem("activeButton");
    const savedCurrency = localStorage.getItem("currency");

    if (savedActiveButton && savedCurrency) {
      setActiveButton(savedActiveButton);
    } else {
      setActiveButton("XRP");
    }
  }, []);

  const HANDLE_BUTTON = (buttonName: string) => {
    setActiveButton(buttonName);
    localStorage.setItem("activeButton", buttonName);
    localStorage.setItem("currency", buttonName);
  };
  const [popUpVisible, setPopUpVisible] = useState<{}>({
    visible: false,
    obj: null,
  });
  useEffect(() => {
    if (popUpVisible === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popUpVisible]);
  return (
    <>
      <div className="relative pb-20 sm:mb-20 h-[665px]">
        <div className="px-3 pt-16 sm:pt-20 relative -z-0">
          <div className="flex flex-col justify-center items-center">
            <PrimaryHeading
              maxFontSize={32}
              minFontSize={28}
              center
              className="text-white max-w-[800px] leading-110">
              Items by Currency
            </PrimaryHeading>
          </div>
          <div className="flex mt-4 sm:mt-8 gap-3 overflow-x-auto justify-start lg:justify-center mx-auto w-full">
            <div className="flex flex-nowrap xl:mb-0 lg:ps-36 xl:ps-0 mb-1.5 sm:mb-4 gap-3">
              {CURRENCY_LIST.map((obj: CurrencyList, index: number) => (
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
        </div>
        <Swiper
          className="w-full backdrop-blur-sm"
          spaceBetween={16}
          slidesPerView={2}
          loop={false}
          freeMode={true}
          speed={1500}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1650: {
              slidesPerView: 6.5,
              spaceBetween: 10,
            },
          }}>
          {NFT_CARDS_LIST.map((data: Popular, index) => (
            <SwiperSlide
              key={index}
              className="flex !pb-6 items-center rounded-5 group duration-300 mt-8 min-h-[268px] min-w-[278px] justify-center"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}>
              <NftCard
                onclick={() => setPopUpVisible({ visible: true, obj: data })}
                data={data}
                index={index}
                hoverIndex={hoverIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex mt-8 mb-16 z-0 sm:mb-20 absolute -bottom-8 sm:-bottom-28 xl:-bottom-20 translate-x-[-50%] start-1/2 justify-center sm:mt-8">
          <Cta
            url={CURRENCY_DETAIL}
            target="_self"
            className="font-extrabold text-base !px-6 !h-10 sm:!h-[51px] !py-2 sm:!py-3 mt-4 sm:mt-0"
            transparent>
            See all
          </Cta>
        </div>
      </div>
      <ProposeTradePopup
        popUpVisible={popUpVisible}
        setPopUpVisible={setPopUpVisible}
      />
    </>
  );
};

export default Currency;
