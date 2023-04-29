import React from "react";
import Link from "next/link";

export default function InverseHeroButton(props: any) {
  let className =
    `mt-8 px-12 py-3 bg-gradient-to-r  transition ease-in-out to-white from-black ` +
    "  hover:from-pink-400 hover:to-blue-400  text-xl text-white/90 font-semibold drop-shadow-lg rounded-full ";

  return props.href ? (
    <Link className={className} {...props} />
  ) : (
    <button type="button" className={className} {...props} />
  );
}
