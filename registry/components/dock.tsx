"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface DockProps {
  className?: string;
  children: React.ReactNode;
  maxAdditionalSize?: number;
  iconSize?: number;
}

interface DockIconProps {
  className?: string;
  src?: string;
  href: string;
  name: string;
  handleIconHover?: (e: React.MouseEvent<HTMLLIElement>) => void;
  children?: React.ReactNode;
  iconSize?: number;
}

type ScaleValueParams = [number, number];

export const scaleValue = function (
  value: number,
  from: ScaleValueParams,
  to: ScaleValueParams,
): number {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};

export function DockIcon({
  className,
  src,
  href,
  name,
  handleIconHover,
  children,
  iconSize,
}: DockIconProps) {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <>
      <style jsx>
        {`
          .icon:hover + .icon {
            width: calc(
              var(--icon-size) * 1.33 + var(--dock-offset-right, 0px)
            );
            height: calc(
              var(--icon-size) * 1.33 + var(--dock-offset-right, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.33 + var(--dock-offset-right, 0) * -1
            );
          }

          .icon:hover + .icon + .icon {
            width: calc(
              var(--icon-size) * 1.17 + var(--dock-offset-right, 0px)
            );
            height: calc(
              var(--icon-size) * 1.17 + var(--dock-offset-right, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.17 + var(--dock-offset-right, 0) * -1
            );
          }

          .icon:has(+ .icon:hover) {
            width: calc(var(--icon-size) * 1.33 + var(--dock-offset-left, 0px));
            height: calc(
              var(--icon-size) * 1.33 + var(--dock-offset-left, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.33 + var(--dock-offset-left, 0) * -1
            );
          }

          .icon:has(+ .icon + .icon:hover) {
            width: calc(var(--icon-size) * 1.17 + var(--dock-offset-left, 0px));
            height: calc(
              var(--icon-size) * 1.17 + var(--dock-offset-left, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.17 + var(--dock-offset-left, 0) * -1
            );
          }
        `}
      </style>
      <li
        ref={ref}
        style={
          {
            transition:
              "width, height, margin-top, cubic-bezier(0.25, 1, 0.5, 1) 150ms",
            "--icon-size": `${iconSize}px`,
          } as React.CSSProperties
        }
        onMouseMove={handleIconHover}
        className={cn(
          "icon h-[var(--icon-size)] w-[var(--icon-size)] px-[calc(var(--icon-size)*0.075)] group/li cursor-pointer hover:w-[calc(var(--icon-size)*1.5)] hover:h-[calc(var(--icon-size)*1.5)] hover:-mt-[calc(var(--icon-size)/2)] [&_img]:object-contain flex items-center justify-center",
          className,
        )}
      >
        <a
          href={href}
          className="relative aspect-square rounded-[10px] p-1.5 w-full bg-gradient-to-t from-neutral-100 dark:from-zinc-900 to-white dark:to-zinc-800 dark:shadow-[rgba(255,_255,_255,_0.3)_0px_1px_0px_inset] shadow-[rgba(0,_0,_0,_0.05)_0px_1px_0px_inset] border border-gray-100 dark:border-zinc-900 after:inset-0 after:absolute after:shadow-md after:shadow-zinc-800/10 after:rounded-[inherit] group/a"
        >
          <span className="text-xs absolute top-[-40px] border border-gray-100 dark:border-zinc-800 text-black dark:text-white rounded-md bg-gradient-to-t from-neutral-100 dark:from-zinc-900 to-white dark:to-zinc-800 p-1 px-2 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover/li:opacity-100 whitespace-nowrap">
            {name}
          </span>
          {src ? (
            <img
              src={src}
              alt={name}
              className="rounded-[inherit] h-full w-full"
            />
          ) : (
            children
          )}
        </a>
      </li>
    </>
  );
}

export function Dock({
  className,
  children,
  maxAdditionalSize = 5,
  iconSize = 55,
}: DockProps) {
  const dockRef = useRef<HTMLDivElement | null>(null);

  const handleIconHover = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;
    const mousePos = e.clientX;
    const iconPosLeft = e.currentTarget.getBoundingClientRect().left;
    const iconWidth = e.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePos - iconPosLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize],
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`,
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`,
    );
  };

  return (
    <nav ref={dockRef} role="navigation" aria-label="Main Dock">
      <ul
        className={cn(
          "flex items-center bg-gradient-to-t from-neutral-50 dark:from-zinc-950 to-white dark:to-zinc-900 border border-gray-100 dark:border-zinc-900 p-1 rounded-xl ",
          className,
        )}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement<DockIconProps>(child)
            ? React.cloneElement(child as React.ReactElement<DockIconProps>, {
                handleIconHover,
                iconSize,
              })
            : child,
        )}
      </ul>
    </nav>
  );
}
