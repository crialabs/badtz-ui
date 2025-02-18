"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Image {
  url: string;
  name: string;
}

interface CloudOrbitProps {
  duration?: number;
  children?: React.ReactNode;
  size?: number;
  className?: string;
  images?: Image[];
  [key: string]: any;
}

export function CloudOrbit({
  duration = 2,
  children,
  size = 160,
  className,
  images = [],
  ...props
}: CloudOrbitProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lastTimestamp = React.useRef(0);

  React.useEffect(() => {
    let animationFrameId: number;

    const updateFrame = (timestamp: number) => {
      if (lastTimestamp.current === 0) {
        lastTimestamp.current = timestamp;
      }

      const elapsedTime = (timestamp - lastTimestamp.current) / 1000;
      const currentImageIndex =
        Math.floor(elapsedTime / duration) % images.length;

      setCurrentIndex(currentImageIndex);

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    if (images.length > 0) {
      animationFrameId = requestAnimationFrame(updateFrame);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, images.length]);

  return (
    <div
      style={
        {
          "--size": `${size}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative h-[--size] w-[--size] select-none rounded-full flex items-center justify-center",
        className,
      )}
      {...props}
    >
      <AnimatePresence>
        {images.length > 0 &&
          images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.img
                  key={image.url}
                  src={image.url}
                  alt={image.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: [0.8, 1] }}
                  exit={{ opacity: 0, scale: [1, 0.8] }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 7,
                  }}
                  className={cn(
                    "absolute h-[--size] w-[--size] z-10 rounded-[inherit] bg-gradient-to-t from-neutral-100 dark:from-zinc-900 to-white dark:to-zinc-800 dark:shadow-[rgba(255,_255,_255,_0.3)_0px_1px_0px_inset] shadow-[rgba(0,_0,_0,_0.05)_0px_1px_0px_inset] border border-gray-100 dark:border-zinc-900",
                    className,
                  )}
                />
              ),
          )}
      </AnimatePresence>
      {children}
    </div>
  );
}

interface OrbitingImageProps {
  speed?: number;
  radius?: number;
  startAt?: number;
  size?: number;
  className?: string;
  images?: Image[];
  duration?: number;
  [key: string]: any;
}

export function OrbitingImage({
  speed = 20,
  radius = 100,
  startAt = 0,
  size = 80,
  className,
  images = [],
  duration = 2,
  ...props
}: OrbitingImageProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lastTimestamp = React.useRef(0);

  React.useEffect(() => {
    let animationFrameId: number;

    const updateFrame = (timestamp: number) => {
      if (lastTimestamp.current === 0) {
        lastTimestamp.current = timestamp;
      }

      const elapsedTime = (timestamp - lastTimestamp.current) / 1000;
      const currentImageIndex =
        Math.floor(elapsedTime / duration) % images.length;

      setCurrentIndex(currentImageIndex);

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    if (images.length > 0) {
      animationFrameId = requestAnimationFrame(updateFrame);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, images.length]);

  return (
    <div
      style={
        {
          "--speed": speed,
          "--radius": radius,
          "--size": `${size}px`,
          animationDelay: `-${startAt * speed}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute pointer-events-none h-[--size] w-[--size] z-[5] transform-gpu animate-cloud-orbit items-center justify-center rounded-full ",
        className,
      )}
      {...props}
    >
      <AnimatePresence>
        {images.length > 0 &&
          images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.url}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    position: "absolute",
                    transformOrigin: `center ${radius}px`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: [0.8, 1] }}
                  exit={{ opacity: 0, scale: [1, 0.8] }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 7,
                  }}
                  className={cn(
                    "rounded-full bg-gradient-to-t from-neutral-100 dark:from-zinc-900 to-white dark:to-zinc-800 dark:shadow-[rgba(255,_255,_255,_0.3)_0px_1px_0px_inset] shadow-[rgba(0,_0,_0,_0.05)_0px_1px_0px_inset] border border-gray-100 dark:border-zinc-900 p-[15%]",
                    className,
                  )}
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="h-full w-full flex items-center justify-center rounded-full object-contain"
                  />
                </motion.div>
              ),
          )}
      </AnimatePresence>
    </div>
  );
}
