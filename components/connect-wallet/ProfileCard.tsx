"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Cta from "../custom-ui/Cta";
import Icons from "../common/Icons";
import UserAssetsCard from "./common/UserAssetsCard";
import { GET_FILE_LOGO } from "@/utils/helper";

type AssetData = {
  image: string;
  userName?: string;
  userProfile?: string;
  type?: string;
  logo: string;
  itemName?: string;
};

interface ProfileCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  badge: string;
  username: string;
  ctaText: string;
  icon: string;
  assetsText: string;
  onCtaClick: () => void;
  onIconClick?: () => void; // Make this optional
  MY_ASSETS_DATA: AssetData[];
  pushSelectedArray: any;
  selectedItems: any;
  profileCardClassName: string;
  disabled?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  pushSelectedArray,
  imageAlt,
  name,
  badge,
  username,
  ctaText,
  icon,
  profileCardClassName,
  selectedItems,
  assetsText,
  onCtaClick,
  onIconClick, // Optional
  MY_ASSETS_DATA,
  disabled,
}) => {
  const [file, setFile] = useState<File | null | any>(null);
  const [isFileSetToArray, setIsFileSetToArray] = useState<boolean>(false);
  console.log(file);
  useEffect(() => {
    if (file) {
      setIsFileSetToArray(false);
    }
    if (isFileSetToArray) {
      setTimeout(() => {
        setIsFileSetToArray(false);
      }, 5000);
    }
  }, [file, isFileSetToArray]);

  return (
    <div
      className={`text-white mx-auto w-full lg:w-[900px] min-[1366px]:w-[400px] custom-2xl:w-6/12 custom-2xl:mx-0 border-2 border-black overflow-hidden rounded-5 after:rounded-5 before:rounded-5  common-transition group relative pt-[1.8px] pb-[1.8px] pl-[1.8px] pr-[1.6px] ${profileCardClassName} ${
        !disabled && "rotate_hover"
      }`}>
      <div
        className={`bg-white bg-opacity-10 border-2 group-hover:border-transparent border-black rounded-5 py-4 pl-4 overflow-hidden inner ${
          !disabled && "group-hover:bg-opacity-100"
        } group-hover:bg-mid-black`}>
        <div>
          <div className="flex gap-4 border-b border-white border-dashed border-opacity-40 pb-6 pr-4">
            <div className="relative flex">
              {disabled && (
                <Image
                  src="/assets/images/homepage/png/flip-plus-golden-icon.png"
                  alt="golden icon"
                  width={15}
                  height={15}
                  sizes="100vw"
                  className="size-5 sm:size-7 absolute right-1.5 bottom-1.5 sm:bottom-2 sm:right-2"
                />
              )}
              <Image
                src={imageSrc}
                height={140}
                width={140}
                alt={imageAlt}
                sizes="100vw"
                className={`rounded-[16px]  min-w-[90px] min-h-[90px] sm:min-w-[140px]  sm:min-h-[140px] pointer-events-none `}
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-2">
                    <PrimaryHeading className="!text-xl sm:!text-2xl !font-normal !mr-0">
                      {name}
                    </PrimaryHeading>
                    {badge && (
                      <div>
                        <span className="text-xs font-extrabold text-dark-black bg-white px-2 py-1.5 rounded-25">
                          {badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <Paragraph className="!text-sm !opacity-80 flex items-center gap-x-2">
                    {username}
                  </Paragraph>
                </div>
                <div
                  className={`pr-1.5 inline-block cursor-pointer h-fit`}
                  onClick={onIconClick}>
                  <Icons icon={icon} />
                </div>
              </div>
              <div className="w-full flex">
                <Cta
                  transparent
                  className={`!text-xs sm:!text-sm font-extrabold sm:max-w-[180px]
               sm:!w-full !py-2 sm:!py-3 !px-[40px] sm:!px-[50px] flex items-center justify-center gap-2.5 common-transition w-full ${
                 disabled && " pointer-events-none select-none opacity-90"
               } ${
                    ctaText === "Ready" &&
                    "!border-transparent !shadow-blue before:!translate-y-0"
                  }`}
                  onClick={onCtaClick}>
                  {ctaText === "Ready" && (
                    <Icons
                      icon="rightTickIcon"
                      className="inline-block common-transition"
                    />
                  )}
                  <span className="common-transition">{ctaText}</span>
                </Cta>
              </div>
            </div>
          </div>
          <PrimaryHeading className="pt-6 !text-base">
            {assetsText}
          </PrimaryHeading>
        </div>
        <div className="mt-2 max-h-[423px] overflow-auto pr-4">
          {!disabled && (
            <div
              className={`z-0 rounded-5  relative p-[1.2px] after:rounded-5 before:rounded-5  mt-2 ${
                !isFileSetToArray && "group/item rotate_hover"
              }`}>
              <div
                className={`flex bg-slat-gray rounded-5  border-black border relative ${
                  isFileSetToArray
                    ? "opacity-50 pointer-events-none"
                    : "inner group-hover/item:border-transparent "
                }`}>
                <label htmlFor="file" className=" cursor-pointer">
                  <div className="rounded-[20px_0px_0px_20px] relative z-[1] min-w-[104px] h-[108px] bg-white flex justify-center items-center">
                    <Image
                      src={
                        file
                          ? GET_FILE_LOGO(file[0].name)
                          : "/assets/images/view-your-vault/png/powerpoint.png"
                      }
                      height={79}
                      width={79}
                      alt="assets"
                      sizes="100vw"
                      className="pointer-events-none relative z-[1] sm:size-[79px] size-16 object-contain"
                    />
                  </div>
                </label>

                <div className="p-2 !pe-3 sm:!p-4 flex justify-between items-center w-full relative">
                  <label htmlFor="file" className=" cursor-pointer">
                    <Paragraph className="!text-base !font-extrabold overflow-hidden text-ellipsis whitespace-nowrap max-w-[170px]">
                      {file ? file[0].name : <>File_name.ppt</>}
                    </Paragraph>
                    <Paragraph className="!text-xs !opacity-[0.72] text-white pt-2">
                      Owned by John Doe
                    </Paragraph>
                  </label>
                  <div
                    onClick={() => {
                      pushSelectedArray({
                        image: file
                          ? GET_FILE_LOGO(file[0].name)
                          : "/assets/images/view-your-vault/png/powerpoint.png",
                        userName: "Johan Doe",
                        type: "dummy file",
                        userProfile:
                          "/assets/images/view-your-vault/webp/john-profile.webp",
                        logo: file
                          ? GET_FILE_LOGO(file[0].name)
                          : "/assets/images/view-your-vault/png/powerpoint.png",
                        heading: file ? file[0].name : <>File_name.ppt</>,
                      });
                      setFile(null);
                      setIsFileSetToArray(true);
                    }}
                    className={` cursor-pointer rounded-2 rotate_hover relative p-[0.9578px] z-20 group/button 
                 `}>
                    <div className="inner group-hover/button:bg-slat-gray group-hover/button:border-transparent border border-white border-opacity-30 size-6 sm:size-9 rounded-2 flex justify-center items-center common-transition">
                      <Icons
                        icon={isFileSetToArray ? "rightTickIcon" : "plusIcon"}
                      />
                    </div>
                  </div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    disabled
                    hidden
                    accept=".ppt,.pptx,.zip,.rar,.xls,.xlsx,.pdf,.docx"
                    onChange={(e) => {
                      setFile(e.target.files);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {MY_ASSETS_DATA.map((obj, index) => (
            <div key={index}>
              <UserAssetsCard
                obj={obj}
                disabled={disabled}
                pushSelectedArray={pushSelectedArray}
                index={index}
                isSelected={selectedItems?.includes(obj)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
