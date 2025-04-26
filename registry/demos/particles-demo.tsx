import { Particles } from "@/registry/components/particles";

export default function ParticlesDemo() {
  return (
    <div className="w-full h-[380px] rounded-md overflow-hidden relative flex items-center justify-center bg-black">
      <Particles variant="default" />
      <span className="font-gilroy text-4xl pointer-events-none bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent py-2">
        Particles
      </span>
    </div>
  );
}
