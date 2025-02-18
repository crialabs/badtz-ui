import * as React from "react";
import { cn } from "@/lib/utils";

interface InfiniteRibbonProps {
  repeat?: number;
  duration?: number;
  reverse?: boolean;
  rotation?: number;
  children: React.ReactNode;
  className?: string;
}

export function InfiniteRibbon({
  repeat = 5,
  duration = 10,
  reverse = false,
  rotation = 0,
  children,
  className,
}: InfiniteRibbonProps) {
  const animationClass = reverse
    ? "animate-infinite-ribbon-reverse"
    : "animate-infinite-ribbon";

  return (
    <div
      className={cn(
        "overflow-hidden max-w-full bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white py-1 text-lg",
        className,
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={cn("whitespace-nowrap flex", animationClass)}
        style={{ "--ribbon-duration": `${duration}s` } as React.CSSProperties}
      >
        {Array.from({ length: repeat }, (_, index) => (
          <span key={index} className="inline-block mr-8 select-none">
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}
