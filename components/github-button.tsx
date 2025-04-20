"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { usePlausible } from "next-plausible";
import Link from "next/link";
import { ShuffleText } from "@/components/ui/shuffle-text";

export function GithubButton() {
  const plausible = usePlausible();
  const [stars, setStars] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/badtzx0/badtz-ui"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    }

    fetchStars();
  }, []);

  return (
    <Link
      href="https://github.com/badtzx0/badtz-ui"
      target="_blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Button
        aria-label="GitHub Button"
        className="h-8 px-3 rounded-lg bg-gradient-to-t dark:from-secondary/95 dark:to-secondary/95 from-secondary to-background text-foreground flex items-center relative after:inset-0 after:absolute dark:after:shadow-[rgba(255,_255,_255,_0.1)_0px_1px_0px_inset] after:shadow-[rgba(0,_0,_0,_0.05)_0px_1px_0px_inset] after:rounded-[inherit] group/github [&_svg]:size-3.5 [&_svg]:shrink-0 after:pointer-events-none group/github"
        onClick={() => plausible("Clicked on GitHub Button")}
      >
        <GitHubLogoIcon className="h-5 w-5" />
        <span className="lg:block hidden">GitHub</span>
        <Separator
          orientation="vertical"
          className="dark:bg-white/20 bg-black/10 h-5 mx-0.5"
        />
        <ShuffleText
          isHovering={isHovering}
          className="font-mono text-sm"
          duration={0.5}
        >
          {stars !== null ? stars.toLocaleString() : "_"}
        </ShuffleText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-[-1px]"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>

        <span className="sr-only">Github Link</span>
      </Button>
    </Link>
  );
}
