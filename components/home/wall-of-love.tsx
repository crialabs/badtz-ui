"use client";

import { ClientTweetCard } from "@/components/home/wall-of-love/client-tweet-card";
import { VerticalScroll } from "@/components/home/wall-of-love/vertical-scroll";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const tweetGroups = [
  {
    ids: ["1891051538816066009", "1891051153024004500"],
    duration: 45,
  },
  {
    ids: ["1876146827361472661", "1891051153024004500", "1891050876774621546"],
    duration: 30,
  },
  {
    ids: ["1891050876774621546", "1891051538816066009"],
    duration: 40,
  },
];

export default function WallOfLove() {
  return (
    <section className="w-full h-full border-b bg-third">
      <div className="max-w-[400px] md:max-w-3xl lg:max-w-5xl mx-auto flex flex-col items-center justify-center text-center bg-third">
        <div className="flex flex-col items-center justify-center px-6 lg:px-12 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
            Open Source, Built Together
          </h2>
          <p className="text-balance max-w-[550px] md:max-w-[700px] tracking-tight text-muted-foreground text-sm md:text-base mt-4">
            BadtzUI is an open-source project where everyone can contribute.
            Join our community, suggest improvements, and help shape the future
            of this UI library!
          </p>
          <Link
            href="https://github.com/badtzx0/badtz-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-5 shadow-sm font-medium text-sm rounded-xl bg-foreground text-background hover:bg-foreground/85 flex items-center relative transition-colors duration-300 mt-6 [&_svg]:size-4 [&_svg]:shrink-0 gap-2"
          >
            <Icons.gitHub />
            Star Us on GitHub
          </Link>
        </div>
        {/*
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[65dvh] overflow-hidden relative w-full",
            "before:absolute before:top-[-2px] before:inset-x-0 before:h-[75px] before:bg-gradient-to-t from-transparent to-background before:z-[20] before:pointer-events-none",
            "after:absolute after:bottom-[-2px] after:inset-x-0 after:h-[150px] after:bg-gradient-to-b after:z-[20] after:pointer-events-none"
          )}
        >
          {tweetGroups.map((group, index) => (
            <VerticalScroll
              key={`scroll-${index}`}
              style={{
                ["--duration" as any]: `${group.duration}s`,
              }}
              className={`[--duration:${group.duration}s]`}
              aria-label={`Tweet carousel group ${index + 1}`}
            >
              {group.ids.map((id) => (
                <ClientTweetCard
                  key={id}
                  id={id}
                  aria-posinset={index + 1}
                  aria-setsize={group.ids.length}
                />
              ))}
            </VerticalScroll>
          ))}
        </div>
        <Link
          href="https://twitter.com/intent/tweet?text=Sharing%20the%20love%20for%20BadtzUI!%20%F0%9F%8C%9F%0ACheck%20it%20out%3A%20https%3A%2F%2Fbadtz-ui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-5 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90 flex items-center relative transition-colors duration-300 mt-10 [&_svg]:size-3 gap-2 mx-auto"
          aria-label="Share your experience on Twitter"
        >
          <Icons.twitter />
          <span className="sr-only">Twitter</span>
          Share love on X
        </Link>
        */}
      </div>
    </section>
  );
}
