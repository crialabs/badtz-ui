import HomeBento from "@/components/home/home-bento";
import Header from "@/components/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/footer";
import WallOfLove from "@/components/home/wall-of-love";
import CallToAction from "@/components/home/call-to-action";
import type { Metadata } from "next";
//import Marketing from "@/components/marketing";

export const metadata: Metadata = {
  title: "BadtzUI • UI Components for React JS",
  description:
    "An expanding collection of 70+ free UI components. Production-grade animations with Framer Motion. Weekly updates. Open source. React, Tailwind, TypeScript & JavaScript.",
  openGraph: {
    title: "BadtzUI - Modern React Components",
    images: "/opengraph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "BadtzUI - UI Components for React JS",
    description:
      "An expanding collection of 70+ free UI components. Production-grade animations with Framer Motion. Weekly updates. Open source. React, Tailwind, TypeScript & JavaScript.",
    images: "/twitter-image.jpg",
    site: "@badtz_ui",
  },
};

export default async function Home() {
  return (
    <>
      {/*
      //TODO: TESTS -> We're probably losing conversion rate, but the design is too ugly.
      <Marketing href="https://pro.badtz-ui.com" plausibleEvent="Clicked on Pro">
        Coming Soon! Badtz UI Pro +70 expected templates, blocks, and much more!
      </Marketing>
      */}
      <Header />
      <main>
        <Hero />
        <HomeBento />
        <WallOfLove />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
