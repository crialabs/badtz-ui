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
    <section className="md:max-w-3xl lg:max-w-5xl mx-auto w-full bg-gradient-to-t from-third to-background">
      <div className="border-t border-border h-full w-full  relative overflow-hidden flex items-center justify-center md:flex-row flex-col">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left py-16 px-6 md:px-16 md:pr-0">
          <div className="lg:ml-8">
            <div className="relative z-10 mb-4">
              <div className="[&_svg]:size-8 flex justify-center md:justify-start">
                <Logo />
              </div>
              <h2 className="max-w-[700px] text-5xl md:text-6xl font-semibold tracking-tighter text-foreground font-gilroy mt-8 md:mt-10 text-balance">
                Build faster.
                <br /> Build beautiful.
              </h2>
              <p className="mt-6 text-balance tracking-tight lg:mt-5 sm:mt-3 max-w-[680px] text-muted-foreground text-base md:text-lg">
                Build beautiful websites and applications. From concept to
                production at light speed.
              </p>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-3.5 w-full md:w-auto items-center">
              <Link
                target="_blank"
                href="https://pro.badtz-ui.com"
                className="h-9 sm:h-10 px-5 shadow-sm font-medium text-sm rounded-xl flex items-center relative gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 after:inset-0 after:absolute after:shadow-[rgba(255,_255,_255,_0.2)_0px_1px_0px_inset] after:rounded-[inherit] bg-gradient-to-t from-blue-600 to-blue-500 text-white before:bg-gradient-to-t before:from-blue-700 before:to-blue-500 before:inset-0 before:absolute before:rounded-[inherit] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-[1] before:shadow-[rgba(255,_255,_255,_0.2)_0px_1px_0px_inset] w-min whitespace-nowrap"
              >
                <PlausibleButton
                  eventName="Clicked on Pro"
                  className="flex items-center justify-center gap-2 relative z-10"
                >
                  BadtzUI Pro <ExternalLinkIcon />
                </PlausibleButton>
              </Link>
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
