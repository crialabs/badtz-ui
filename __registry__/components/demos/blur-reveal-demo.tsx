import { BlurReveal } from "@/registry/components/text-animations/blur-reveal";

export default function BlurRevealDemo() {
  return (
    <div className="flex flex-col max-w-lg space-y-2">
      <span className="text-3xl font-semibold font-gilroy">
        <BlurReveal delay={0}>This&nbsp;</BlurReveal>
        <BlurReveal delay={0.1}>is&nbsp;</BlurReveal>
        <BlurReveal delay={0.2}>a&nbsp;</BlurReveal>
        <BlurReveal delay={0.3}>Title&nbsp;</BlurReveal>
      </span>
      <BlurReveal delay={0.4} className="font-light text-muted-foreground">
        And this is the amazing text that just can’t wait
        <br /> to reveal itself! Watch it come to life with a blur.
      </BlurReveal>
      <BlurReveal delay={0.5}>
        <button className="h-8 px-4 py-2 inline-flex items-center justify-center text-xs bg-muted rounded-md mt-2">
          Discover
        </button>
      </BlurReveal>
    </div>
  );
}
