import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { CTAImage } from "@/components/home/cta-image";

export default function CallToAction() {
  return (
    <section className="px-6 lg:px-8 mt-24 sm:mt-16 md:max-w-3xl lg:max-w-5xl mx-auto h-[400px] sm:h-[450px] w-full">
      <div className="border border-border h-full w-full bg-white dark:bg-secondary rounded-t-3xl border-b-0 relative overflow-hidden flex items-center justify-center flex-col">
        <CTAImage />
        <noscript>
          <img
            className="object-contain absolute"
            style={{
              objectPosition: "bottom",
            }}
            sizes="(max-width: 768px) 100vw, 960px"
            src="/images/home-call-to-action/cta-image-light.webp"
            alt="Dot background effect"
          />
        </noscript>
        <div className="relative z-10 mb-4">
          <div className="[&_svg]:size-16 flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-8 text-center text-4xl sm:text-5xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
            Build faster.
            <br /> Build beautiful.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto px-4">
            <Link
              href="/docs"
              aria-label="View documentation"
              className="h-9 md:h-10 px-4 md:px-5 font-medium text-sm rounded-lg bg-foreground text-background hover:bg-foreground/90 flex items-center justify-center relative transition-all duration-300 whitespace-nowrap w-max-content"
            >
              View Docs
            </Link>
            <Link
              href="https://pro.badtz-ui.com"
              aria-label="Explore BadtzUI Pro (external link)"
              className="h-9 md:h-10 px-4 md:px-5 font-medium whitespace-nowrap text-sm rounded-lg flex items-center justify-center gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-t from-orange-600 to-orange-500 shadow-[0_0px_16px_rgba(245,_73,_0,_0.7)] text-white hover:shadow-[0_0px_20px_rgba(245,_73,_0,_0.9)] transition-all duration-300"
            >
              BadtzUI Pro <ExternalLinkIcon aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
