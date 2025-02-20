import { PlausibleButton } from "@/components/plausible-button";
import { cn } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5 grid-cols-1 md:max-w-none max-w-[400px] mx-auto w-full md:grid-cols-5 md:grid-rows-[340px_380px] lg:grid-rows-[380px_420px] grid-rows-[460px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BentoCellProps {
  className?: string;
  title: string;
  description: string;
  link?: {
    src: string;
    text: string;
  };
  visual: ReactNode;
}

export function BentoCell({
  className,
  title,
  description,
  link,
  visual,
}: BentoCellProps) {
  return (
    <div
      className={cn(
        "row-span-1 md:col-span-2 rounded-xl border border-border flex flex-col items-center justify-center bg-secondary dark:bg-background relative overflow-hidden max-md:h-[460px]",
        className,
      )}
    >
      <div className="h-full w-full overflow-hidden">{visual}</div>
      <div className="p-6 pt-2 absolute rounded-b-xl inset-x-0 bottom-0 bg-secondary z-20 before:bg-gradient-to-t before:from-secondary before:to-transparent before:inset-x-0 before:-top-[50px] before:absolute before:h-[50px] before:pointer-events-none">
        <span className="relative text-balance font-light text-muted-foreground">
          <h3 className="font-medium mb-2 text-foreground inline">{title} </h3>
          {description}
        </span>
        {link && (
          <Link
            target="_blank"
            href={link.src}
            aria-label="Learn more about Badtz UI Pro"
            className="text-blue-500 text-sm mt-2 block hover:underline underline-offset-2"
          >
            <PlausibleButton
              eventName="Clicked on Pro"
              className="flex items-center justify-center gap-0"
            >
              {link.text}
              <ArrowTopRightIcon className="inline-block w-3.5 h-3.5 ml-1" />
            </PlausibleButton>
          </Link>
        )}
      </div>
    </div>
  );
}
