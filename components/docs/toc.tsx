"use client";

import * as React from "react";
import type { TableOfContents, Item } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

function getItemOffset(depth: number): number {
  if (depth <= 1) return 14;
  if (depth === 2) return 26;
  return 36;
}

function getLineOffset(depth: number): number {
  return depth >= 2 ? 10 : 0;
}

interface FlattenedItem extends Item {
  depth: number;
}

function flattenTocItems(items: Item[], depth = 1): FlattenedItem[] {
  return items.flatMap((item) => [
    { ...item, depth },
    ...(item.items ? flattenTocItems(item.items, depth + 1) : []),
  ]);
}

function TocThumb({
  containerRef,
  className,
  activeId,
  items,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  className?: string;
  activeId: string | null;
  items: FlattenedItem[];
}) {
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    console.log("[TocThumb] Active ID:", activeId);
    if (!containerRef.current || !activeId) {
      setStyle({ opacity: 0, height: "0px" });
      return;
    }

    const activeElement = containerRef.current.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`
    );
    if (!activeElement) {
      console.log("[TocThumb] Active element not found for:", activeId);
      setStyle({ opacity: 0, height: "0px" });
      return;
    }

    const top = activeElement.offsetTop;
    const height = activeElement.clientHeight;
    console.log("[TocThumb] Calculated Style:", { top, height });

    if (isNaN(top) || isNaN(height)) {
      console.log("[TocThumb] Invalid top/height:", { top, height });
      setStyle({ opacity: 0, height: "0px" });
      return;
    }

    const newStyle = {
      transform: `translateY(${top}px)`,
      height: `${height}px`,
      opacity: 1,
    };
    console.log("[TocThumb] Setting Style:", newStyle);
    setStyle(newStyle);
  }, [activeId, containerRef, items]);

  return (
    <div
      className={cn(
        "absolute start-0 w-0.5 rounded-full bg-primary transition-all duration-200 ease-in-out",
        className
      )}
      style={{ ...style, left: "0px" }}
    />
  );
}

function TOCItem({
  item,
  activeId,
  upperDepth = item.depth,
  lowerDepth = item.depth,
}: {
  item: FlattenedItem;
  activeId: string | null;
  upperDepth?: number;
  lowerDepth?: number;
}) {
  const offset = getLineOffset(item.depth);
  const upperOffset = getLineOffset(upperDepth);
  const lowerOffset = getLineOffset(lowerDepth);
  const isActive = item.url === `#${activeId}`;

  return (
    <a
      href={item.url}
      style={{
        paddingInlineStart: getItemOffset(item.depth),
      }}
      className={cn(
        "relative block py-1.5 text-sm transition-colors",
        isActive ? "font-medium text-accent" : "text-muted-foreground"
      )}
      aria-current={isActive ? "location" : undefined}
    >
      {/* Diagonal line from upper item */}
      {offset !== upperOffset && item.depth > 1 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${Math.max(offset, upperOffset)} 12`}
          preserveAspectRatio="none"
          className="absolute -top-1.5 start-0 h-3 w-auto rtl:-scale-x-100"
          style={{ left: `${Math.min(offset, upperOffset)}px` }}
        >
          <line
            x1={upperOffset > offset ? Math.abs(offset - upperOffset) : 0}
            y1="0"
            x2={upperOffset < offset ? Math.abs(offset - upperOffset) : 0}
            y2="12"
            className="stroke-border"
            strokeWidth="1"
          />
        </svg>
      ) : null}
      {/* Vertical line segment */}
      <div
        className={cn(
          "absolute inset-y-0 w-px bg-border",
          offset !== upperOffset && item.depth > 1 ? "top-1.5" : "top-0",
          offset !== lowerOffset && item.depth > 1 ? "bottom-1.5" : "bottom-0"
        )}
        style={{
          insetInlineStart: offset,
        }}
      />
      {item.title}
    </a>
  );
}

interface TocProps {
  toc: TableOfContents;
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const [svg, setSvg] = React.useState<{
    path: string;
    width: number;
    height: number;
  } | null>(null);

  const flattenedItems = React.useMemo(
    () => (toc?.items ? flattenTocItems(toc.items) : []),
    [toc]
  );
  const itemIds = React.useMemo(
    () => flattenedItems.map((item) => item.url?.split("#")[1]).filter(Boolean),
    [flattenedItems]
  );

  const activeId = useActiveItem(itemIds);
  console.log("[DashboardTOC] Active ID:", activeId);

  React.useEffect(() => {
    if (!containerRef.current || flattenedItems.length === 0) return;
    const container = containerRef.current;

    const calculatePath = () => {
      if (container.clientHeight === 0) return;
      let w = 0,
        h = 0;
      const d: string[] = [];
      let pathCalculated = false;

      flattenedItems.forEach((item) => {
        const element = container.querySelector<HTMLElement>(
          `a[href="${item.url}"]`
        );
        if (!element) return;

        const styles = getComputedStyle(element);
        const offset = getLineOffset(item.depth);
        const paddingTop = parseFloat(styles.paddingTop) || 0;
        const paddingBottom = parseFloat(styles.paddingBottom) || 0;
        const top = element.offsetTop + paddingTop;
        const bottom = element.offsetTop + element.clientHeight - paddingBottom;

        if (isNaN(top) || isNaN(bottom) || isNaN(offset)) return;

        w = Math.max(offset + 1, w);
        h = Math.max(h, bottom);

        d.push(`${d.length === 0 ? "M" : "L"}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
        pathCalculated = true;
      });

      if (pathCalculated && w > 0 && h > 0) {
        const newSvgState = {
          path: d.join(" "),
          width: Math.max(w, 1),
          height: Math.max(h, 1),
        };
        // Only update if different to prevent infinite loops if observers trigger unnecessarily
        setSvg((currentSvg) => {
          if (JSON.stringify(currentSvg) !== JSON.stringify(newSvgState)) {
            // console.log("[DashboardTOC] Calculating new SVG:", newSvgState);
            return newSvgState;
          }
          return currentSvg;
        });
      } else {
        // console.log("[DashboardTOC] Resetting SVG state");
        setSvg(null);
      }
    };

    // Initial calculation
    calculatePath();

    // Use ResizeObserver to recalculate on container resize
    const observer = new ResizeObserver(calculatePath);
    observer.observe(container);

    // Observe changes in children that might affect layout (e.g., dynamic content loading)
    const mutationObserver = new MutationObserver(calculatePath);
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [flattenedItems]); // Rerun when items change

  React.useEffect(() => {
    if (svg) {
      console.log("[DashboardTOC] SVG State Updated:", svg);
    }
  }, [svg]);

  if (!mounted || flattenedItems.length === 0) {
    // Optionally, render a placeholder or empty state
    // return <p className="text-sm text-muted-foreground">No sections on this page.</p>;
    return null; // Or return null if preferred
  }

  return (
    <div className="relative space-y-2">
      {" "}
      {/* Added relative positioning */}
      <p className="font-medium">On This Page</p>
      <div className="relative">
        {" "}
        {/* Added relative positioning */}
        {/* SVG Mask Container */}
        {svg ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute start-0 top-0 rtl:-scale-x-100"
            style={{
              width: `${svg.width}px`,
              height: `${svg.height}px`,
              maskImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${svg.width} ${svg.height}'><path d='${svg.path}' stroke='black' stroke-width='1' fill='none' /></svg>`
              )}")`,
              WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${svg.width} ${svg.height}'><path d='${svg.path}' stroke='black' stroke-width='1' fill='none' /></svg>`
              )}")`, // For Safari/Webkit
            }}
          >
            {/* Active Item Indicator */}
            <TocThumb
              containerRef={containerRef}
              activeId={activeId}
              items={flattenedItems}
              // No extra className needed here as base styles are in TocThumb
            />
          </div>
        ) : null}
        {/* Actual TOC Items */}
        <div className="flex flex-col" ref={containerRef}>
          {flattenedItems.map((item, i) => (
            <TOCItem
              key={item.url || i} // Use index as fallback key
              item={item}
              activeId={activeId}
              upperDepth={flattenedItems[i - 1]?.depth}
              lowerDepth={flattenedItems[i + 1]?.depth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Intersection Observer Hook (Keep existing) ---
function useActiveItem(itemIds: (string | undefined)[]) {
  // Allow undefined IDs
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const validIds = itemIds.filter(
      (id): id is string => typeof id === "string"
    ); // Filter out undefined/null
    if (validIds.length === 0) return; // Don't run if no valid IDs

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Adjust rootMargin as needed: top, right, bottom, left
      // Negative top margin: Trigger when element is X pixels from top of viewport
      // Negative bottom margin: Trigger when element is Y pixels from bottom of viewport
      // e.g., '0% 0% -40% 0%' = triggers when element enters top 60% of viewport
      { rootMargin: `0% 0% -80% 0%`, threshold: 0.5 } // Experiment with threshold
    );

    validIds.forEach((id) => {
      // Check if ID is valid before getting element
      if (!id) return;
      try {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          console.warn(`TOC: Element with ID '${id}' not found.`);
        }
      } catch (e) {
        console.error(`TOC: Error finding element with ID '${id}':`, e);
      }
    });

    return () => {
      validIds.forEach((id) => {
        if (!id) return;
        try {
          const element = document.getElementById(id);
          if (element) {
            observer.unobserve(element);
          }
        } catch (e) {
          // Silently ignore errors during cleanup
        }
      });
    };
  }, [itemIds]); // Dependency array includes itemIds

  return activeId;
}

// --- Removed Old Tree Component ---
// The old Tree component is no longer needed as we use a flat list and TOCItem component.
