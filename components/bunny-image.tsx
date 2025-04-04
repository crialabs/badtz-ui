"use client";

import Image, { ImageProps } from "next/image";
import bunnyLoader from "@/lib/image-loader";

const BunnyImage = (props: ImageProps) => {
  return <Image loader={bunnyLoader} {...props} />;
};

export default BunnyImage;
