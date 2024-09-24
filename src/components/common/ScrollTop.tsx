"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const HANDLE_SCROLL = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", HANDLE_SCROLL);
    return () => {
      window.removeEventListener("scroll", HANDLE_SCROLL);
    };
  }, []);
  useEffect(() => {
    if (scrollValue > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, [scrollValue]);
  const SCROLL_TOP_HANDLER = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`end-4 bottom-4 lg:bottom-10 md:bottom-9 custom-2xl:bottom-4 border-0 fixed z-[200] common-transition ${
        showScrollTop ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
      }`}
    >
      <div
        onClick={SCROLL_TOP_HANDLER}
        className="h-9 w-9 sm:h-10 border border-white bg-blueGradient sm:w-10 rounded-full overflow-hidden cursor-pointer flex justify-center items-center common-transition hover:scale-95 hover:border-blue"
      >
        <Image
          src="/assets/images/homepage/png/back-to-top.png"
          alt="backToTop"
          width={24}
          height={24}
          sizes="100vw"
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ScrollTop;
