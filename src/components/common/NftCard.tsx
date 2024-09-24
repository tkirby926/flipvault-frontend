"use client";
import Image from "next/image";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import LikeButton from "./LikeButton";

interface IProps {
  data: {
    category: string;
    image: string;
    heading: string;
    currency: string;
    profileImage: string;
    owner: string;
    like?: string;
  };
  index: number;
  hoverIndex?: number | null;
  onclick?: () => void;
}
const NftCard = (props: IProps) => {
  const { data, index, hoverIndex, onclick } = props;
  const like = data.like;
  return (
    <div className="rounded-5 overflow-hidden z-10 w-full border-2 border-transparent hover:border-white common-transition">
      <div className="h-[220px] w-full relative">
        <LikeButton className="bottom-3 end-4" likes={like} />
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          {index === 2 || index === 3 ? <Icons icon="fireEllipse" /> : null}
          <p className="text-xs font-normal text-dark-black leading-120 px-3.5 py-1.5 rounded-25 bg-white">
            {data.category}
          </p>
        </div>
        <Image
          alt="mike-smith"
          src={data.image}
          height={220}
          width={278}
          className="duration-300 w-full h-full group-hover:scale-110"
        />
      </div>
      <div
        className={`bg-baltic-sea grey-card group-hover:bg-steel-dark-gray h-[100px] group-hover:h-full grid duration-300 relative z-10 p-4 ${
          hoverIndex === index && "bg-steel-dark-gray"
        }`}
      >
        <p className="mb-3 font-extrabold text-white text-xl leading-120">
          {data.heading} {data.currency}
        </p>
        <div className="flex items-center gap-2">
          <Image
            alt="john doe"
            src={data.profileImage}
            height={24}
            width={24}
          />
          <p className="text-french-gray text-sm font-normal leading-140">
            Owned by {data.owner}
          </p>
        </div>
        <div
          className={`text-center whitespace-nowrap common-transition ${
            hoverIndex === index ? "flex translate-y-0" : "translate-y-full"
          }`}
        >
          <Cta
            onClick={onclick}
            className="font-extrabold w-full mt-5 sm:text-base text-sm h-[46px] whitespace-nowrap inline-block px-2 py-2.5 sm:pb-2 bg-blueGradient border-0"
            disableDefaultSpacing
          >
            Propose Trade
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
