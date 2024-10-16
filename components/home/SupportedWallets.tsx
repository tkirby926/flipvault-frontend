import { WALLETS_LIST } from "../../utils/helper";
import Image from "next/image";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";

const SupportedWallets = () => {
  type wallets = {
    image: string;
    title: string;
  };
  return (
    <div className="relative overflow-x-clip">
      <div className="container lg:pt-32 lg:mt-3 pt-14 sm:pt-20 relative z-10">
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          center
          className="sm:mb-3 mb-2"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}>
          Supported Wallets
        </PrimaryHeading>
        <Paragraph
          data-aos="fade-up"
          data-aos-delay="300"
          maxFontSize={16}
          minFontSize={15}
          center
          className="text-white text-opacity-60 xl:mb-14 md:mb-10 mb-6 leading-160 max-w-[504px]">
          Several of the many wallets that FlipVault supports
        </Paragraph>
        <div className="flex xl:flex-nowrap flex-wrap gap-5 custom-2xl:gap-8 w-full justify-center lg:pt-1 relative z-10">
          {WALLETS_LIST.map((data: wallets, index: number) => (
            <div key={index} data-aos="fade-left" data-aos-delay={`${index}00`}>
              <div className="xl:py-7 xl:px-11 sm:p-6 p-4 bg-off-gray bg-opacity-10 xl:rounded-7.5 sm:rounded-5 rounded-2.5 hover:shadow-off-white common-transition">
                <Image
                  src={data.image}
                  alt={`${data.title}`}
                  width={128}
                  height={128}
                  sizes="100vw"
                  className="xl:rounded-7.5 sm:rounded-5 rounded-2.5 w-full sm:max-w-[128px] max-w-[85px] pointer-events-none"
                />
                <Paragraph
                  className="text-white xl:mt-5 mt-3 !leading-140 xl:font-extrabold font-bold"
                  center
                  maxFontSize={24}
                  minFontSize={16}
                  reduceBelow={992}>
                  {data.title}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-off-green w-[462px] h-[462px] rounded-full absolute right-0 lg:bottom-[-47%] bottom-0 blur-[70px] lg:bg-opacity-20 z-0 pointer-events-none bg-opacity-10 custom-2xl:right-40"></div>
      </div>
      <Image
        src="/assets/images/homepage/webp/supported-blue-ball.webp"
        alt="blue-ball"
        className="absolute opacity-15 sm:-bottom-8 left-0 bottom-0 blur-[100px] pointer-events-none z-0"
        width={849}
        height={1000}
      />
    </div>
  );
};

export default SupportedWallets;
