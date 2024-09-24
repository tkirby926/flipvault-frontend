import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Image from "next/image";
import { TRANSACTIONS_WORK_LIST } from "../../utils/helper";

const TransactionsWork = () => {
  type transaction = {
    title: string;
    status: string;
    value: string;
  };

  return (
    <div className="lg:pt-32 lg:mt-3 pt-14 sm:pt-20 relative overflow-x-clip">
      <div className="container relative z-10">
        <div className="flex items-center flex-wrap gap-y-8 sm:gap-y-10">
          <div
            className="lg:w-1/2 w-full xl:pl-2"
            data-aos="fade-right"
            data-aos-delay="300">
            <PrimaryHeading
              maxFontSize={42}
              minFontSize={22}
              reduceBelow={1200}
              center
              className="lg:text-start">
              How transactions work
            </PrimaryHeading>
            <Paragraph
              maxFontSize={16}
              minFontSize={15}
              center
              className="lg:text-start lg:mx-0 text-white text-opacity-80 max-w-[650px] lg:max-w-[470px] custom-2xl:max-w-[650px] sm:mt-3 mt-2 leading-163">
              FlipVault utilizes Solana’s smart contracts to remove centralized
              authorities and to ensure that both parties meet their end of the
              deal
            </Paragraph>
            <Paragraph
              maxFontSize={16}
              minFontSize={15}
              center
              className="lg:text-start lg:mx-0 text-white text-opacity-80 max-w-[650px] lg:max-w-[470px] custom-2xl:max-w-[650px] sm:mt-3 mt-2 leading-163">
              When live trading, both parties must ready up for a trade to go
              through
            </Paragraph>
          </div>
          <div
            className="lg:w-1/2 w-[90%] mx-auto flex lg:justify-between justify-center lg:gap-0 sm:gap-6 gap-2 items-center custom-2xl:gap-6 custom-2xl:justify-center"
            data-aos="fade-left"
            data-aos-delay="300">
            <div className="max-w-[160px] w-full xl:min-w-[216px]">
              <Image
                src="/assets/images/homepage/webp/blue-man.webp"
                alt="dummy"
                width={216}
                height={287}
                className="w-full scale-x-[-1] pointer-events-none"
              />
            </div>
            <Image
              src="/assets/images/homepage/webp/blue-arrow.webp"
              alt="blue-arrow"
              width={141}
              height={145}
              className="max-w-[90px] sm:max-w-[100px] w-full xl:min-w-[141px] pointer-events-none"
            />
            <div className="max-w-[160px] w-full xl:min-w-[216px]">
              <Image
                src="/assets/images/homepage/webp/blue-man.webp"
                alt="dummy"
                width={216}
                height={287}
                className="w-full lg:-translate-x-1 xl:translate-x-0 pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:pt-32 lg:mt-3 pt-14 sm:pt-20 -mx-2.5 flex-wrap justify-center gap-y-5">
          {TRANSACTIONS_WORK_LIST.map((data: transaction, index: number) => (
            <div
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              key={index}
              className="lg:w-2/6 md:w-[45%] sm:w-5/6 w-full px-2.5">
              <div className="xl:py-8 xl:px-7 sm:p-6 py-4 px-5 bg-off-gray bg-opacity-10 xl:rounded-7.5 sm:rounded-5 rounded-2.5 hover:shadow-off-white common-transition text-center">
                <div className="flex justify-center lg:justify-start gap-2 items-center w-full border-b border-dashed border-white border-opacity-20 sm:pb-2 pb-1">
                  {index === 2 && (
                    <Image
                      src="/assets/images/homepage/webp/eth.webp"
                      alt="eth"
                      sizes="100vw"
                      width={50}
                      height={45}
                      className="custom-xl:w-20 sm:w-14 w-10 custom-xl:h-20 sm:h-14 h-10 pointer-events-none"
                    />
                  )}
                  <PrimaryHeading
                    className="!text-transparent bg-clip-text bg-blueGradient text-nowrap !font-extrabold !mr-0 lg:!mr-auto"
                    reduceBelow={1300}
                    maxFontSize={64}
                    minFontSize={30}>
                    {data.value}
                    {index === 0 && (
                      <Paragraph
                        reduceBelow={1300}
                        maxFontSize={24}
                        minFontSize={16}
                        className="text-white inline-block !font-bold !text-center lg:!text-start">
                        &nbsp;million
                      </Paragraph>
                    )}
                  </PrimaryHeading>
                </div>
                <Paragraph
                  className="text-white sm:mt-2 mt-1.5 !leading-140 !font-bold !text-center lg:!text-start"
                  reduceBelow={640}
                  maxFontSize={24}
                  minFontSize={18}>
                  {data.title}
                </Paragraph>
                <Paragraph
                  className="text-white sm:mt-2 mt-1 text-opacity-60 !leading-160 !text-center lg:!text-start"
                  reduceBelow={640}
                  maxFontSize={16}
                  minFontSize={15}>
                  {data.status}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/assets/images/homepage/png/transaction-blue-ball.png"
        alt="blue-ball"
        width={137}
        height={213}
        className="absolute right-0 bottom-14 xl:opacity-100 opacity-45 z-0 pointer-events-none lg:block hidden"
      />
      <div className="w-[809px] h-[809px] bg-off-green absolute bottom-[-30%] right-[-40%] opacity-10 blur-[70px] z-0 pointer-events-none"></div>
    </div>
  );
};

export default TransactionsWork;
