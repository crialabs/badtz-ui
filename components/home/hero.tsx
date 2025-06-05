import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { HeroImage } from "@/components/home/hero/hero-image";
import { HeroBadge } from "@/components/home/hero/hero-badge";
import { PlausibleButton } from "@/components/plausible-button";
import {
  NextIcon,
  ShadcnIcon,
  TailwindIcon,
  MotionIcon,
  TypeScriptIcon,
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
];

export default function Hero() {
  return (
    <section className="w-full h- pt-10 md:pt-20 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <div className="lg:max-w-6xl mx-auto z-10 relative">
        <div className="lg:text-center text-left flex flex-col items-start lg:items-center justify-center px-6 lg:px-8 ">
          <p className="md:max-w-[40px] text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter font-gilroy mt-8 md:mt-10 text-balance bg-gradient-to-b from-white/80 via-white to-white/60 inline-block text-transparent bg-clip-text pb-2">
            {t('hero.main_title')}
          </p>
          <h1 className="mt-4 text-balance tracking-tight sm:mt-3 max-w-[680px] text-sidebar-muted-foreground text-base md:text-lg">
            {t('hero.sub_title')}
          </h1>
          <div className="mt-8 flex gap-3.5">
            <Link
              target="_blank"
              href="{links.home}"
              className="h-[38px] px-5 font-medium text-sm rounded-xl bg-[#111113] text-white border border-[#7876c5]/30 hover:border-[#7876c5]/40 flex items-center relative transition-colors duration-300 accent-shadow overflow-hidden"
            >
              <PlausibleButton
                eventName="Clicked on Pro"
                className="flex items-center justify-center gap-2 relative z-10"
              >
                {t('hero.cta')} <ExternalLinkIcon />
              </PlausibleButton>
            </Link>
          </div>
          <div className="flex items-center gap-2 flex-wrap max-w-lg lg:justify-center justify-start mt-10">
            {tags.map((tag) => (
              <HeroBadge key={tag.name} icon={tag.icon}>
                {tag.name}
              </HeroBadge>
            ))}
          </div>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
