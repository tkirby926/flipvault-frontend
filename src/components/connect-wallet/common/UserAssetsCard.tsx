import React, { useState } from "react";
import Image from "next/image";
import Paragraph from "../../custom-ui/Paragraph";
import Icons from "../../common/Icons";
import PrimaryHeading from "../../custom-ui/PrimaryHeading";

interface UserAssetsCardProps {
  obj: any;
  pushSelectedArray: (obj: any) => void;
  hideAddIcon?: boolean;
  index: number | null;
  isSelected: boolean;
  disabled?: boolean;
}

const UserAssetsCard: React.FC<UserAssetsCardProps> = ({
  obj,
  pushSelectedArray,
  isSelected,
  disabled,
}) => {
  const handleClick = (item: any) => {
    pushSelectedArray(item);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isInputValue, setIsInputValue] = useState<string | null>(null);

  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        isSelected ? "opacity-50 pointer-events-none" : "opacity-100"
      } z-10 rounded-5 mt-2 rotate_hover relative p-[1.2px] after:rounded-5 before:rounded-5 group/item ${
        isHovered && "overlay_active"
      } `}>
      <div className="flex bg-slat-gray rounded-5 inner group-hover/item:border-transparent border-black border">
        {obj.type ? (
          <div className="rounded-[20px_0px_0px_20px] relative z-[1] min-w-[104px] h-[108px] bg-white flex justify-center items-center">
            <Image
              src={obj.image}
              height={71}
              width={71}
              alt="assets"
              sizes="100vw"
              className="pointer-events-none relative size-16 sm:size-[71px] z-[1] object-contain shadow-sm rounded-full"
            />
          </div>
        ) : (
          <Image
            src={obj.image}
            height={112}
            width={104}
            alt="assets"
            sizes="100vw"
            className="rounded-[20px_0px_0px_20px] pointer-events-none relative z-[1]"
          />
        )}

        <div className="p-2 !pe-3 sm:!p-4 flex justify-between items-center w-full relative">
          <div>
            <Paragraph className="!text-base !font-extrabold capitalize">
              {obj.heading}
            </Paragraph>
            {obj.userName && (
              <Paragraph className="!text-xs !opacity-[0.72] text-white pt-2">
                Owned by {obj.userName}
              </Paragraph>
            )}
          </div>

          {
            <div
              onClick={() => handleClick(obj)}
              onMouseEnter={() => setIsHovered(true)}
              className={`rounded-2 rotate_hover relative p-[0.9578px] z-20 group/button ${
                isSelected
                  ? "before:!content-[unset] after:!content-[unset] !p-0"
                  : "cursor-pointer"
              }`}>
              <div className="inner group-hover/button:bg-slat-gray group-hover/button:border-transparent border border-white border-opacity-30 size-6 sm:size-9 rounded-2 flex justify-center items-center common-transition">
                <Icons icon={isSelected ? "rightTickIcon" : "plusIcon"} />
              </div>
            </div>
          }
          {isHovered && obj.type && (
            <div className="backdrop-blur-sm bg-black/50 z-10 h-full w-full top-0 left-0 absolute pt-2 ps-4 rounded-[0_18px_18px_0]">
              <div>
                <Paragraph className=" sm:!text-base !font-extrabold">
                  {obj.inputHeading}
                </Paragraph>
                <input
                  onChange={(e) => setIsInputValue(e.target.value)}
                  type="number"
                  value={`${isInputValue}`}
                  placeholder={obj.type}
                  className="bg-transparent text-sm sm:text-base border placeholder:text-white/50 border-white/30 rounded-2 h-7 sm:h-9 w-32 sm:w-64 md:w-[400px] xl:w-[500px] min-[1300px]:w-[165px] mt-1 ps-2 pt-1 outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAssetsCard;
