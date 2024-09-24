import React from "react";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";

const FlipPlus = () => {
  return (
    <div className="container relative z-10 custom-2xl:max-w-[1600px] mx-auto">
      <div className="lg:justify-between flex lg:gap-8 gap-2.5 lg:flex-row flex-col lg:pt-8 md:pt-6 pt-4 md:mb-6 mb-4 border-b border-white border-dashed border-opacity-20 pb-8 items-end">
        <div className="max-w-[407px] max-lg:mx-auto">
          <PrimaryHeading
            maxFontSize={24}
            minFontSize={20}
            reduceBelow={992}
            center
            className="!font-extrabold lg:mb-4 mb-2 !leading-130 lg:mx-0 lg:text-start !text-blue">
            Flip+
          </PrimaryHeading>
          <Paragraph
            maxFontSize={16}
            minFontSize={14}
            reduceBelow={992}
            center
            className="!leading-160 text-opacity-80 lg:mx-0 lg:text-start">
            Avoid $1.99 transaction fees with Flip+
          </Paragraph>
          <Paragraph
            maxFontSize={16}
            minFontSize={14}
            reduceBelow={992}
            center
            className="!leading-160 text-opacity-90 max-w-[400px] lg:mx-0 lg:text-start">
            Get your first month free!
          </Paragraph>
        </div>
        <div className="max-w-[400px] lg:mx-0 mx-auto">
          <Paragraph
            maxFontSize={16}
            minFontSize={14}
            reduceBelow={992}
            center
            className="!leading-160 text-opacity-80 max-w-[400px] lg:mx-0 lg:text-start mx-auto">
            Get a gold FlipVault on your profile picture to distinguish yourself
            from the plebs
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default FlipPlus;
