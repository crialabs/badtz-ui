"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useBreakpoint } from "@/hooks/use-brakpoints";
import BunnyImage from "@/components/bunny-image";

export function HeroImage() {
  const breakpoint = useBreakpoint();
  const { theme } = useTheme();

  const [imageSrc, setImageSrc] = useState("/images/home-hero/layer-1.webp");

  useEffect(() => {
    setImageSrc(
      theme === "dark"
        ? "/images/home-hero/layer-1.webp"
        : "/images/home-hero/layer-1-light.webp"
    );
  }, [theme]);

  return (
    <div className="mt-16 md:mt-24 relative h-[300px] sm:h-[400px] md:h-[600px] before:inset-x-[-200px] before:pointer-events-none before:inset-y-0 before:absolute before:z-20 before:bg-third before:[mask-image:radial-gradient(ellipse_100%_75%_at_40%_20%,transparent_50%,#000_100%)] z-[5]">
      {breakpoint === "large" ? (
        <BunnyImage
          src={imageSrc}
          alt="Badtz UI"
          className="dark:shadow-none border dark:border-none rounded-md shadow-sm"
          fill
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 lg:left-0 md:left-10 md:h-[600px] md:w-[960px] h-[400px] w-[760px] pointer-events-none"
          )}
        >
          <BunnyImage
            src={imageSrc}
            alt="Badtz UI interface in dark mode"
            fill
            quality={50}
            priority
            className="overflow-hidden object-contain object-left dark:shadow-none border dark:border-none rounded-md shadow-sm"
          />
        </div>
      )}
    </div>
  );
}
