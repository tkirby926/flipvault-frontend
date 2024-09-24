import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-dark-black overflow-x-clip">
      <Header />

      {children}
      <Footer />
    </div>
  );
}
