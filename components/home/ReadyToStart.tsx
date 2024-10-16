import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Image from "next/image";
import Cta from "../custom-ui/Cta";
import { SIGN_UP } from "@/utils/constants";

const ReadyToStart = () => {
  return (
    <div className="container py-14 sm:py-20 lg:py-[140px]">
      <div className="bg-steel-gray relative h-[300px] px-3 lg:h-[377px] overflow-hidden rounded-3.5 sm:rounded-7.5 flex flex-col justify-center">
        <Image
          width={745}
          height={400}
          className="absolute max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] start-0 top-0 pointer-events-none"
          src="/assets/images/homepage/webp/ready-top-left.webp"
          alt="ellipse-left"
        />
        <Image
          width={745}
          height={497}
          className="absolute max-w-[200px] sm:max-w-[300px] end-0 bottom-0 lg:max-w-[450px] pointer-events-none"
          src="/assets/images/homepage/webp/ready-bottom-right-circle.webp"
          alt="ellipse-right"
        />
        <Image
          height={200}
          width={200}
          className="absolute hidden w-[130px] h-[130px] lg:w-[200px] lg:h-[200px] rounded-full sm:block pointer-events-none animate-boll-1"
          src="/assets/images/homepage/webp/ready-circle.webp"
          alt="ellipse-one"
        />
        <Image
          height={65}
          width={65}
          className="absolute hidden w-[55px] h-[55px] lg:w-[65px] lg:h-[65px] rounded-full sm:block pointer-events-none animate-boll-2"
          src="/assets/images/homepage/webp/ready-circle.webp"
          alt="ellipse-two"
        />
        <Image
          height={150}
          width={150}
          className="absolute hidden w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full sm:block pointer-events-none animate-boll-3"
          src="/assets/images/homepage/webp/ready-circle.webp"
          alt="ellipse-three"
        />
        <Image
          height={50}
          width={50}
          className="absolute hidden w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full sm:block pointer-events-none animate-boll-4"
          src="/assets/images/homepage/webp/ready-circle.webp"
          alt="ellipse-four"
        />
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}
          center
          className="text-white max-w-[800px] leading-137">
          Ready to start?
        </PrimaryHeading>
        <Paragraph
          data-aos="fade-up"
          data-aos-delay="300"
          maxFontSize={18}
          minFontSize={14}
          center
          className="text-white sm:w-8/12 md:w-full md:max-w-[682px] leading-156 opacity-80 pt-2">
          Got questions or feedback about our services? Interested in joining
          our team? Reach out to us anytime! Let’s chat!
        </Paragraph>
        <div
          className="text-center pt-3 lg:pt-7 mt-0.5"
          data-aos="zoom-in"
          data-aos-delay="300">
          <Cta
            url={SIGN_UP}
            className="font-extrabold inline-block py-2.5 sm:py-[13px] px-5 sm:px-[43px] ms-4 bg-blueGradient border-0"
            disableDefaultSpacing
            target="_self">
            Join Now
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
