"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function CTAImage() {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState(
    "/images/home-call-to-action/cta-image-dark.webp"
  );

  useEffect(() => {
    setImageSrc(
      theme === "dark"
        ? "/images/home-call-to-action/cta-image-dark.webp"
        : "/images/home-call-to-action/cta-image-light.webp"
    );
  }, [theme]);
  return (
    <Image
      fill
      className="object-cover absolute pointer-events-none opacity-70"
      style={{
        objectPosition: "bottom",
      }}
      src={imageSrc}
      alt="Dot background effect"
      quality={100}
    />
  );
}
