import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Cta from "../custom-ui/Cta";
import Image from "next/image";
import Icons from "../common/Icons";
import { HOW_WORKS_LIST } from "@/src/utils/helper";
import { THE_OASIS } from "@/src/utils/constants";

const HowItWorks = () => {
  return (
    <div className="relative overflow-x-clip">
      <Image
        src="/assets/images/homepage/webp/how-works-left-vector.webp"
        height={520}
        width={520}
        alt="how-works-left-vector"
        sizes="100vw"
        className="absolute left-0 max-lg:hidden -bottom-20 md:-bottom-36 lg:-bottom-64 min-h-[250px] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[520px] pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/webp/how-works-right-vector.webp"
        height={700}
        width={700}
        alt="how-works-right-vector"
        sizes="100vw"
        className="absolute max-lg:hidden -right-14 md:right-0 top-0 xl:-top-28 min-h-[300px] w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[700px] pointer-events-none"
      />
      <div className="container xl:pt-11 pt-14 sm:pt-20 relative z-10">
        <div className="flex items-center flex-col md:flex-row justify-between mb-8">
          <div>
            <PrimaryHeading
              maxFontSize={42}
              minFontSize={22}
              reduceBelow={1200}
              className="text-center md:text-start"
              data-aos="fade-down"
              data-aos-delay="300">
              How it works
            </PrimaryHeading>
            <Paragraph
              maxFontSize={14}
              minFontSize={16}
              className="max-w-[380px] opacity-80 pt-1.5 sm:pt-3 text-center md:text-start"
              data-aos="fade-up"
              data-aos-delay="300">
              Utilize FlipVault’s safe and easy-to-use platform in just a few
              steps
            </Paragraph>
          </div>
          <div className="mt-6">
            <Cta
              url={`${THE_OASIS}?on=the-oasis`}
              target="_self"
              className="font-extrabold md:text-base !py-2.5 md:!py-[13.5px] !px-6 md:!px-8 text-sm">
              Launch Platform
            </Cta>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <Icons icon="worksBlackLine" className="w-full" />
        </div>
        <div className="py-8 lg:py-12 xl:py-16 w-full">
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 md:gap-5 w-full">
            {HOW_WORKS_LIST.map((obj, index) => (
              <div
                data-aos="fade-left"
                data-aos-delay={`${index}00`}
                key={index}
                className="flex md:flex-col justify-center md:justify-start group w-full">
                <div className="w-[44px]">
                  <div className="w-full mt-2 md:mt-0 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 xl:w-[63px] xl:h-[63px] border border-tuna-gray rounded-full flex items-center justify-center relative group-hover:border-blue common-transition">
                    {obj.icon && (
                      <span>
                        <Icons
                          icon={obj.icon}
                          strokeClassName="group-hover:stroke-blue common-transitions"
                          className="absolute h-[49px] sm:h-16 md:h-[1px] top-[45px] sm:top-11 md:top-7 lg:top-[31px] left-[18.5px] sm:left-[21px] md:left-[61px] lg:left-[73px] w-[1px] md:w-[115px] lg:w-[164px] xl:w-[217px] custom-2xl:w-[309px] custom-2xl:h-0.5"
                        />
                      </span>
                    )}
                    <span className="w-3 h-3 lg:w-[17px] lg:h-[17px] border border-tuna-gray inline-block rounded-full common-transitions relative after:content-[''] after:w-full after:scale-0 after:h-full after:absolute after:top-0 after:left-0 after:bg-blueGradient group-hover:after:scale-100 after:rounded-full after:common-transition"></span>
                  </div>
                </div>
                <div className="ps-10 sm:ps-14 md:ps-0 w-full">
                  <PrimaryHeading className="opacity-50 md:mt-8 xl:mt-10 leading-130 !text-xl md:!text-2xl lg:h-16 xl:h-[unset] group-hover:opacity-100 common-transition">
                    {obj.heading}
                  </PrimaryHeading>
                  <Paragraph
                    reduceBelow={1280}
                    className="w-full opacity-50 lg:max-w-[250px] leading-160 custom-2xl:max-w-[367px] pt-1.5 sm:pt-2 group-hover:opacity-100 common-transition">
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="shadow-light-black rounded-2.5 md:rounded-5 bg-blueOffWhiteGradient p-[1px]"
          data-aos="zoom-in"
          data-aos-delay="300">
          <Image
            src="/assets/images/homepage/webp/how-it-works-dashboard.webp"
            height={652}
            width={1160}
            alt="how-it-works-dashboard"
            sizes="100vw"
            className="rounded-2.5 md:rounded-5 min-h-[160px] w-full pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
