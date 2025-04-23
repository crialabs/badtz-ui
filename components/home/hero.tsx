import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { HeroImage } from "@/components/home/hero/hero-image";
import { HeroBadge } from "@/components/home/hero/hero-badge";
import { PlausibleButton } from "@/components/plausible-button";
import BunnyImage from "@/components/bunny-image";
import {
  NextIcon,
  ShadcnIcon,
  TailwindIcon,
  MotionIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
} from "@/components/home/hero/hero-icons";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["WebSite", "SoftwareApplication"],
  name: "BadtzUI",
  url: "https://badtz-ui.com",
  description:
    "An expanding collection of 70+ free UI components. Production-grade animations with Framer Motion. Weekly updates. Open source. React, Tailwind, TypeScript & JavaScript.",
  image: "https://badtz-ui.com/og-image.png",
  sameAs: ["https://github.com/badtz-ui", "https://x.com/badtz_ui"],
  keywords:
    "React components, Tailwind CSS, Framer Motion, UI library, Web animations, Frontend toolkit",
  applicationCategory: "UI Component Library",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/OnlineOnly",
    seller: {
      "@type": "Organization",
      name: "BadtzUI",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
  author: {
    "@type": "Person",
    name: "Badtz",
    url: "https://x.com/badtz_ui",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://badtz-ui.com",
  },
};

const tags = [
  { name: "React", icon: <ReactIcon /> },
  { name: "NextJS", icon: <NextIcon /> },
  { name: "TailwindCSS", icon: <TailwindIcon /> },
  { name: "Shadcn UI", icon: <ShadcnIcon /> },
  { name: "Motion", icon: <MotionIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "JavaScript", icon: <JavaScriptIcon /> },
];

export default function Hero() {
  return (
    <section className="w-full h-full pt-10 md:pt-20 overflow-hidden bg-third relative border-b">
      <BunnyImage
        src="/images/home-hero/halo.webp"
        alt="Badtz UI"
        fill
        className="object-cover top-0 left-0 hidden dark:block z-0 opacity-50"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <div className="px-6 lg:px-8 lg:max-w-6xl mx-auto z-10 relative">
        <div className="md:text-center text-left flex flex-col items-start md:items-center justify-center">
          <p className="max-w-[700px] text-5xl md:text-6xl lg:text-6xl font-semibold tracking-tighter text-foreground font-gilroy mt-8 md:mt-10 text-balance">
            Build Stunning Websites at Lightning Speed
          </p>
          <h1 className="mt-6 text-balance tracking-tight lg:mt-5 sm:mt-3 max-w-[680px] text-muted-foreground text-base md:text-lg">
            An open-source React UI library with production-ready animations.
            Weekly updates. Built with React, Tailwind, TypeScript & JavaScript.
          </h1>
          <div className="mt-8 flex gap-3.5">
            <Link
              href="/docs"
              className="h-9 sm:h-10 px-5 shadow-sm font-medium text-sm rounded-xl bg-foreground text-background hover:bg-foreground/85 flex items-center relative transition-colors duration-300"
            >
              View Docs
            </Link>
            <Link
              target="_blank"
              href="https://pro.badtz-ui.com"
              className="h-9 sm:h-10 px-5 shadow-sm font-medium text-sm rounded-xl flex items-center relative gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 after:inset-0 after:absolute after:shadow-[rgba(255,_255,_255,_0.2)_0px_1px_0px_inset] after:rounded-[inherit] bg-gradient-to-t from-blue-600 to-blue-500 text-white before:bg-gradient-to-t before:from-blue-700 before:to-blue-500 before:inset-0 before:absolute before:rounded-[inherit] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-[1] before:shadow-[rgba(255,_255,_255,_0.2)_0px_1px_0px_inset]"
            >
              <PlausibleButton
                eventName="Clicked on Pro"
                className="flex items-center justify-center gap-2 relative z-10"
              >
                BadtzUI Pro <ExternalLinkIcon />
              </PlausibleButton>
            </Link>
          </div>
          <div className="flex items-center gap-2 flex-wrap max-w-lg md:justify-center justify-start mt-10">
            {tags.map((tag) => (
              <HeroBadge key={tag.name} icon={tag.icon}>
                {tag.name}
              </HeroBadge>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://www.producthunt.com/posts/badtzui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-badtzui"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=956559&theme=dark&t=1745353693431"
                alt="BadtzUI - A&#0032;free&#0032;and&#0032;open&#0045;source&#0032;React&#0032;component&#0032;library | Product Hunt"
                style={{ width: "185px", height: "40px" }}
                width="185"
                height="40"
              />
            </a>
          </div>
        </div>
        <noscript>
          <img
            src="/images/home-hero/badtz-ui-documentation-dark.svg"
            alt="Badtz UI interface in light"
            height={600}
            width={960}
            className="border border-border rounded-xl"
          />
        </noscript>
        <HeroImage />
      </div>
    </section>
  );
}
