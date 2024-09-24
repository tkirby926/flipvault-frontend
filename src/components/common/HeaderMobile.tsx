"use client";
import { LOG_IN, VIEW_YOUR_VAULT } from "@/src/utils/constants";
import { NAV_LINKS_LIST } from "@/src/utils/helper";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderMobileProps = {
  isNavVisible: boolean;
  setIsNavVisible: (isVisible: boolean) => void;
};

const HeaderMobile = ({ isNavVisible, setIsNavVisible }: HeaderMobileProps) => {
  const CLOSE_MOBILE_MENU = () => {
    setIsNavVisible(false);
  };
  interface HeaderLink {
    url: string;
    text: string;
  }
  const search = useSearchParams();
  const paramValue = search.get("on");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<any>(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("user_info");
    if (userInfo) {
      const user = JSON.parse(userInfo);
      console.log(user.username);
      setIsUserLoggedIn(user);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);
  return (
    <div
      className={`common-transition fixed left-0 top-0 flex h-full w-full flex-col justify-center z-30 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="min-h-screen absolute z-[0] w-screen backdrop_blur"></div>
      <div className="flex flex-col items-center relative z-10 gap-4 sm:gap-8">
        {NAV_LINKS_LIST.map((obj: HeaderLink, index: number) => (
          <Link
            onClick={() => setIsNavVisible(false)}
            href={{
              pathname: obj.url,
              query: `on=${obj.text.toLowerCase().replace(/ /g, "-")}`,
            }}
            className={`${
              paramValue === obj.text.toLowerCase().replace(/ /g, "-")
                ? "text-blue"
                : "text-white"
            } common-transition text-xl leading-160 hover:text-blue md:text-2xl`}
            key={index}>
            {obj.text}
          </Link>
        ))}
        <Link
          onClick={CLOSE_MOBILE_MENU}
          href={VIEW_YOUR_VAULT}
          className="block text-xl md:text-2xl font-normal text-white common-transition relative after:absolute after:h-[1px] after:bg-white after:w-0 after:left-0 after:-bottom-0.5 after:common-transition hover:after:w-full">
          Connect Wallets
        </Link>
        {!isUserLoggedIn && (
          <span onClick={CLOSE_MOBILE_MENU}>
            <Link
              href={LOG_IN}
              className="text-white hover:text-blue common-transition text-xl md:text-2xl">
              Log In
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
