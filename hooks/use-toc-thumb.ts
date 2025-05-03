"use client";

import { type RefObject, useLayoutEffect, useState } from "react";

export type TOCThumb = [top: number, height: number];

export function useTocThumb(
  containerRef: RefObject<HTMLElement>,
  activeItem?: string | null
): TOCThumb {
  const [pos, setPos] = useState<TOCThumb>([0, 0]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || !activeItem) {
      setPos([0, 0]);
      return;
    }

    const element = container.querySelector<HTMLElement>(
      `a[href="#${activeItem}"]`
    );
    if (!element) {
      setPos([0, 0]);
      return;
    }

    const styles = getComputedStyle(element);
    const top = element.offsetTop + parseFloat(styles.paddingTop);
    const bottom =
      element.offsetTop +
      element.clientHeight -
      parseFloat(styles.paddingBottom);

    setPos([top, bottom - top]);
  }, [activeItem, containerRef]);

  return pos;
}
