import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Cta from "../custom-ui/Cta";
import Image from "next/image";
import { THE_OASIS } from "@/utils/constants";
import Icons from "../common/Icons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col relative pb-14 sm:pb-20 xl:pb-40 md:pt-6 custom-2xl:pt-12">
      <Image
        src="/assets/images/homepage/png/hero-shade.png"
        height={600}
        width={600}
        alt="hero-shade"
        sizes="100vw"
        className="absolute sm:left-[5%] top-0 pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/png/hero-bubble-1.png"
        height={700}
        width={700}
        alt="hero-bubble-1"
        sizes="100vw"
        className="absolute end-0 max-w-[400px] lg:max-w-[700px] hidden sm:block top-[-20%] lg:top-[-10%] pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/webp/hero-bubble-2.webp"
        height={900}
        width={900}
        alt="hero-bubble-2"
        sizes="100vw"
        className="absolute end-0 top-[-10%] hidden lg:block z-[1] pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/png/hero-bubble-3.png"
        height={850}
        width={850}
        alt="hero-bubble-3"
        sizes="100vw"
        className="absolute end-[6%] top-[12%] hidden lg:block pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/png/hero-bubble-4.png"
        height={750}
        width={750}
        alt="hero-bubble-4"
        sizes="100vw"
        className="absolute end-[22%] top-[28%] hidden lg:block pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/png/hero-bubble-5.png"
        height={550}
        width={550}
        alt="hero-bubble-5"
        sizes="100vw"
        className="absolute left-[-10%] top-[60%] sm:top-[30%] max-w-[150px] sm:max-w-[300px] lg:max-w-[550px] pointer-events-none"
      />
      <Image
        src="/assets/images/homepage/webp/hero-bubble-6.webp"
        height={850}
        width={850}
        alt="hero-bubble-6"
        sizes="100vw"
        className="absolute end-[-2%] top-[18%] hidden xl:block z-[2] pointer-events-none"
      />
      <div className="container z-[3] flex-grow flex flex-col justify-center items-center relative pt-12 sm:pt-0">
        <PrimaryHeading
          data-aos="fade-left"
          data-aos-delay="300"
          maxFontSize={65}
          minFontSize={24}
          reduceBelow={1400}
          center
          className="!leading-120 custom-2xl:max-w-[1160px]">
          Peer-to-Peer <span className="block">Cross-Chain Trading</span>
        </PrimaryHeading>
        <div data-aos="fade-right" data-aos-delay="300">
          <Paragraph
            minFontSize={13}
            className="text-xl sm:!text-custom-2xl pt-2 sm:max-w-[540px] !leading-160 !opacity-60"
            center>
            Trade NFTs, Cryptocurrencies, and Files Across Multiple Networks
          </Paragraph>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-5">
          <div
            className="flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="300">
            <Cta
              url={`${THE_OASIS}?on=the-oasis`}
              target="_self"
              className="inline-block font-extrabold md:text-base !py-2.5 md:!py-[13.5px] !px-6 md:!px-[32px] text-sm">
              Launch Platform
            </Cta>
          </div>
        </div>
        <div
          className="flex items-center gap-4 py-3 md:py-4 px-3 md:px-8 bg-white bg-opacity-10 rounded-4 md:rounded-5 mt-6"
          data-aos-delay="300">
          <Icons icon="solanaIcon" />
          <Paragraph className="sm:!text-xl text-center">
            Powered by Solana
          </Paragraph>
        </div>
        <PrimaryHeading
          center
          className="!leading-120 pt-5"
          data-aos="fade-right"
          data-aos-delay="300"
          maxFontSize={40}
          minFontSize={18}
          reduceBelow={1400}>
          Safety, Flexibility, Ease
        </PrimaryHeading>
        <div className="flex items-center justify-center relative group max-w-[778px] mx-auto py-5 sm:py-0">
          <Image
            priority
            src="/assets/images/homepage/png/oasis-mountain-left.png"
            height={518}
            width={385}
            alt="hero-bubble-6"
            sizes="100vw"
            className="pointer-events-none group-hover:md:-translate-x-[134px] group-hover:sm:-translate-x-[104px] group-hover:-translate-x-[65px]  duration-700 transition-all w-1/2"
          />
          <Image
            priority
            src="/assets/images/homepage/png/oasis-mountain-right.png"
            height={518}
            width={385}
            alt="hero-bubble-6"
            sizes="100vw"
            className="pointer-events-none group-hover:md:translate-x-[134px] group-hover:sm:translate-x-[104px] group-hover:translate-x-[65px]  duration-700 transition-all w-1/2"
          />
          <Image
            src="/assets/images/homepage/svg/oasis-mountain-circle.svg"
            height={192}
            width={192}
            alt="hero-bubble-6"
            sizes="100vw"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 group-hover:rotate-180 duration-300 lg:w-[192px] w-[100px]"
          />
          <Link
            href="/the-oasis?on=the-oasis"
            className="h-full absolute top-1/2 left-1/2 md:w-[268px] sm:w-[208px] w-[140px] opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-500 scale-50 group-hover:scale-100 -translate-y-1/2 -translate-x-1/2 max-h-[433px]">
            <Image
              width={268}
              height={433}
              className="w-full h-full object-contain object- "
              src="/assets/images/homepage/png/trade.png"
              alt="trade-page"
            />
          </Link>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <Paragraph center className="!text-gray pt-2">
            Conduct trades and transactions in a
            <span className="text-blue font-black !text-base md:!text-lg xl:!text-xl">
              &nbsp;safer&nbsp;
            </span>
            manner using our platform
          </Paragraph>
          <Paragraph center className="!text-gray pt-2">
            Have the
            <span className="text-blue font-black !text-base md:!text-lg xl:!text-xl">
              &nbsp;flexibility&nbsp;
            </span>
            to trade whatever you want, whenever you want, with whoever you want
          </Paragraph>
          <Paragraph center className="!text-gray pt-2">
            Do it all in a simple and
            <span className="text-blue font-extrabold !text-base md:!text-lg xl:!text-xl">
              &nbsp;easy&nbsp;
            </span>
            manner
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Hero;
