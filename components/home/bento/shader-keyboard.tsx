"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

export function ShaderKeyboard() {
  const { theme } = useTheme();
  const [key, setKey] = useState(0);

  const PixelDistorsionScene = dynamic(
    () => import("@/components/ui/pixel-distorsion-scene"),
    {
      ssr: false,
    }
  );

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [theme]);

  return (
    <div className="w-[448px] h-[180px]">
      <PixelDistorsionScene
        key={key}
        grid={20}
        imageSrc={`/images/home-bento/keyboard-${theme}-x3.webp`}
      />
    </div>
  );
}
