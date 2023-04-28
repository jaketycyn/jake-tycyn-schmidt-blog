"use client"; // this is a client component

import Link from "next/link";
import "../styles/globals.css";
import Navbar from "./components/navbar/navbar";

export const metadata = {
  title: "Jake TyCyn Schmidt Blog",
  description: "Blog of a front-end dev's journey learning new things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="flex flex-row justify-center ">
        <div className="w-full font-semibold text-slate-800">
          <Navbar />
        </div>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex flex-col w-full h-full min-h-screen bg-yellow-400/10">
          {header}
          <div className="mx-auto max-w-7xl ">{children}</div>
        </div>
      </body>
    </html>
  );
}
