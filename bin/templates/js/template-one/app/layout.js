import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomBar from "@/components/layout/BottomBar";



export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        {/* <Curtain /> */}
        <Header />
        <main className=" mx-auto ">
          {children}
        </main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
