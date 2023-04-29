"use client"; // this is a client component

import React, { useState } from "react";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "./components/navbar/navbar";

import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";

import HeroButton from "./components/buttons/herobutton";
import Hero from "./components/hero";

export const metadata = {
  title: "Jake TyCyn Schmidt Blog",
  description: "Blog of a front-end dev's journey learning new things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [heroImage, setHeroImage] = useState("Seattle-001-Edit.jpg");
  const imageSizes = [1920];

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
        <div className="flex flex-col w-full h-full min-h-screen ">
          {header}
          <div className="">{children}</div>

          {/* <div className="mx-auto max-w-7xl ">{children}</div> */}
        </div>
      </body>
    </html>
  );
}
