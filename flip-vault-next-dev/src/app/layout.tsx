import type { Metadata } from "next";
import "./globals.css";
import ScrollTop from "../components/common/ScrollTop";
import NextTopLoader from "nextjs-toploader";
import InvitePopup from "../components/connect-wallet/common/InvitePopup";
import LandingPopup from "../components/home/LandingPopup";

export const metadata: Metadata = {
  title: "Flip Vault",
  description: "Revolutionize Your Trading Experience",
  metadataBase: new URL("https://flip-vault-next.vercel.app/"),
  openGraph: {
    title: "Flip Vault",
    description:
      "Trade NFTs, Cryptocurrencies, and Files Across Multiple Networks",
    images: "/meta.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-black overflow-x-clip max-w-[1920px] mx-auto">
        {children}
        <ScrollTop />
        <LandingPopup />

        <InvitePopup />
        <NextTopLoader
          color="#085BF7"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #085BF7,0 0 5px #085BF7"
          zIndex={1600}
        />
      </body>
    </html>
  );
}
