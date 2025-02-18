"use client";

import dynamic from "next/dynamic";
const PulseShaderScene = dynamic(
  () => import("@/registry/components/shaders/pulse-shader-scene"),
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
      <PulseShaderScene imageSrc="/images/shaders/aurora-borealis-image.webp" />
    </div>
  );
}
