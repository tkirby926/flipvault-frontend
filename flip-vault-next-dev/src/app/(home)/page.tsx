"use client";
import Faqs from "@/src/components/home/Faqs";
import FlipVaultRoadmap from "@/src/components/home/FlipVaultRoadmap";
import Hero from "@/src/components/home/Hero";
import HowItWorks from "@/src/components/home/HowItWorks";
import KeyFeatures from "@/src/components/home/KeyFeatures";
import OurTeam from "@/src/components/home/OurTeam";
import ReadyToStart from "@/src/components/home/ReadyToStart";
import SupportedWallets from "@/src/components/home/SupportedWallets";
import TradeNfts from "@/src/components/home/TradeNfts";
import TradingPlatform from "@/src/components/home/TradingPlatform";
import TransactionsWork from "@/src/components/home/TransactionsWork";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Hero />
      <TradeNfts />
      <KeyFeatures />
      <FlipVaultRoadmap />
      <HowItWorks />
      <TransactionsWork />
      <SupportedWallets />
      <TradingPlatform />
      <OurTeam />
      <Faqs />
      <ReadyToStart />
    </>
  );
}
