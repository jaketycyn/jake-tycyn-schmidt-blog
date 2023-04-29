"use client";
import React, { useState } from "react";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";
import Link from "next/link";

import useDimmensions from "react-cool-dimensions";
import HeroButton from "./components/buttons/herobutton";
import Hero from "./components/hero";

const HomePage = () => {
  const [heroImage, setHeroImage] = useState("Seattle-001-Edit.jpg");
  const imageSizes = [1920];

  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post, index) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
