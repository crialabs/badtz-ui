import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { CTAImage } from "@/components/home/cta-image";
import { PlausibleButton } from "@/components/plausible-button";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/home/cta/scene"), {
  ssr: false,
  loading: () => <p></p>,
});

export default function CallToAction() {
  return (
    <section className="px-6 lg:px-8 mt-24 sm:mt-16 md:max-w-3xl lg:max-w-5xl mx-auto w-full ">
      <div className="border border-border edge-t h-full w-full bg-white dark:bg-[#171717] border-b-0 rounded-t-2xl relative overflow-hidden flex items-center justify-center md:flex-row flex-col">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left py-16 px-6 md:px-16 md:pr-0">
          <div className="lg:ml-8">
            <CTAImage />
            <div className="relative z-10 mb-4">
              <div className="[&_svg]:size-8 flex justify-center md:justify-start">
                <Logo />
              </div>
              <h2 className="mt-8 text-4xl sm:text-5xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
                Build faster.
                <br /> Build beautiful.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-light max-w-[405px]">
                Build beautiful websites and applications. From concept to
                production at light speed.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <div className="flex gap-3.5 mr-auto ml-auto md:ml-0">
                <Link
                  target="_blank"
                  href="https://pro.badtz-ui.com"
                  className="h-10 px-5 font-medium text-sm rounded-full flex items-center relative gap-2 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-gradient-to-t from-orange-600 to-orange-500 shadow-[0_0px_16px_rgba(245,_73,_0,_0.7)] text-white  before:absolute before:inset-0 before:shadow-[0_0px_20px_rgba(245,_73,_0,_0.5)] before:opacity-0 transition-opacity duration-300 hover:before:opacity-100 before:rounded-[inherit] before:pointer-events-none before:transition-opacity before:duration-300 before:will-change-opacity after:inset-0 after:absolute after:shadow-[rgba(255,_255,_255,_0.2)_0px_1px_0px_inset] after:rounded-[inherit] whitespace-nowrap"
                >
                  <PlausibleButton
                    eventName="Clicked on Pro"
                    className="flex items-center justify-center gap-2"
                  >
                    BadtzUI Pro <ExternalLinkIcon />
                  </PlausibleButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:flex">
          {" "}
          <div className="aspect-square w-full relative">
            <Scene />
          </div>
        </div>
      </div>
    </section>
  );
}
