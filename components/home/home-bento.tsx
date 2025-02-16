import { BentoGrid, BentoCell } from "@/components/home/bento/bento-grid";
import {
  Cell1Visual,
  Cell2Visual,
  Cell3Visual,
  Cell4Visual,
} from "@/components/home/bento/visual";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Lightning-Fast React Components.",
    description:
      "Production-optimized. Fits any stack - from fresh Next.js apps to legacy React setups.",
    visual: <Cell1Visual />,
  },
  {
    title: "Copy. Paste. Ship.",
    description:
      "Build React apps faster: integrate components via CLI or code snippets. No setup headaches - just plug-and-play components.",
    visual: <Cell2Visual />,
  },
  {
    title: "Your Design, Your Rules.",
    description:
      "Tailwind-first components with customizable animations. Style every state and breakpoint to match your brand identity.",
    visual: <Cell3Visual />,
  },
  {
    title: "Scale with BadtzUI Pro",
    description:
      "Over 70 expected ready-to-use components, blocks and templates for your apps, SaaS, AI tools...",
    visual: <Cell4Visual />,
    link: {
      src: "https://pro.badtz-ui.com",
      text: "BadtzUI Pro",
    },
  },
];

export default function HomeBento() {
  return (
    <section className="w-full h-full py-16 sm:py-28">
      <div className="px-6 lg:px-8 lg:max-w-5xl mx-auto">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
            Highlight your website in a second
          </h2>
          <p className="mt-4 text-balance max-w-[550px] md:max-w-[700px] tracking-tight lg:mt-6 sm:mt-3 text-muted-foreground text-base md:text-lg font-light">
            Build React interfaces faster with production-ready UI components.
            Perfectly integrated with Next.js. Custom Tailwind styling,
            zero-config setup.
          </p>
        </div>
        <BentoGrid className="mt-10">
          {features.map((feature, index) => (
            <BentoCell
              key={index}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              link={feature.link}
              className={cn(
                index === 1 || index === 2 ? "md:col-span-3" : "",
                index === 1 ? "overflow-visible" : "",
                "max-md:max-w-[400px] w-full"
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
