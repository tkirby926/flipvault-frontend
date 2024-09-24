import Image from "next/image";
import React from "react";
import LikeButton from "../common/LikeButton";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "../common/Icons";

// Define the type for the data prop
interface CategoryData {
  image: string;
  like: string;
  heading: string;
  description: string;
}

// Define the type for the props
interface CategoryCardProps {
  data: CategoryData[];
  showCards: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data, showCards }) => {
  return (
    <div className="flex flex-wrap mt-20 gap-y-4">
      {data.slice(0, showCards).map((obj, index) => (
        <div
          key={index}
          className="flex items-center justify-center xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full sm:max-w-full px-2"
        >
          <div className="relative overflow-hidden min-h-[278px] rounded-5 duration-300 group min-w-[278px] w-full">
            <div className="flex items-center justify-between">
              <Image
                className="rounded-5 group-hover:scale-125 duration-300 object-cover h-[312px] min-w-[278px] w-full"
                width={276}
                height={278}
                src={obj.image}
                alt="category"
              />
              <LikeButton className="end-4 top-4 h-9" likes={obj.like} />
            </div>
            <div className="flex flex-col p-4 absolute bottom-0">
              <h2 className="font-extrabold text-white text-xl leading-140 mb-2">
                {obj.heading}
              </h2>
              <Paragraph className="text-sm !leading-140 opacity-60">
                {obj.description}
              </Paragraph>
            </div>
            <div className="flex items-center py-1.5 px-3 rounded-25 bg-white m-4 absolute top-0">
              <Icons icon="popular" />
              <p className="ms-2 bg-orangeGradient popular_gradient">Popular</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
