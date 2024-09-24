"use client";
import { TOP_TRADER_DETAIL } from "@/src/utils/constants";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CONTACT_DATA } from "../../utils/helper";
import Cta from "../custom-ui/Cta";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";

const Connect = () => {
  type contact = {
    heading: string;
    description: string;
    image: string;
  };

  return (
    <div id="connect_slider" className="py-16 lg:py-20 relative">
      <Image
        alt="ellipse"
        src="/assets/images/trade/webp/blur-left-ellipse.webp"
        height={452.57}
        width={677.58}
        className="absolute pointer-events-none hidden custom-xl:block left-[-22%] top-[-45%]"
      />
      <Image
        alt="ellipse"
        src="/assets/images/trade/webp/blur-right-ellipse.webp"
        height={452.57}
        width={677.58}
        className="absolute pointer-events-none hidden custom-xl:block right-[-27%] -top-5"
      />
      <PrimaryHeading
        maxFontSize={32}
        minFontSize={28}
        center
        className="leading-125">
        Top Traders
      </PrimaryHeading>
      <Paragraph
        maxFontSize={14}
        minFontSize={16}
        center
        className="leading-156 opacity-80 px-4  pt-1 md:pt-3">
        FlipVault’s most active flippers
      </Paragraph>
      <div className="flex items-center mt-5 sm:mt-10 lg:mt-12 relative">
        <Swiper
          className="flex"
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
              slidesPerView: 5,
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
          {CONTACT_DATA.map((data: contact, index: number) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center !pb-6">
              <div
                key={index}
                className="rounded-5 max-w-[278px] group overflow-hidden">
                <div className="h-[220px] w-[278px] overflow-hidden">
                  <Image
                    alt="mike-smith"
                    src={data.image}
                    height={220}
                    width={278}
                    className="h-[220px] group-hover:scale-[1.05] common-transition object-cover w-[278px]"
                  />
                </div>
                <div className="bg-baltic-sea p-4">
                  <p className="mb-2 font-extrabold text-white text-xl leading-120">
                    {data.heading}
                  </p>
                  <p className="text-white text-base mb-4 font-normal leading-150">
                    {data.description}
                  </p>
                  <Cta
                    className="font-extrabold text-base !px-6 !h-10 sm:!h-[51px] !py-1 sm:!py-2 w-full border-0 bg-ship-gray"
                    transparent>
                    Add Friend
                  </Cta>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-8 flex items-center justify-center">
        <Cta
          url={TOP_TRADER_DETAIL}
          target="_self"
          className="font-extrabold text-base !px-6 !h-10 sm:!h-[51px] !py-1 sm:!py-2 flex items-center justify-center"
          transparent>
          See all
        </Cta>
      </div>
    </div>
  );
};

export default Connect;
