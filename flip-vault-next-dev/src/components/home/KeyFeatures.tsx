import Image from "next/image";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import { KEY_FEATURES_LIST } from "@/src/utils/helper";
interface FeatureData {
  title: string;
  description: string;
  image: string;
}

const KeyFeatures = () => {
  return (
    <div className="feature_parent relative pt-14 sm:pt-20 lg:py-10 overflow-x-clip">
      <div className="container relative z-10">
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}
          center
          className="text-white max-w-[800px]">
          Key Features
        </PrimaryHeading>
        <Paragraph
          data-aos="fade-up"
          data-aos-delay="300"
          maxFontSize={18}
          minFontSize={16}
          reduceBelow={768}
          center
          className="text-white mx-3 max-w-[570px] leading-160 opacity-60 pt-1.5 sm:pt-3">
          FlipVault operates much differently than all other NFT trading
          platforms
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-8 pt-8 sm:pt-10 md:pt-12 lg:pt-[60px]">
          {KEY_FEATURES_LIST.map((obj: FeatureData, index: number) => (
            <div
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              className={`flip_card md:col-span-3 lg:col-span-2 border border-transparent duration-300 rounded-5 min-h-[380px] sm:min-h-[400px] xl:min-h-[450px] h-full max-h-[450px] group relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${
                index === 3 && "md:!col-span-3"
              } ${
                index === 4 &&
                "md:!col-span-6 md:mx-auto md:w-1/2 lg:w-full lg:!col-span-3"
              }`}
              key={index}>
              <div className="flip_card_inner h-full rounded-5">
                <div className="flip_card_front w-full h-full absolute flex items-center justify-center p-4">
                  <div className="flex flex-col items-center justify-center pt-6">
                    <Paragraph
                      maxFontSize={24}
                      minFontSize={20}
                      reduceBelow={768}
                      center
                      className="max-w-[308px] text-white !font-extrabold px-5 sm:px-3 xl:px-0 !leading-140 group-hover:opacity-0 common-transition">
                      {obj.title}
                    </Paragraph>
                    <Image
                      src={obj.image}
                      alt={obj.title}
                      width={356}
                      height={306}
                      className={`pointer-events-none group-hover:opacity-0 common-transition ${
                        index === 0 &&
                        "object-contain scale-125 max-w-[150px] w-full h-[160px] sm:h-[180px] xl:h-[233px] mt-14 -translate-x-5 sm:-translate-x-9"
                      } ${
                        index === 1 &&
                        "max-w-[260px] sm:max-w-[326px] xl:max-w-[356px] max-xl:object-contain w-full h-[280px] sm:h-[210px] xl:h-[309px] mt-5 px-2 xl:px-0 lg:mx-2"
                      } ${
                        index === 2 &&
                        "max-w-[220px] sm:max-w-[229px] xl:max-w-[249px] w-full h-[220px] sm:h-[242px] xl:h-[286px] mt-5 xl:mt-10"
                      } ${
                        index === 3 &&
                        "max-w-[260px] sm:max-w-[306px] xl:max-w-[336px] w-full h-[200px] sm:h-[231px] xl:h-[251px] mt-5 lg:mt-[22px]"
                      } ${
                        index === 4 &&
                        "max-w-[200px] sm:max-w-[238px] xl:max-w-[258px] w-full h-[220px] sm:h-[250px] xl:h-[270px] mt-2 lg:mt-9 pointer-events-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="flip_card_back w-full h-full absolute flex items-center justify-center rounded-5 p-4 bg-off-black">
                  <Paragraph
                    maxFontSize={20}
                    minFontSize={16}
                    reduceBelow={768}
                    center
                    className={`text-white mt-2 sm:mt-3 md:mt-4 text-opacity-60 px-4 sm:px-6 md:px-9 opacity-0 group-hover:opacity-100 common-transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ${
                      index === 0 && "md:px-9 lg:!px-5"
                    }`}>
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        className="absolute pointer-events-none max-lg:hidden top-0 left-0 -z-0 -translate-y-1/4 h-[672px]"
        src="/assets/images/homepage/webp/circle-ellipse.webp"
        alt="circle-ellipse"
        width={340}
        height={200}
      />
      <span className="absolute pointer-events-none max-lg:hidden bg-blue -z-0 flex w-[376px] h-[554px] opacity-20 -left-[138px] -bottom-24 blur-[80px] rounded-full"></span>
      <span className="absolute pointer-events-none max-lg:hidden bg-blue -z-0 flex w-[678px] h-[554px] opacity-20 right-0 translate-x-3/4 -top-16 blur-[80px] rounded-full"></span>
    </div>
  );
};

export default KeyFeatures;
