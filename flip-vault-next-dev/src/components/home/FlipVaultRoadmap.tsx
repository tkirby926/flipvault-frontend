import { FLIP_VAULT_ROADMAP_LIST } from "@/src/utils/helper";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Icons from "../common/Icons";
import Image from "next/image";

const FlipVaultRoadmap = () => {
  return (
    <div className="relative pt-14 sm:pt-20 xl:py-24 roadmap_parent">
      <div className="container relative z-10 roadmap_cards_parent">
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}
          center
          className="text-white max-w-[800px]"
        >
          FlipVault Roadmap
        </PrimaryHeading>
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:gap-3 pt-8 md:pt-10 lg:pt-12 relative max-w-[1160px] mx-auto">
          {FLIP_VAULT_ROADMAP_LIST.map((obj, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${index}00`}
              key={index}
              className={`col-span-2 flex items-center relative z-10 w-full lg:w-1/2 gap-3 sm:gap-6 ${
                index % 2 === 0
                  ? "lg:gap-6 max-lg:ml-auto max-lg:flex-row-reverse roadmap_left_card_animate"
                  : "lg:gap-[42px] ml-auto flex-row-reverse roadmap_right_card_animate"
              }`}
            >
              <div
                className={`sm:rounded-5 rounded-2.5 p-4 sm:p-6 relative border border-transparent hover:border-white common-transition bg-whiteTransparentGradientSecondary ${
                  index % 2 === 0
                    ? "lg:bg-whiteTransparentGradientPrimary"
                    : "lg:bg-whiteTransparentGradientSecondary"
                }`}
              >
                <Paragraph
                  maxFontSize={20}
                  minFontSize={16}
                  reduceBelow={768}
                  className={`text-white !font-extrabold !leading-120 ${
                    index % 2 === 0 ? "text-start lg:text-end" : "text-start"
                  }`}
                >
                  {obj.title}
                </Paragraph>
                <Paragraph
                  maxFontSize={16}
                  minFontSize={14}
                  reduceBelow={768}
                  className={`text-white mt-2 sm:mt-3 text-opacity-60 ${
                    index % 2 === 0 ? "text-start lg:text-end" : "text-start"
                  }`}
                >
                  {obj.description}
                </Paragraph>
                <Paragraph
                  maxFontSize={100}
                  minFontSize={64}
                  reduceBelow={992}
                  className={`text-custom-8xl !font-extrabold absolute pointer-events-none -z-0 top-1/2 -translate-y-1/2 text-white opacity-5 ${
                    index % 2 === 0 ? "max-lg:right-0 lg:left-0" : "right-0"
                  }`}
                >
                  0{index + 1}.
                </Paragraph>
              </div>
              <span
                className={`${
                  index % 2 === 0 ? "lg:translate-x-1/2" : "lg:-translate-x-1/2"
                }`}
              >
                <Icons icon={`roadmapIcon${index + 1}`} />
              </span>
            </div>
          ))}
          <span className="absolute pointer-events-none w-[1px] h-full top-[57%] lg:top-1/2 z-0 -translate-y-1/2 flex left-6 sm:left-8 lg:left-1/2 -translate-x-1/2">
            <Icons icon="roadmapBlueLine" />
          </span>
        </div>
      </div>
      <Image
        className="absolute pointer-events-none -z-0 right-0 top-[22%] max-lg:hidden"
        src="/assets/images/homepage/webp/roadmap-ball-right.webp"
        alt="roadmap-ball-blue"
        width={370}
        height={492}
      />
      <Image
        className="absolute pointer-events-none -z-0 left-0 bottom-[1%] max-lg:hidden"
        src="/assets/images/homepage/webp/roadmap-ball-left.webp"
        alt="roadmap-ball-left"
        width={650}
        height={731}
      />
    </div>
  );
};

export default FlipVaultRoadmap;
