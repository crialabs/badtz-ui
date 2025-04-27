import { HyperspaceBackground } from "@/registry/components/backgrounds/hyperspace-background";

export default function HyperspaceBackgroundDemo() {
  return (
    <div className="w-full relative h-[380px] rounded-md overflow-hidden flex items-center justify-center bg-black">
      <HyperspaceBackground />
      <h1 className="text-4xl relative z-10 text-center font-semibold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mix-blend-difference px-2 font-gilroy">
        Ship at the <br />
        speed of light
      </h1>
    </div>
  );
}
