import { useState } from "react";
import Icons from "./Icons";

interface LikeButtonProps {
  className?: string;
  likes?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ className, likes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`bg-black bg-opacity-20 rounded-full w-[70px] h-8 absolute z-10 flex items-center justify-center gap-[6px] hover:bg-opacity-50 common-transition cursor-pointer ${className}`}
      onClick={handleLikeClick}
    >
      <Icons icon="heartIcon" fill={isLiked ? "red" : "white"} />
      <p className="font-normal text-white text-sm leading-100 uppercase">
        {likes}
      </p>
    </div>
  );
};

export default LikeButton;
