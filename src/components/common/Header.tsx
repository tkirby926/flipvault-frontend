"use client";
import {
  CONNECT_WALLET,
  FLIP_PLUS,
  HOME,
  LOG_IN,
  VIEW_YOUR_VAULT,
} from "@/src/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS_LIST, PROFILE } from "../../utils/helper";
import Icons from "../common/Icons";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<any>(false);
  const pathname = usePathname();
  const search = useSearchParams();
  const paramValue = search.get("on");

  const NAV_TOGGLE = () => {
    setIsNavVisible(!isNavVisible);
    setProfile(false);
  };

  useEffect(() => {
    function HANDLE_RESIZE() {
      if (window.innerWidth < 1200) {
        if (isNavVisible) {
          document.documentElement.classList.add("overflow-hidden");
        } else {
          document.documentElement.classList.remove("overflow-hidden");
        }
      }
    }
    HANDLE_RESIZE();
    window.addEventListener("resize", HANDLE_RESIZE);
    return () => window.removeEventListener("resize", HANDLE_RESIZE);
  }, [isNavVisible]);

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

  const RUN_NOTHING = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const HANDLE_LOGOUT = (e: React.FormEvent) => {
    e.preventDefault()
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include' as RequestCredentials,
    }
    fetch('http://localhost:5000/api/v1/auth/logout', requestOptions)
    .then(response => response.json())
    .then((data) => {
    });
    localStorage.removeItem("user_info");
    location.reload()
  }

  interface HeaderLink {
    url: string;
    text: string;
  }
  console.log(paramValue);
  return (
    <>
      {profile && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setProfile(false)}></div>
      )}
      <div
        className={`relative z-50 ${isUserLoggedIn && "border-b border-white border-opacity-[8%]"
          }`}>
        {pathname === HOME && (
          <Image
            src="/assets/images/homepage/png/header-top-shade.png"
            height={500}
            width={480}
            alt="header-top-shade"
            sizes="100vw"
            className="absolute sm:left-[10%] top-0 pointer-events-none"
          />
        )}
        <div
          className={`container mx-auto ${isUserLoggedIn
              ? "mx-auto custom-2xl:max-w-[1600px] py-3 sm:py-6"
              : "pt-6 sm:pt-10"
            }`}>
          <nav className="flex items-center justify-between relative z-50">
            <Link href={HOME} rel="logo">
              <Image
                src="/assets/images/homepage/png/nav-logo.png"
                height={30}
                width={114}
                alt="nav-logo"
                sizes="100vw"
                className="pointer-events-none scale-75 sm:scale-100"
              />
            </Link>
            <div className="hidden items-center lg:flex gap-8 ml-20">
              {NAV_LINKS_LIST.map((obj: HeaderLink, index: number) => (
                <Link
                  href={{
                    pathname: obj.url,
                    query: `on=${obj.text
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace("+", "-plus")}`,
                  }}
                  className={`text-lg text-white relative after:absolute after:h-[1px] after:bg-white after:w-0 after:left-0 after:-bottom-0.5 after:common-transition ${paramValue?.includes(
                    obj.text
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace("+", "-plus")
                  )
                      ? "after:w-full"
                      : "hover:after:w-full"
                    }`}
                  key={index}
                  onClick={() => setProfile(false)}>
                  {obj.text}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 relative z-[100]">
              {isUserLoggedIn ? (
                <div className=" flex items-center gap-6 scale-75 sm:scale-100">
                  <Link
                    href={{
                      pathname: VIEW_YOUR_VAULT,
                      query: `on=connect-wallets`,
                    }}
                    className={`hidden lg:block text-lg font-normal text-white common-transition relative after:absolute after:h-[1px] after:bg-white after:w-0 after:left-0 after:-bottom-0.5 after:common-transition  ${paramValue?.includes("connect-wallets")
                        ? "after:!w-full"
                        : "hover:after:w-full"
                      }`}>
                    Connect Wallets
                  </Link>
                  {PROFILE.map((obj, index) => {
                    return (
                      <div className="relative" key={index}>
                        <div
                          onClick={() =>
                            setProfile((prevProfile) => !prevProfile)
                          }
                          className={`gap-4 rounded-t-[28px] flex items-center cursor-pointer border border-white border-opacity-10 bg-white bg-opacity-5 p-[6px] common-transition ${profile ? "rounded-b-1" : "rounded-b-[28px]"
                            }`}>
                          <Image
                            height={44}
                            sizes="100vw"
                            width={44}
                            src={obj.img}
                            alt="profile"
                          />
                          <div className="hidden xl:inline">
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[110px] text-white font-extrabold text-base">
                              {isUserLoggedIn.username
                                ? isUserLoggedIn.username
                                : obj.name}
                            </p>
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[110px] text-white text-sm">
                              {isUserLoggedIn.username}
                            </p>
                          </div>
                          <span className="hidden xl:inline">
                            <Icons icon="profileIcon" />
                          </span>
                        </div>
                        <div
                          className={`bg-white bg-opacity-5 backdrop-blur-3xl w-full rounded-b-7.5 min-w-[180px] border overflow-hidden end-0 border-white border-opacity-10 absolute mt-2 ${profile === false && "hidden"
                            }`}>
                          {obj.options.map((value, i) => {
                            return (
                              <Link
                                key={i}
                                onClick={value.title == "Log Out" ? HANDLE_LOGOUT : RUN_NOTHING}
                                className={`flex items-center p-3 gap-3 hover:bg-white hover:bg-opacity-20 capitalize ${value.title.toLocaleLowerCase() === "log out"
                                    ? "text-hot-pink"
                                    : "text-white"
                                  }`}
                                href={value.url}>
                                <Icons icon={value.icon} />
                                <span>{value.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <Link
                    href={LOG_IN}
                    className="hidden lg:block text-lg font-normal text-white common-transition relative after:absolute after:h-[1px] after:bg-white after:w-0 after:left-0 after:-bottom-0.5 after:common-transition hover:after:w-full">
                    Log In
                  </Link>{" "}
                  <Link
                    href={{
                      pathname: VIEW_YOUR_VAULT,
                      query: `on=connect-wallets`,
                    }}
                    className={`hidden lg:block text-lg font-normal text-white common-transition relative after:absolute after:h-[1px] after:bg-white after:w-0 after:left-0 after:-bottom-0.5 after:common-transition  ${paramValue?.includes("connect-wallets")
                        ? "after:!w-full"
                        : "hover:after:w-full"
                      }`}>
                    Connect Wallets
                  </Link>
                </div>
              )}
              <div
                onClick={NAV_TOGGLE}
                className="relative cursor-pointer size-8 lg:hidden">
                <Image
                  className={`common-transition sm:min-h-10 min-h-8 min-w-8 sm:min-w-10 absolute left-0 top-0 h-8 w-8 px-[6px] ${isNavVisible ? "opacity-0" : "opacity-100"
                    }`}
                  height={32}
                  width={32}
                  src="/assets/images/homepage/svg/open-toggle.svg"
                  alt="nav-toggle-open"
                  priority
                />
                <Image
                  className={`common-transition absolute left-0 top-0 h-full w-full px-[6px] z-[1] ${isNavVisible ? "opacity-100" : "opacity-0"
                    }`}
                  height={26}
                  width={26}
                  src="/assets/images/homepage/svg/cross-icon.svg"
                  alt="nav-toggle-close"
                  priority
                />
              </div>
            </div>
          </nav>
        </div>
        <HeaderMobile
          isNavVisible={isNavVisible}
          setIsNavVisible={setIsNavVisible}
        />
      </div>
    </>
  );
};

export default Header;
