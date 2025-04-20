"use client";

import { BentoGrid, BentoCell } from "@/components/home/bento/bento-grid";
import {
  Cell1Visual,
  Cell2Visual,
  Cell3Visual,
  Cell4Visual,
} from "@/components/home/bento/visual";
import { cn } from "@/lib/utils";
import { BentoNav } from "@/components/home/bento/bento-nav";

const navOptions = [
  {
    name: "Overview",
    text: "Build React interfaces faster with production-ready UI components. Perfectly integrated with Next.js. Custom Tailwind styling, zero-config setup.",
  },
  {
    name: "Components",
    text: "Access a comprehensive library of pre-built components. From buttons to complex layouts, everything you need to build beautiful interfaces.",
  },
  {
    name: "Benefits",
    text: "Save countless hours of development with our pre-designed components. Focus on your core features while we handle the UI building blocks.",
  },
  {
    name: "Integration",
    text: "Seamlessly integrate our components into your existing projects. Works with any React setup, from fresh Next.js apps to legacy codebases.",
  },
];

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
    <section className="w-full h-full bg-third border-b">
      <div className="lg:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row px-6 lg:px-12 py-12">
          <div className="w-full md:w-1/2 flex md:items-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
              Highlight your <br />
              website in a second
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-start">
            <BentoNav className="md:mt-0 mt-6" options={navOptions} />
          </div>
        </div>
        <BentoGrid className="md:px-0 px-4">
          {features.map((feature, index) => (
            <BentoCell
              key={index}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              link={feature.link}
              className={cn(
                index === 1 || index === 2 ? "md:col-span-3 " : "",
                index === 0 &&
                  "border-r border-b border-t md:border-l-0 border-l",
                index === 1 &&
                  "border-l border-b border-t md:border-r-0 border-r max-md:h-[380px]",
                index === 2 &&
                  "border-r border-t md:border-l-0 border-l md:border-b-0 border-b",
                index === 3 && "border-l border-t md:border-r-0 border-r",
                "max-md:max-w-[400px] w-full edge-t overflow-hidden"
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
