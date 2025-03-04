"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimationSequence, useAnimate } from "framer-motion";

interface IconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={cn("w-4 h-4", className)}
    fill="currentColor"
  >
    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
  </svg>
);

interface LikeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  iconCount?: number;
}

export function LikeButton({
  className,
  children,
  iconCount = 20,
  ...props
}: LikeButtonProps) {
  const [scope, animate] = useAnimate();
  const [liked, setLiked] = useState<boolean>(false);

  const randomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const handleClick = () => {
    setLiked(!liked);

    const icons = Array.from({ length: iconCount });
    const iconsAnimation = icons.map((_, index) => [
      `.icon-${index}`,
      {
        x: randomNumber(-100, 100),
        y: randomNumber(-100, 100),
        opacity: [1, 0],
        scale: [randomNumber(1, 1.5), 0],
      },
      {
        duration: 0.7,
        at: "<",
      },
    ]);

    const iconsReset = icons.map((_, index) => [
      `.icon-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    if (!liked) {
      animate([...iconsReset, ...iconsAnimation] as AnimationSequence);
    }
  };

  return (
    <div ref={scope} className="relative">
      <button
        onClick={handleClick}
        className={cn(
          "bg-neutral-100 hover:bg-neutral-100/90 dark:bg-neutral-900 dark:hover:bg-neutral-900/90 relative h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
          liked
            ? "dark:text-white text-black"
            : "dark:text-white/70 text-black/70",
          className
        )}
        {...props}
      >
        <Icon
          className={
            liked ? "text-red-500" : "dark:text-neutral-800 text-neutral-200"
          }
        />
        {children}
        <span aria-hidden className="absolute inset-0 pointer-events-none">
          {Array.from({ length: iconCount }).map((_, index) => (
            <Icon
              key={index}
              className={`absolute left-1/2 top-1/2 opacity-0 text-red-500 icon-${index}`}
            />
          ))}
        </span>
      </button>
    </div>
  );
}
