"use client";

import dynamic from "next/dynamic";
const PixelDistorsionScene = dynamic(
  () => import("@/registry/components/shaders/pixel-distorsion-scene"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-zinc-100 dark:bg-neutral-950">
        {/* Skeleton loader */}
      </div>
    ),
  },
);

export default function MouseWaveDemo() {
  return (
    <div className=" w-full max-w-[900px] h-auto flex items-center justify-center">
      <PixelDistorsionScene imageSrc="/images/shaders/medusa-image.webp" />
    </div>
  );
}
