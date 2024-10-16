"use client"
import FlipCards from "@/components/flip-plus/FlipCards";
import FlipPlus from "@/components/flip-plus/FlipPlus";
import { Suspense } from "react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative border-opacity-10">
      <FlipPlus />
      <FlipCards />
      <Image
        style={{ width: "auto", height: "auto" }}
        src="/assets/images/flip-plus/stake-blue-gradient.webp"
        alt="blue-gradient"
        width={1440}
        height={810}
        className="absolute left-0 right-0 top-[-30%] w-full z-0 object-cover object-top bottom-0 h-full pointer-events-none"
      />
    </div>
  );
};

export default page;
