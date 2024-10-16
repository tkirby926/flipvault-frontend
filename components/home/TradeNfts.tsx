import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Image from "next/image";

const TradeNfts = () => {
  return (
    <div className="trade_parent">
      <div className="xl:pb-10 relative container md:flex justify-between">
        <div data-aos="fade-right" data-aos-delay="300">
          <PrimaryHeading
            maxFontSize={42}
            minFontSize={22}
            reduceBelow={1200}
            className="font-extrabold !leading-140 max-w-[485px] trade_text">
            Trade NFTs Across Different Networks
          </PrimaryHeading>
          <Paragraph className="opacity-60 leading-160 max-w-[700px] lg:max-w-[570px] pt-2 sm:pt-5 trade_text">
            Deposit your NFTs, regardless of what chain they are on (i.e.
            Ethereum, Solana, Polygon, etc.), into our highly secure and safe
            platform. Propose, accept, or decline trades. Then withdraw your
            assets to their respective wallets whenever you please!
          </Paragraph>
          <Paragraph className="opacity-60 leading-160 sm:max-w-[570px] pt-2 sm:pt-5 trade_text">
            We support most wallets!
          </Paragraph>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <Image
            src="/assets/images/homepage/png/nfts-image.png"
            height={650}
            width={650}
            alt="nfts-icon"
            sizes="100vw"
            className="mt-[-35px] sm:mt-[-55px] lg:mt-[-100px] xl:mt-[-150px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeNfts;
