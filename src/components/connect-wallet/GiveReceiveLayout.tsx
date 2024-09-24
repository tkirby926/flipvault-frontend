"use client";
import React from "react";
import Image from "next/image";
import Icons from "../common/Icons";
import Paragraph from "../custom-ui/Paragraph";
import LikeButton from "../common/LikeButton";

type CTA_PROPS = {
  className?: string;
  giveArrow?: string;
  upArrow?: string;
  title: string;
  showData: boolean;
  handleChange: any;
  removeItem?: any;
  disabled?: boolean;
  DATA_LIST: Array<any>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const GiveReceiveLayout: React.FC<CTA_PROPS> = ({
  showData,
  handleChange,
  removeItem,
  title,
  DATA_LIST,
  disabled,
}) => {
  return (
    <div
      className={`border-2 flex flex-col relative border-black rounded-5 ${
        !disabled && "hover:border-blue"
      }  w-full h-full bg-white bg-opacity-10 ${
        showData
          ? "max-w-full"
          : "min-[1366px]:max-w-[493px] custom-2xl:max-w-full group"
      }`}>
      <nav className="flex gap-10 items-center justify-between p-2.5 sm:p-4 border-b border-white border-dashed border-opacity-40">
        <div className="flex items-center gap-3">
          <span>
            <Icons
              icon={`${
                title === "I Receive"
                  ? "vaultGiveReceiveUpload"
                  : "vaultGiveReceiveIcon"
              }`}
            />
          </span>
          <p className="font-extrabold text-white text-base leading-120">
            {title}
          </p>
        </div>
        <span
          className={`cursor-pointer hover:scale-110 common-transition ${
            showData && "-rotate-180"
          }`}
          onClick={handleChange}>
          <Icons icon="vaultGiveReceiveUpDownIcon" />
        </span>
      </nav>
      <div className="bg-cover bg-center bg-vaultGiveBg rounded-b-5 overflow-auto flex h-full">
        <div className="w-full">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  min-[1300px]:grid-cols-4 p-4 sm:px-4 w-full sm:pt-6 sm:pb-[18px] overflow-auto relative ${
              showData
                ? "gap-[9px] max-h-[619px]"
                : "gap-3 min-h-[274px] max-h-[400px] lg:max-h-[370px] xl:max-h-[274px] overflow-visible custom-2xl:grid-cols-5"
            }`}>
            {DATA_LIST.length === 0 ? (
              <Paragraph
                minFontSize={20}
                maxFontSize={28}
                className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                No Content Found
              </Paragraph>
            ) : (
              <>
                {DATA_LIST.map((item: any, index: number) => (
                  <div
                    className={`relative group/item ${
                      disabled && "opacity-50"
                    }`}
                    key={index}>
                    {removeItem && (
                      <div
                        onClick={() => removeItem && removeItem(item)}
                        className="absolute z-10 top-0 end-0 min-[1600px]:end-0 translate-y-[-30%] translate-x-[30%] cursor-pointer group-hover/item:scale-100 common-transition group-hover/item:opacity-100 opacity-0 scale-0">
                        <Icons icon="deleteMinusIcon" />
                      </div>
                    )}

                    <div
                      className={`overflow-hidden hover:border-white border relative flex flex-col h-full ${
                        showData
                          ? "rounded-5 border-black relative !w-full"
                          : "rounded-4 border-transparent min-[1366px]:size-[107px] min-[1600px]:!w-[100%] min-[1600px]:!max-w-[147px] min-[1600px]:!h-[auto]"
                      }`}>
                      <div
                        className={`common-transition absolute z-50 ${
                          showData
                            ? " top-2 left-9 scale-[.8]"
                            : " left-6 top-0 scale-50 !-translate-x-full"
                        }`}>
                        <LikeButton
                          className="-ml-10 sm:-ml-9 mt-3 z-50 scale-90 sm:scale-100"
                          likes="1.2k"
                        />
                      </div>
                      <div
                        className={`${
                          showData
                            ? "rounded-[20px_20px_0_0]"
                            : "rounded-[14.69px] overflow-hidden"
                        } ${item.type && " p-2 bg-white/20"}`}>
                        <Image
                          className={`min-[1366px]:h-[110px] w-full pointer-events-none ${
                            showData
                              ? `${
                                  item.type && "!size-[95px] mx-auto"
                                } h-[110px]`
                              : `"rounded-4" ${item.type && "!size-full "}`
                          } ${item.type ? "object-contain" : "object-cover"}`}
                          src={item.image}
                          alt="give"
                          width={211}
                          sizes="100vw"
                          height={144}
                        />
                      </div>
                      {showData && (
                        <div
                          className={`p-2.5 sm:p-4 bg-gray-black w-full ease-linear rounded-[0_0_20px_20px] flex flex-grow flex-col ${
                            showData ? "opacity-100" : "opacity-0"
                          }`}>
                          <div className="flex items-center gap-x-2">
                            {item.type ? (
                              <div className="flex flex-col gap-2 ">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                  <Image
                                    className="object-contain pointer-events-none rounded-full"
                                    src={item.logo}
                                    alt={`${item.userName}`}
                                    width={24}
                                    height={24}
                                    sizes="100vw"
                                  />
                                  <p className="font-extrabold text-white text-sm md:text-base">
                                    {item.amount ? (
                                      <>
                                        {item.amount}
                                        {item.type
                                          .replace(/\d/g, ".")
                                          .replace(/\./g, "")}
                                      </>
                                    ) : (
                                      item.type
                                    )}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <p className="font-extrabold text-white text-sm md:text-base">
                                {item.heading}
                              </p>
                            )}
                          </div>
                          {item.userName && (
                            <div className="flex items-center mt-1 gap-2">
                              <Image
                                className="object-contain pointer-events-none rounded-full"
                                src={item.userProfile}
                                alt={`${item.userName}`}
                                width={20}
                                height={20}
                                sizes="100vw"
                              />
                              <span className="font-normal text-white opacity-70 text-sm">
                                Owned by {item.userName}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      {showData && (
                        <button className="absolute top-4 right-0 sm:right-4 rounded-full px-3 py-1.5 bg-white text-xs font-normal scale-[.8] sm:scale-100">
                          Category
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {title === "I Receive" && (
        <span
          className={`absolute hidden min-[1366px]:block left-1/2 -translate-x-1/2 top-0 duration-300 -translate-y-[65%]`}>
          <Icons icon="vaultIcon" />
        </span>
      )}
    </div>
  );
};

export default GiveReceiveLayout;
