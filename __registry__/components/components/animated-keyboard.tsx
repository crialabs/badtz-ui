"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { memo, useEffect, useState } from "react";
import { ReactNode } from "react";

type KeycapProps = {
  height?: string;
  keylightColor?: "default" | "red" | "blue" | "green" | "purple" | "rgb";
  char?: string;
  secondaryChar?: string;
  className?: string;
} & VariantProps<typeof keycapVariants>;

const keycapVariants = cva("bg-gradient-to-b border rounded-lg relative", {
  variants: {
    variant: {
      default: "aspect-square",
      double: "aspect-square",
      tab: "aspect-[1.77] [&_span]:text-[calc(var(--keycap-height)/3.5)]",
      caps: "aspect-[1.85] [&_span]:text-[calc(var(--keycap-height)/3.5)]",
      shift: "aspect-[2.32] [&_span]:text-[calc(var(--keycap-height)/3.5)]",
      command: "aspect-[1.34] [&_span]:text-[calc(var(--keycap-height)/3.5)]",
      space: "aspect-[8.3] [&_span]:text-[calc(var(--keycap-height)/3.5)]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const keylightColors = {
  default: {
    light: "before:shadow-[0px_1px_5px_0px_#00000020]",
    dark: "dark:before:shadow-[0px_2px_5px_0px_#ffffff20]",
  },
  red: {
    light: "before:shadow-[0px_1px_5px_0px_#ff0000]",
    dark: "dark:before:shadow-[0px_2px_5px_0px_#ff0000]",
  },
  blue: {
    light: "before:shadow-[0px_1px_5px_0px_#0000ff]",
    dark: "dark:before:shadow-[0px_2px_5px_0px_#0000ff]",
  },
  green: {
    light: "before:shadow-[0px_1px_5px_0px_#00ff00]",
    dark: "dark:before:shadow-[0px_2px_5px_0px_#00ff00]",
  },
  purple: {
    light: "before:shadow-[0px_1px_5px_0px_#800080]",
    dark: "dark:before:shadow-[0px_2px_5px_0px_#800080]",
  },
  rgb: {
    light:
      "before:shadow-[0px_1px_5px_0px_var(--rgb-color)] before:transition-[box-shadow] before:duration-300 before:ease-in-out",
    dark: "dark:before:shadow-[0px_2px_5px_0px_var(--rgb-color)] before:transition-[box-shadow] before:duration-300 before:ease-in-out",
  },
};

const rgbColors = [
  "#ff0000",
  "#ff00ff",
  "#0000ff",
  "#00ffff",
  "#00ff00",
  "#ffff00",
];

const RGBAnimation = memo(function RGBAnimation({
  currentColorIndex,
  keylightColor,
}: {
  currentColorIndex: number;
  keylightColor: string;
}) {
  if (keylightColor !== "rgb") return null;

  return (
    <style jsx global>{`
      :root {
        --rgb-color: ${rgbColors[currentColorIndex]};
      }
    `}</style>
  );
});

export const Keycap = memo(function Keycap({
  height = "56px",
  keylightColor = "default",
  char,
  secondaryChar,
  variant,
  className,
}: KeycapProps) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  if (secondaryChar && variant !== "double") {
    console.warn("secondaryChar should only be used with variant 'double'");
    secondaryChar = undefined;
  }

  useEffect(() => {
    if (keylightColor !== "rgb") return;

    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % rgbColors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [keylightColor]);

  return (
    <>
      <RGBAnimation
        currentColorIndex={currentColorIndex}
        keylightColor={keylightColor}
      />
      <div
        style={
          {
            "--keycap-height": height,
          } as React.CSSProperties
        }
        className={cn(
          keycapVariants({ variant }),
          "from-neutral-50 to-neutral-100 border-neutral-200 cursor-default",
          "dark:from-neutral-900 dark:to-neutral-950 dark:border-neutral-800",
          "shadow-[0px_5px_0px_0px_#e5e5e5] dark:shadow-[0px_5px_0px_0px_#262626]",
          "transition-all duration-100 ease-in-out",
          "hover:shadow-[0px_2px_0px_0px_#e5e5e5] dark:hover:shadow-[0px_2px_0px_0px_#262626]",
          "before:inset-0 before:absolute before:rounded-[inherit]",
          "after:inset-[1px] after:absolute after:rounded-[inherit] after:shadow-[rgba(255,_255,_255,_0.05)_0px_1px_0px_inset]",
          keylightColors[keylightColor].light,
          keylightColors[keylightColor].dark,
          "hover:-translate-y-[-3px] hover:opacity-90",
          "h-[var(--keycap-height)]",
          "will-change-transform",
          className
        )}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-neutral-800 dark:text-neutral-100">
          {variant === "double" ? (
            <div className="flex flex-col items-center justify-between h-full w-full p-[15%]">
              <span className="text-[calc(var(--keycap-height)/4)] leading-none">
                {secondaryChar}
              </span>
              <span className="text-[calc(var(--keycap-height)/3.5)] leading-none">
                {char}
              </span>
            </div>
          ) : (
            <span className="text-[calc(var(--keycap-height)/2.75)] leading-none">
              {char}
            </span>
          )}
        </div>
      </div>
    </>
  );
});

type KeyboardProps = {
  children: ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
};

export function Keyboard({ children, className, gap = "md" }: KeyboardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1",
        {
          "gap-1": gap === "sm",
          "gap-2": gap === "md",
          "gap-3": gap === "lg",
        },
        "p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

type KeyRowProps = {
  children: ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
};

export function KeyRow({ children, className, gap = "md" }: KeyRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        {
          "gap-1": gap === "sm",
          "gap-2": gap === "md",
          "gap-3": gap === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
