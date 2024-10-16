"use client";
import Header from "@/components/common/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WhitePages from "@/components/white-pages/WhitePages";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <WhitePages />
    </>
  );
}
