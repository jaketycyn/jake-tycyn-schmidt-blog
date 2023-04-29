import React from "react";
import Link from "next/link";

export default function HeroButton(props: any) {
  let className =
    `mt-8 px-12 py-3 bg-gradient-to-r from-pink-400 to-blue-400 transition ease-in-out ` +
    " hover:to-white hover:from-black  text-xl text-white/90 font-semibold drop-shadow-lg rounded-full ";

  return props.href ? (
    <Link className={className} {...props} />
  ) : (
    <button type="button" className={className} {...props} />
  );
}
