"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import { usePathname } from "next/navigation";
import {
  CATEGORY_DETAIL,
  CURRENCY_DETAIL,
  RECENTLY_DETAIL,
  TOP_TRADER_DETAIL,
} from "@/src/utils/constants";
import FriendPopUp from "../trade/FriendPopUp";
import CurrencyDetail from "./CurrencyDetail";
import CurrencyCard from "./CurrencyCard";
import {
  CATEGORY_DATA,
  CONTACT_DATA,
  NFT_CARDS_LIST,
} from "@/src/utils/helper";
import RecentlyCard from "./RecentlyCard";
import LearnMorePagination from "./LearnMorePagination";
import CategoryCard from "./CategoryCard";
const Detail = () => {
  const path = usePathname();

  // Use the defined type for the state
  const [data, setData] = useState<any[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<string>("XRP");
  const [showCards, setShowCards] = useState(12);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // TOTAL PAGES
  const totalPages = 99;

  useEffect(() => {
    const savedActiveButton = localStorage.getItem("activeButton");
    const savedCurrency = localStorage.getItem("currency");

    if (savedActiveButton && savedCurrency) {
      setActiveButton(savedActiveButton);
    } else {
      setActiveButton("XRP");
    }
  }, []);

  useEffect(() => {
    // Set the data state based on the path
    if (path === CURRENCY_DETAIL) {
      setData(NFT_CARDS_LIST);
    } else if (path === RECENTLY_DETAIL) {
      setData(NFT_CARDS_LIST);
    } else if (path === CATEGORY_DETAIL) {
      setData(CATEGORY_DATA);
    } else if (path === TOP_TRADER_DETAIL) {
      setData(CONTACT_DATA);
    } else {
      setData([]);
    }
  }, [path]);

  const HANDLE_BUTTON = (buttonName: string) => {
    setActiveButton(buttonName);
    localStorage.setItem("activeButton", buttonName);
    localStorage.setItem("currency", buttonName);
  };

  // LEARN MORE BUTTON HANDLER
  const LEARN_MORE_HANDLER = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCards(showCards + 12);
    }, 1500);
  };

  // ONCLICK PAGE CHANGE
  const PAGE_CHANGE_HANDLER = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  // paragrap text
  const getParagraphText = (path: string) => {
    switch (path) {
      case RECENTLY_DETAIL:
      case CATEGORY_DETAIL:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id metus ut ante gravida accumsan.";
      case TOP_TRADER_DETAIL:
        return "There are many variations of passages of Lorem Ipsum availablebut";
      default:
        return "Page Not Found";
    }
  };
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  useEffect(() => {
    if (popUpVisible === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popUpVisible]);
  return (
    <>
      <Image
        className="w-full absolute top-0 z-0 pointer-events-none"
        src="/assets/images/trade/png/header-ellipse.png"
        width={1920}
        height={272}
        alt="vector"
      />
      <div className="py-16 sm:mt-12">
        <Image
          className="absolute sm:block hidden sm:start-[-67%] pointer-events-none md:start-[-55%] lg:start-[-43%] min-h-[700px] xl:-start-[32%] custom-2xl:start-[-25%] top-[-50%]"
          width={845}
          height={690}
          src="/assets/images/trade/webp/blur-right-ellipse.webp"
          alt="ellipse"
        />
        <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px]">
          <div className="flex flex-col justify-center items-center">
            <PrimaryHeading
              maxFontSize={56}
              minFontSize={28}
              center
              className="text-white max-w-[800px] leading-110 capitalize relative z-10">
              {path === CURRENCY_DETAIL
                ? "Items by Currency"
                : path === RECENTLY_DETAIL
                  ? "Recently Added"
                  : path === CATEGORY_DETAIL
                    ? "Trade with peers"
                    : path === TOP_TRADER_DETAIL
                      ? "Top Traders"
                      : "Page Not Found"}
            </PrimaryHeading>
            {path === CURRENCY_DETAIL && (
              <CurrencyDetail
                HANDLE_BUTTON={HANDLE_BUTTON}
                activeButton={activeButton}
              />
            )}
            {(path === RECENTLY_DETAIL ||
              path === CATEGORY_DETAIL ||
              path === TOP_TRADER_DETAIL) && (
                <Paragraph
                  maxFontSize={14}
                  minFontSize={16}
                  center
                  className="text-white max-w-[400px] sm:max-w-[489px] leading-160 opacity-80 pt-3">
                  {getParagraphText(path)}
                </Paragraph>
              )}
            {(path === CURRENCY_DETAIL || path === RECENTLY_DETAIL) && (
              <RecentlyCard
                data={data}
                hoverIndex={hoverIndex}
                setHoverIndex={setHoverIndex}
                showCards={showCards}
              />
            )}
            {path === CATEGORY_DETAIL && (
              <CategoryCard data={data} showCards={showCards} />
            )}
            {path === TOP_TRADER_DETAIL && (
              <CurrencyCard
                data={data}
                setPopUpVisible={setPopUpVisible}
                showCards={showCards}
              />
            )}
          </div>
          <LearnMorePagination
            showCards={showCards}
            LEARN_MORE_HANDLER={LEARN_MORE_HANDLER}
            PAGE_CHANGE_HANDLER={PAGE_CHANGE_HANDLER}
            currentPage={currentPage}
            data={data}
            loading={loading}
            totalPages={totalPages}
          />
        </div>
      </div>
      <FriendPopUp
        popUpVisible={popUpVisible}
        setPopUpVisible={setPopUpVisible}
      />
    </>
  );
};

export default Detail;
