import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "../common/Icons";
import { BENEFIT_DATA } from "@/utils/helper";

const TradingPlatform = () => {
  type Benefit = {
    heading: string;
    description: string;
    benefitIcon: string;
  };

  return (
    <div className="py-14 sm:py-20 lg:py-[140px]">
      <div className="container">
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}
          center
          className="text-white max-w-[840px] leading-120 sm:leading-137">
          Benefits of Using Our Revolutionary Trading Platform
        </PrimaryHeading>

        <div className="flex flex-wrap justify-center pt-6 relative z-10 sm:pt-8 lg:pt-14 mt-1">
          {BENEFIT_DATA.map((data: Benefit, index: number) => (
            <div
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              key={index}
              className={`sm:w-6/12 w-full max-w-[400px] sm:max-w-[unset] lg:w-4/12 ${
                index === 0
                  ? "sm:pe-2.5"
                  : index === 1
                  ? "pt-5 sm:pt-0 sm:ps-2.5 lg:px-2.5"
                  : index === 2
                  ? "pt-5 lg:pt-0 lg:ps-2.5"
                  : ""
              }`}>
              <div className="rounded-3.5 sm:rounded-7.5 bg-boulder flex flex-col items-center bg-off-gray border border-transparent hover:border-white common-transition h-full bg-opacity-10 p-5 lg:px-6 lg:py-10">
                <Icons icon={data.benefitIcon} />
                <PrimaryHeading
                  maxFontSize={24}
                  minFontSize={18}
                  center
                  reduceBelow={1440}
                  className="text-white pt-5 sm:pt-7 lg:pt-10 md:max-w-[318px] leading-137">
                  {data.heading}
                </PrimaryHeading>
                <Paragraph
                  maxFontSize={14}
                  minFontSize={16}
                  center
                  className="text-white max-w-[300px] leading-160 opacity-60 pt-3">
                  {data.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingPlatform;
