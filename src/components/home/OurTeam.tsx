import { TABS_CARDS_DATA } from "@/src/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";

const OurTeam = () => {
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
    <div className="relative">
      <Image
        height={800}
        width={800}
        className="absolute pointer-events-none start-[-6%] h-[700px] w-[400px] lg:w-[600px] lg:start-0 lg:h-[1000px] z-0 xl:min-h-[1300px] xl:min-w-[800px] xl:start-0 hidden sm:block top-[-80%] xl:-top-[95%]"
        src="/assets/images/homepage/webp/faq-left-elip.webp"
        alt="semicircle"
      />
      <div className="container">
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}
          center
          className="leading-120 sm:leading-137">
          Our Team
        </PrimaryHeading>
        <div className="relative mx-auto flex items-center justify-between max-w-[278px] sm:max-w-[310px] gap-3 mt-5">
          <Link
            scroll={false}
            href={{ search: "type=team-members" }}
            className={`relative z-10 text-sm leading-140 text-white duration-300 px-4 sm:px-6 py-2 sm:py-4 border border-white rounded-10 ${
              selectedTab === "team" && "!text-dark-black"
            }`}>
            Team members
          </Link>
          <Link
            scroll={false}
            href={{ search: "type=advisory-board" }}
            className={`relative z-10 text-sm leading-140 text-white duration-300 px-4 sm:px-6 py-2 sm:py-4 border border-white rounded-10 ${
              selectedTab === "advisory" && "!text-dark-black"
            }`}>
            Advisory board
          </Link>
          <span
            className={`absolute top-1/2 z-0 h-[37px] -translate-y-1/2 rounded-10 bg-white duration-300 sm:h-[53px] ${
              selectedTab === "team"
                ? "left-0 w-[134px] sm:w-[150px]"
                : "left-[calc(100%-0px)] w-[134px] sm:w-[146px] -translate-x-full"
            }`}></span>
        </div>
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
            {TABS_CARDS_DATA[selectedTab].map((obj, index) => (
              <SwiperSlide
                key={index}
                className="!pb-6 flip_card duration-300 min-h-[395px] h-full max-h-[450px] group relative z-20 after:w-full after:absolute after:top-0 after:left-0 justify-center">
                <div className="flip_card_inner min-h-[350px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[330px] xl:min-h-[395px] h-full rounded-5">
                  <div className="flip_card_front w-full h-full absolute flex items-center justify-center">
                    <div className="flex justify-center p-4 lg:p-[30px] bg-off-gray bg-opacity-10 rounded-7.5 w-full">
                      <div>
                        <Image
                          className="sm:rounded-5 xl:h-[260px]"
                          src={obj.image}
                          alt={obj.name}
                          width={312}
                          height={260}
                        />
                        <div className="mt-3.5">
                          <PrimaryHeading
                            maxFontSize={24}
                            minFontSize={18}
                            reduceBelow={1200}
                            className="text-center">
                            {obj.name}
                          </PrimaryHeading>
                          <Paragraph className="opacity-60 text-center">
                            {obj.position}
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip_card_back w-full h-full absolute rounded-5 bg-off-black">
                    <div className="px-4 opacity-0 group-hover:opacity-100 common-transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                      <Paragraph
                        maxFontSize={16}
                        minFontSize={12}
                        reduceBelow={1200}
                        center
                        className="text-white text-opacity-60 pt-2">
                        {obj.description}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
