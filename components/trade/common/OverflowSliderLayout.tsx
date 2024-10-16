"use client";
import { RECENTLY_DETAIL } from "@/utils/constants";
import { useState } from "react";
import "swiper/css";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NftCard from "../../common/NftCard";
import Cta from "../../custom-ui/Cta";
import Paragraph from "../../custom-ui/Paragraph";
import PrimaryHeading from "../../custom-ui/PrimaryHeading";

type Recently = {
  heading: string;
  owner: string;
  category: string;
  currency: string;
  image: string;
  profileImage: string;
};

type CommonCardProps = {
  heading: string;
  data: Recently[];
  showTabs: boolean;
};

const CommonComponent = (props: CommonCardProps) => {
  const [activeItem, setActiveItem] = useState("All");

  const HANDLE_ITEM = (item: string) => {
    setActiveItem(item);
  };
  const ITEMS = ["1d", "7d", "1m", "6m", "1y", "All"];
  const { heading, data, showTabs } = props;

  return (
    <div className="sm:py-16 pb-16 lg:py-20 relative">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div className="flex flex-col pr-5 sm:max-w-[300px] lg:max-w-[600px]">
            <PrimaryHeading
              maxFontSize={32}
              minFontSize={28}
              className="text-white leading-125 font-extrabold">
              {heading}
            </PrimaryHeading>
          </div>
          {showTabs ? (
            <div className="border tabs mt-3 sm:mt-0 p-1 max-w-[321px] border-tuna-gray flex items-center rounded-10">
              {ITEMS.map((item) => (
                <p
                  key={item}
                  onClick={() => HANDLE_ITEM(item)}
                  className={`text-white font-normal text-sm sm:text-base p-3 sm:p-4 cursor-pointer sm:h-[51px] !w-[51px] duration-300 leading-118 rounded-25 min-h-12 min-w-12 relative ${
                    activeItem === item ? "bg-charade" : "bg-transparent"
                  }`}>
                  <span className="inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    {item}
                  </span>
                </p>
              ))}
            </div>
          ) : (
            <Cta
              url={RECENTLY_DETAIL}
              target="_self"
              className="font-extrabold text-base !px-6 !h-[44px] sm:!h-[51px] py-3 mt-4 sm:mt-0 flex items-center justify-center sm:max-w-full max-w-[120px]"
              transparent>
              See all
            </Cta>
          )}
        </div>
      </div>
      <div className="flex justify-center ml-[calc((100vw-330px)/2)] custom-smx:ml-[calc((100vw-410px)/2)] sm:ml-[calc((100vw-584px)/2)] md:ml-[calc((100vw-714px)/2)] lg:ml-[calc((100vw-974px)/2)] custom-xl:ml-[calc((100vw-1164px)/2)] custom-xxl:ml-[calc((100vw-1250px)/2)] custom-2xl:ml-[calc((100%-1552px)/2)] mt-5 lg:mt-12 max-w-[1730px] relative mx-auto">
        <Swiper
          className="flex"
          spaceBetween={25}
          slidesPerView={1.2}
          loop={false}
          speed={1500}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
          breakpoints={{
            450: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.6,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.6,
              spaceBetween: 16,
            },
            1320: {
              slidesPerView: 4.2,
              spaceBetween: 16,
            },
            1650: {
              slidesPerView: 5.6,
              spaceBetween: 10,
            },
          }}>
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center !pb-6">
              <NftCard data={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CommonComponent;
