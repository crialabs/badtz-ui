"use client";

import { Icons } from "@/components/icons";
import { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import Link from "next/link";

const MotionNumberFlow = motion.create(NumberFlow);
const ANIMATION_DURATION = 900;

export function DocGithubButton() {
  const [stars, setStars] = useState<number | null>(null);
  const [displayValue, setDisplayValue] = useState<number | null>(null);
  const canAnimate = useCanAnimate();

  const generateRandomNumber = (length: number) => {
    const targetLength = length + 2;
    const min = Math.pow(10, targetLength - 1);
    const max = Math.pow(10, targetLength) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const animateValue = (value: number) => {
    const randomValue = generateRandomNumber(value.toString().length);
    setDisplayValue(randomValue);
    setTimeout(() => setDisplayValue(value), ANIMATION_DURATION);
  };

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/badtzx0/badtz-ui"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
        setDisplayValue(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <MotionConfig
      transition={{
        layout: canAnimate
          ? { duration: ANIMATION_DURATION / 1000, bounce: 0, type: "spring" }
          : { duration: 0 },
      }}
    >
      <Link
        target="_blank"
        href="https://github.com/badtzx0/badtz-ui"
        onMouseEnter={() => stars && animateValue(stars)}
      >
        <motion.span
          className="inline-flex items-center h-[30px] pl-2 pr-3 border border-sidebar-border text-[13.5px] font-medium !text-sidebar-primary-foreground bg-doc-background hover:bg-transparent dark:hover:bg-sidebar-primary transition-colors duration-300 rounded-md [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 shadow-none group/contribute gap-2 overflow-hidden"
          layout
          style={{ borderRadius: 999 }}
        >
          <Icons.gitHub className="text-sidebar-muted-foreground group-hover/contribute:text-sidebar-primary-foreground transition-colors" />
          <span className="lg:pt-[2px]">GitHub Stars</span>
          {displayValue !== null && (
            <MotionNumberFlow
              value={displayValue}
              className="font-semibold min-w-[20px] text-right"
              format={{ style: "decimal", useGrouping: true }}
              style={
                {
                  "--number-flow-char-height": "0.85em",
                  "--number-flow-mask-height": "0.3em",
                  "--number-flow-direction": "up",
                } as React.CSSProperties
              }
              layout
              layoutRoot
            />
          )}
        </motion.span>
      </Link>
    </MotionConfig>
  );
}
