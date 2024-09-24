"use client";
import { useState } from "react";
import { FAQ_DATA } from "../../utils/helper";
import Icons from "../common/Icons";
import Paragraph from "../custom-ui/Paragraph";
import PrimaryHeading from "../custom-ui/PrimaryHeading";

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  type faq = {
    title: string;
    description: string;
    list?: any;
  };
  const TOGGLE_ACCORDION = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="container">
        <PrimaryHeading
          data-aos="fade-down"
          data-aos-delay="300"
          maxFontSize={42}
          minFontSize={22}
          reduceBelow={1200}
          center
          className="text-white leading-137 pb-6 sm:pb-8 md:pb-12">
          Any Questions? Look Here
        </PrimaryHeading>

        <div className="max-w-[964px] mx-auto relative z-10">
          {FAQ_DATA.map((obj: faq, index: number) => (
            <div
              key={index}
              className="py-[5px]"
              data-aos="fade-up"
              data-aos-delay={`${index}00`}>
              <div
                onClick={() => TOGGLE_ACCORDION(index)}
                className={`bg-opacity-10 bg-white cursor-pointer py-4 sm:py-6 lg:py-7 px-5 lg:px-7 rounded-2.5 sm:rounded-5 ${
                  expandedIndex === index && "bg-blueGradient bg-opacity-100"
                }`}>
                <div
                  className={`flex items-center justify-between w-full font-extrabold  text-white`}
                  // aria-expanded={expandedIndex === index}
                  aria-controls={`faqs-text-${index}`}>
                  <PrimaryHeading
                    maxFontSize={24}
                    minFontSize={16}
                    center
                    className="text-white ms-0 text-start pe-2 leading-137 font-extrabold">
                    {obj.title}
                  </PrimaryHeading>
                  <span
                    className={`duration-300 ${
                      expandedIndex === index
                        ? "pt-1 mt-0.5 rotate-180"
                        : "rotate-0"
                    }`}>
                    <Icons icon="upArrow" />
                  </span>
                </div>
                <div
                  id={`faqs-text-${index}`}
                  role="region"
                  aria-labelledby={`faqs-title-${index}`}
                  className={`grid text-sm text-slate-600 overflow-hidden common-transition ${
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
                  <div className="overflow-hidden">
                    <Paragraph
                      maxFontSize={14}
                      minFontSize={16}
                      center
                      className="text-white max-w-[743px] ms-0 pe-4 text-start !leading-120 sm:!leading-156 opacity-60 pt-2 sm:pt-3">
                      {obj.description}
                    </Paragraph>
                    {obj.list && (
                      <>
                        <div>
                          |
                          <PrimaryHeading minFontSize={18} maxFontSize={24}>
                            Here’s a breakdown of what makes NFTs special:
                          </PrimaryHeading>
                          <ul>
                            {obj.list.map((items: any, i: number) => (
                              <li key={i}>
                                <Paragraph className="text-white/60 max-w-[743px] ms-0 pe-4 text-start !leading-120 sm:!leading-156 pt-2 sm:pt-3">
                                  {" "}
                                  <span className=" font-bold text-white">
                                    {i + 1}. {items.title}:&nbsp;
                                  </span>
                                  {items.description}
                                </Paragraph>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
