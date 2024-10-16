import React, { useState } from "react";
import { KATE_ASSETS_DATA } from "@/utils/helper";
import ProfileCard from "./ProfileCard";

const UserProfileKate = ({
  profileCardClassName,
  pushSelectedArray,
  selectedItems,
}: any) => {
  const [ctaText, setCtaText] = useState("I’m Ready");
  const [icon, setIcon] = useState("userProfileIcon");

  const handleCtaClick = () => {
    setCtaText((prevText) => (prevText !== "Ready" ? "Ready" : "I’m Ready"));
  };

  const handleIconClick = () => {
    setIcon((prevIcon) =>
      prevIcon === "userProfileIcon" ? "userProfileIconBlue" : "userProfileIcon"
    );
  };

  const userProfileData = {
    imageSrc: "/assets/images/view-your-vault/webp/kate-brown-profile.webp",
    imageAlt: "kate-brown-profile",
    name: "Kate Brown",
    badge: "",
    username: "@kate_ate",
    ctaText: ctaText,
    icon: icon,
    assetsText: "Kate’s Assets",
    onCtaClick: handleCtaClick,
    onIconClick: handleIconClick,
    MY_ASSETS_DATA: KATE_ASSETS_DATA,
    hideAddIcon: true,
    pushSelectedArray: pushSelectedArray,
    selectedItems: selectedItems,
  };

  return (
    <ProfileCard
      disabled
      profileCardClassName={profileCardClassName}
      {...userProfileData}
    />
  );
};

export default UserProfileKate;
