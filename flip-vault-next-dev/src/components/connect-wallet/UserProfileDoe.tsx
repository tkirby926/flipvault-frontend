import { VAULT_GIVE_DATA_LIST } from "@/src/utils/helper";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

const UserProfileDoe = ({
  profileCardClassName,
  pushSelectedArray,
  selectedItems,
}: any) => {
  const [ctaText, setCtaText] = useState("I’m Ready");
  const [icon] = useState("settingDots");

  const handleCtaClick = () => {
    setCtaText((prevText) =>
      prevText === "I’m Ready" ? "Ready" : "I’m Ready"
    );
  };

  const userProfileData = {
    imageSrc: "/assets/images/view-your-vault/webp/john-profile.webp",
    imageAlt: "john-profile",
    name: "John Doe",
    badge: "You",
    username: "@sweet_john_2024",
    ctaText: ctaText,
    icon: icon,
    assetsText: "My Assets",
    onCtaClick: handleCtaClick,
    MY_ASSETS_DATA: VAULT_GIVE_DATA_LIST,
    pushSelectedArray: pushSelectedArray,
    selectedItems: selectedItems,
    profileCardClassName: profileCardClassName,
  };

  return <ProfileCard {...userProfileData} />;
};

export default UserProfileDoe;
