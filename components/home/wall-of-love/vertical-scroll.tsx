import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface VerticalScrollProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  repeat?: number;
}

export function VerticalScroll({
  className,
  children,
  repeat = 4,
  ...props
}: VerticalScrollProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1.25rem] [gap:var(--gap)] flex-col",
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-vertical-scroll flex-col group-hover:[animation-play-state:paused]"
          >
            {children}
          </div>
        ))}
    </div>
  );
}
