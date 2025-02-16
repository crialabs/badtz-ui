import { AnimatedGradient } from "@/registry/components/backgrounds/stripe-animated-gradient";

export default function AnimatedGradientDemo() {
  return (
    <div className="w-full h-[450px] rounded-md overflow-hidden flex items-center justify-center relative">
      <AnimatedGradient
        color1="#a960ee"
        color2="#ff333d"
        color3="#90e0ff"
        color4="#ffcb57"
      />
      <h1 className="font-gilroy text-4xl absolute z-10 text-center font-semibold inset-0 flex items-center justify-center pointer-events-none text-black px-2">
        Stripe Animated
        <br />
        Gradient
      </h1>
    </div>
  );
}
