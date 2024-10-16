import { TABS_CARDS_DATA } from "@/src/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WhitePageInfo from "./WhitePagesInfo";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";

const WhitePages = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  const [selectedTab, setSelectedTab] = useState<"team" | "advisory">("team");
  useEffect(() => {
    if (search === "team-members") {
      setSelectedTab("team");
    } else if (search === "advisory-board") {
      setSelectedTab("advisory");
    }
  }, [searchParams]);
  return (
    <div className="flex flex-col relative pb-14 sm:pb-20 xl:pb-40 md:pt-6 custom-2xl:pt-12">
      <Image
        height={800}
        width={800}
        className="absolute pointer-events-none start-[-6%] h-[700px] w-[400px] lg:w-[600px] lg:start-0 lg:h-[1000px] z-0 xl:min-h-[1300px] xl:min-w-[800px] xl:start-0 hidden sm:block top-[-80%] xl:-top-[95%]"
        src="/assets/images/homepage/webp/faq-left-elip.webp"
        alt="semicircle"
      />
      <div className="container">
        <div
          className="mt-8 sm:mt-14 gap-6 !pb-28 sm:!pb-40 lg:!pb-[200px]"
          id="category-slider">
          <Swiper
            className="flex gap-5 "
            spaceBetween={16}
            slidesPerView={1}
            loop={false}
            speed={1500}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1600: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}>
              <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] pt-8 pb-6">
                  <div className="w-full overflow-auto xl:overflow-hidden flex items-center md:gap-6 gap-4 pb-2">
                        <div className="flex justify-center p-4 lg:p-[30px] bg-off-gray bg-opacity-10 rounded-7.5 w-full" style={{'color': 'white'}}>
                            {WhitePageInfo()}
                        </div>
                  </div>
              </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhitePages;
