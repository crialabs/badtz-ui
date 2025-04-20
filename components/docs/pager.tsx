"use client";

import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { useEffect } from "react";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Doc = {
  slug: string;
  title: string;
};

type Pager = {
  prev: LinkItem | null;
  next: LinkItem | null;
};

type LinkItem = {
  href: string;
  title: string;
  label?: string;
  disabled?: boolean;
  items?: LinkItem[];
};

export function DocsPager({ doc }: { doc: Doc }) {
  const pager = getPagerForDoc(doc);
  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && pager?.prev?.href) {
        e.preventDefault();
        router.push(pager.prev.href);
      }
      if (e.key === "ArrowRight" && pager?.next?.href) {
        e.preventDefault();
        router.push(pager.next.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pager]);

  if (!pager) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between gap-4",
        !pager?.prev?.href && "justify-end"
      )}
    >
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className="pr-3 pl-3 md:pl-1 h-9 w-min flex justify-start items-center rounded-lg transition-all gap-1 group whitespace-nowrap active:scale-[98%] cursor-pointer text-sm bg-background hover:bg-sidebar-accent border border-border md:w-auto max-w-56 text-foreground dark:text-muted-foreground hover:text-foreground duration-300 shadow-xs"
        >
          <ChevronLeftIcon className="h-4 w-4 md:hidden block" />
          <kbd className="pointer-events-none hidden h-6 w-6 select-none items-center gap-1 rounded-md border border-border bg-muted/50 px-1.5 text-[10px] font-medium opacity-100 md:flex mr-2">
            <ArrowLeftIcon className="h-3 w-3" />
          </kbd>
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className="pl-3 pr-3 md:pr-1 h-9 w-min flex justify-start items-center rounded-lg transition-all gap-1 group whitespace-nowrap active:scale-[98%] cursor-pointer text-sm bg-background hover:bg-sidebar-accent border border-border md:w-auto max-w-56 text-foreground dark:text-muted-foreground hover:text-foreground duration-300 shadow-xs"
        >
          {pager.next.title}
          <ChevronRightIcon className="h-4 w-4 md:hidden block" />
          <kbd className="pointer-events-none hidden h-6 w-6 select-none items-center gap-1 rounded-md border border-border bg-muted/50 px-1.5 text-[10px] font-medium opacity-100 md:flex ml-2">
            <ArrowRightIcon className="h-3 w-3" />
          </kbd>
        </Link>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: doc.title,
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  pager.prev
                    ? {
                        "@type": "ListItem",
                        position: 1,
                        name: pager.prev.title,
                        url: pager.prev.href,
                      }
                    : null,
                  pager.next
                    ? {
                        "@type": "ListItem",
                        position: 2,
                        name: pager.next.title,
                        url: pager.next.href,
                      }
                    : null,
                ].filter(Boolean),
              },
            },
            null,
            2
          ),
        }}
      />
    </div>
  );
}

export function getPagerForDoc(doc: Doc): Pager {
  const flattenedLinks = [
    null,
    ...flatten(docsConfig.flatMap((category) => category.items)),
    null,
  ];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );

  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: LinkItem[]): LinkItem[] {
  let result: LinkItem[] = [];

  links.forEach((link) => {
    if (link.href && link.label !== "soon") {
      result.push(link);
    }
    if (Array.isArray(link.items) && link.items.length > 0) {
      result = result.concat(flatten(link.items));
    }
  });

  return result.filter((link) => !link?.disabled);
}
