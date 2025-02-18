// @ts-nocheck
"use client";

import * as React from "react";
import { TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface TocProps {
  toc: TableOfContents;
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items?.length) {
    return null;
  }

  return (
    <div className="space-y-2 px-1">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length ? (
    <ul className={cn("m-0 list-none px-1", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        const hasChildren = item.items?.length;
        const isActiveParent = hasChildren
          ? item.items.some((subItem) => subItem.url === `#${activeItem}`)
          : false;

        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            {hasChildren ? (
              <Collapsible defaultOpen={false} className="space-y-2">
                <CollapsibleTrigger
                  className={cn(
                    "flex items-start gap-2 font-medium transition text-muted-foreground hover:text-foreground text-left",
                    isActiveParent && "text-foreground font-semibold", // Highlight si actif
                  )}
                >
                  {item.title}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.url}
                          className={cn(
                            "inline-block no-underline transition-colors hover:text-foreground pt-2",
                            subItem.url === `#${activeItem}`
                              ? "font-medium text-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <a
                href={item.url}
                className={cn(
                  "inline-block no-underline transition-colors hover:text-foreground",
                  item.url === `#${activeItem}`
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  ) : null;
}
