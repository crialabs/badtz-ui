"use client";

import * as React from "react";
import { useState } from "react";

interface Visual3Props {
  mainColor?: string;
  secondaryColor?: string;
  gridColor?: string;
}

export function Visual3({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808015",
}: Visual3Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="inset-0 absolute z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={
          {
            "--color": mainColor,
            "--secondary-color": secondaryColor,
          } as React.CSSProperties
        }
      />

      <div className="w-[356px] h-[180px] rounded-t-lg relative overflow-hidden">
        <Layer4
          color={mainColor}
          secondaryColor={secondaryColor}
          hovered={hovered}
        />
        <Layer3 color={mainColor} />
        <Layer2 color={mainColor} />
        <Layer1 color={mainColor} secondaryColor={secondaryColor} />
        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  );
}

interface LayerProps {
  color: string;
  secondaryColor?: string;
  hovered?: boolean;
}

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="absolute z-[4] inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none bg-center [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-70"
    />
  );
};

const EllipseGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="w-full h-full z-[5] absolute inset-0 flex items-center justify-center">
      <svg
        width="356"
        height="196"
        viewBox="0 0 356 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="356" height="180" fill="url(#paint0_radial_12_207)" />
        <defs>
          <radialGradient
            id="paint0_radial_12_207"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(178 98) rotate(90) scale(98 178)"
          >
            <stop stopColor={color} stopOpacity="0.25" />
            <stop offset="0.34" stopColor={color} stopOpacity="0.15" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

const Layer3: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className=" inset-0 absolute z-[6] translate-y-full opacity-0 group-hover/animated-card:translate-y-0 group-hover/animated-card:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] flex items-center justify-center">
      <svg
        width="356"
        height="180"
        viewBox="0 0 356 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="356" height="180" fill="url(#paint0_linear_29_3)" />
        <defs>
          <linearGradient
            id="paint0_linear_29_3"
            x1="178"
            y1="0"
            x2="178"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Layer1: React.FC<LayerProps> = ({ color, secondaryColor }) => {
  return (
    <div
      className="absolute left-4 top-4 z-[8] flex items-center gap-1"
      style={
        {
          "--color": color,
          "--secondary-color": secondaryColor,
        } as React.CSSProperties
      }
    >
      <div className="rounded-full flex items-center dark:bg-black/25 bg-white/25 backdrop-blur-sm py-0.5 px-1.5 shrink-0 transition-opacity duration-300 ease-in-out group-hover/animated-card:opacity-0 border dark:border-zinc-800 border-zinc-200">
        <div className="h-1.5 w-1.5 bg-[var(--color)] rounded-full " />
        <span className="text-[10px] ml-1 dark:text-white text-black">
          +15,2%
        </span>
      </div>
      <div className="rounded-full flex items-center py-0.5 px-1.5 shrink-0 transition-opacity duration-300 ease-in-out group-hover/animated-card:opacity-0 dark:bg-black/25 bg-white/25 backdrop-blur-sm border dark:border-zinc-800 border-zinc-200 ">
        <div className="h-1.5 w-1.5 bg-[var(--secondary-color)] rounded-full " />
        <span className="text-[10px] ml-1 dark:text-white text-black">
          +18,7%
        </span>
      </div>
    </div>
  );
};

const Layer2: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className="relative w-[356px] h-full group"
      style={{ "--color": color } as React.CSSProperties}
    >
      <div className="bg-transparent absolute inset-0 w-[356px] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] group-hover/animated-card:translate-y-0 z-[7] flex p-4 items-start justify-center">
        <div className="border dark:border-zinc-800 border-zinc-200 rounded-md p-1.5 backdrop-blur-sm opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.6, 0, 1)] group-hover/animated-card:opacity-100 dark:bg-black/25 bg-white/25">
          <div className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[var(--color)] rounded-full shrink-0" />
            <p className="dark:text-white text-black text-xs">
              Random Data Visualization
            </p>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs">
            Displaying some interesting stats.
          </p>
        </div>
      </div>
    </div>
  );
};

const Layer4: React.FC<LayerProps> = ({ color, secondaryColor, hovered }) => {
  const rectsData = [
    {
      width: 15,
      height: 20,
      y: 110,
      hoverHeight: 20,
      hoverY: 130,
      x: 40,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 20,
      y: 90,
      hoverHeight: 20,
      hoverY: 130,
      x: 60,
      fill: color,
      hoverFill: color,
    },
    {
      width: 15,
      height: 40,
      y: 70,
      hoverHeight: 30,
      hoverY: 120,
      x: 80,
      fill: color,
      hoverFill: color,
    },
    {
      width: 15,
      height: 30,
      y: 80,
      hoverHeight: 50,
      hoverY: 100,
      x: 100,
      fill: color,
      hoverFill: color,
    },
    {
      width: 15,
      height: 30,
      y: 110,
      hoverHeight: 40,
      hoverY: 110,
      x: 120,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 50,
      y: 110,
      hoverHeight: 20,
      hoverY: 130,
      x: 140,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 50,
      y: 60,
      hoverHeight: 30,
      hoverY: 120,
      x: 160,
      fill: color,
      hoverFill: color,
    },
    {
      width: 15,
      height: 30,
      y: 80,
      hoverHeight: 20,
      hoverY: 130,
      x: 180,
      fill: color,
      hoverFill: color,
    },
    {
      width: 15,
      height: 20,
      y: 110,
      hoverHeight: 40,
      hoverY: 110,
      x: 200,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 40,
      y: 70,
      hoverHeight: 60,
      hoverY: 90,
      x: 220,
      fill: color,
      hoverFill: color,
    },
    {
      width: 15,
      height: 30,
      y: 110,
      hoverHeight: 70,
      hoverY: 80,
      x: 240,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 50,
      y: 110,
      hoverHeight: 50,
      hoverY: 100,
      x: 260,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 20,
      y: 110,
      hoverHeight: 80,
      hoverY: 70,
      x: 280,
      fill: "currentColor",
      hoverFill: secondaryColor,
    },
    {
      width: 15,
      height: 30,
      y: 80,
      hoverHeight: 90,
      hoverY: 60,
      x: 300,
      fill: color,
      hoverFill: color,
    },
  ];

  return (
    <div className="w-[356px] h-[180px] absolute inset-0 flex items-center justify-center group-hover/animated-card:scale-150 transition-transform duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] z-[8] text-neutral-800/10 dark:text-white/15">
      <svg width="356" height="180" xmlns="http://www.w3.org/2000/svg">
        {rectsData.map((rect, index) => (
          <rect
            key={index}
            width={rect.width}
            height={hovered ? rect.hoverHeight : rect.height}
            x={rect.x}
            y={hovered ? rect.hoverY : rect.y}
            fill={hovered ? rect.hoverFill : rect.fill}
            rx="2"
            ry="2"
            className="transition-all duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)]"
          />
        ))}
      </svg>
    </div>
  );
};
