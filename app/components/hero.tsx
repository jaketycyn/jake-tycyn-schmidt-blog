"use client";
import React, { useState } from "react";
import Image from "next/image";
import useDimmensions from "react-cool-dimensions";
//import arrayCeil from ''
import HeroButton from "./buttons/Herobutton";
import Link from "next/link";
import InverseHeroButton from "./buttons/InverseHeroButton";

function FirstRow() {
  return (
    <div className="z-10 flex flex-col items-center justify-center w-full mx-auto bg-black/70 rounded-2xl">
      <div className="flex flex-row">
        <div className="flex flex-col items-center ml-10 font-semibold text-center">
          <p className="text-lg text-white md:text-2xl md:text-4xl">
            Hi! I&apos;m
          </p>
          <h1 className="text-3xl font-extrabold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
            Jake TyCyn Schmidt
          </h1>

          <div className="flex flex-row mt-2 space-x-2 text-xl font-semiBold">
            <p className="text-white">a</p>
            <Link href={"/photography"}>
              <h4 className="text-lg text-pink-400 duration-150 ease-in hover:scale-105 hover:underline">
                Photographer
              </h4>
            </Link>
            <p className="text-white">turned</p>
            <Link href={"/work"}>
              <h4 className="text-lg text-blue-400 duration-150 ease-in hover:scale-105 hover:underline">
                Software Engineer.
              </h4>
            </Link>
          </div>
          {/* <p className="text-white">located in sunny Santa Monica, CA</p> */}
        </div>
      </div>
    </div>
  );
}

function SecondRow() {
  return (
    <div className="relative z-10 flex flex-row items-center justify-center space-x-10">
      <InverseHeroButton href="/">Resume</InverseHeroButton>
      <HeroButton href="/">Projects</HeroButton>
    </div>
  );
}
function ThirdRow() {
  return (
    <div className="min-h-[50vh] lg:min-h-[60vh] xl:min-h-[65vh]">
      <Image
        src={`/galleryImages/Seattle-001-Edit.jpg`}
        alt="Hero Image"
        className="object-cover bg-black lg:px-20 xl:px-32"
        fill
        // width="400"
        // height="400"
      />
    </div>
  );
}

export default function Hero() {
  return (
    // <div className="h-full bg-black">
    //   <div className="relative z-10 flex flex-col items-center justify-center w-full ">
    //     <div className="flex flex-col items-center justify-center px-3 md:flex-col min-h-[70vh]">
    //       <FirstRow />
    //       <SecondRow />

    //     </div>
    //   </div>

    // </div>
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* Row 1 */}
      <FirstRow />
      {/* Row 3 */}
      <SecondRow />
      {/* Row 2 */}
      <ThirdRow />
      <div className="relative w-full h-full bg-pink-400">
        <p>More infor for next section</p>
      </div>
      {/* 2nd Page */}
    </div>
  );
}
